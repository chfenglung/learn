<script setup>
  import { ref, computed, watch } from 'vue'

  const props = defineProps({
    pageNum: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      default: 5
    }
  })

  const emit = defineEmits(['changePage'])

  const cache = ref([])

  const showNav = computed(() => {
    return cache.value.length
      ? cache.value
      : Array.from({ length: Math.min(props.pageNum, props.limit) }, (_, i) => i + 1)
  })

  watch(
    () => props.pageNum,
    () => {
      cache.value = getRange(props.currentPage)
    }
  )

  watch(
    () => props.currentPage,
    () => {
      cache.value = getRange(props.currentPage)
    }
  )

  function getRange(to) {
    const halfLimit = Math.floor(props.limit / 2)
    let start = Math.max(1, to - halfLimit)
    let end = Math.min(props.pageNum, start + props.limit - 1)

    // 調整如果接近邊界的情況
    if (end - start + 1 < props.limit) {
      start = Math.max(1, end - props.limit + 1)
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }

  function changePage(to) {
    if (typeof to === 'string') {
      to = props.currentPage + parseInt(to)
    }
    if (to <= 0) to = 1
    if (to > props.pageNum) to = props.pageNum
    emit('changePage', to)
  }
</script>

<template>
  <div v-show="pageNum > 1" class="pagination">
    <button class="arrow prev" :disabled="currentPage <= 1" @click="changePage('-1')"></button>

    <ul class="page-numbers">
      <li
        v-for="num in showNav"
        :key="num"
        class="page-number"
        :class="{ active: currentPage + 1 === num }"
        @click="changePage(num)"
      >
        {{ num }}
      </li>

      <span v-if="pageNum > limit && !showNav.includes(pageNum)" class="ellipsis"> ... </span>
    </ul>

    <button
      class="arrow next"
      :disabled="currentPage >= pageNum"
      @click="changePage('+1')"
    ></button>
  </div>
</template>

<style lang="scss">
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 328px;
    margin: 40px auto 0;
    height: 56px;
    background-color: var(--color-white);
    border-radius: 28px;

    .arrow {
      width: 24px;
      height: 24px;
      position: relative;
      border: none;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &::before {
        content: '';
        position: absolute;
        border-left: 1px solid var(--color-black);
        border-bottom: 1px solid var(--color-black);
        width: 14px;
        height: 14px;
        transform: rotate(45deg);
      }
      &.next {
        &::before {
          transform: rotate(45deg) scale(-1);
        }
      }
      &:disabled {
        cursor: default;
        &::before {
          border-left: 1px solid var(--color-grey);
          border-bottom: 1px solid var(--color-grey);
        }
      }
    }
    .page-numbers {
      display: flex;
    }

    .page-number {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      cursor: pointer;
      transition: all 0.2s;
      &.active {
        color: var(--color-blue);
        cursor: default;
      }
    }
    .ellipsis {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      cursor: default;
    }
  }
</style>
