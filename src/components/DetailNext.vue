<script setup>
  import {} from 'vue'
  defineProps({
    prev: {
      type: Object,
      default: null
    },
    next: {
      type: Object,
      default: null
    }
  })
  const emit = defineEmits(['navigate'])
</script>

<template>
  <div class="DetailNext">
    <button :disabled="!prev" class="nav prev" @click="emit('navigate', prev.id)">
      <span>上一篇</span>
    </button>
    <button :disabled="!next" class="nav next" @click="emit('navigate', next.id)">
      <span>下一篇</span>
    </button>
  </div>
</template>

<style lang="scss">
  .DetailNext {
    display: flex;
    justify-content: space-between;
    .nav {
      line-height: 40px;
      cursor: pointer;
      background-color: var(--color-white);
      border: 1px solid var(--color-grey);
      border-radius: 20px;
      width: 100%;
      max-width: 108px;
      color: var(--color-grey);
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        &:hover {
          background-color: var(--color-white);
          color: var(--color-grey);
          opacity: 0.5;
          span::before {
            border-left: 1px solid var(--color-grey);
            border-bottom: 1px solid var(--color-grey);
          }
        }
      }
      &:hover {
        color: var(--color-white);
        background-color: var(--color-blue);
        border: 1px solid var(--color-blue);
        span::before {
          border-left: 1px solid var(--color-white);
          border-bottom: 1px solid var(--color-white);
        }
      }

      &.next {
        span {
          flex-direction: row-reverse;
        }

        span::before {
          transform: rotate(45deg) scale(-1);
        }
      }
      span {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        &::before {
          content: '';
          width: 12px;
          height: 12px;
          border-left: 1px solid var(--color-grey);
          border-bottom: 1px solid var(--color-grey);
          transform: rotate(45deg);
        }
      }
    }
  }
</style>
