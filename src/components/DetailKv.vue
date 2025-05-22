<script setup>
  import { ref, onMounted, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import detailData from '@/assets/detailArticle.json'
  const route = useRoute()

  const data = computed(() => {
    return detailData.data
  })
  const maxFullwidthChars = 76
  const truncatedDescription = ref('')

  const truncateDescription = (description, limit) => {
    if (!description) {
      return ''
    }

    let truncated = ''
    let count = 0
    for (let i = 0; i < description.length; i++) {
      truncated += description[i]
      count += description.charCodeAt(i) > 255 ? 1 : 1
      if (count >= limit) {
        truncated += '...'
        break
      }
    }
    return truncated
  }
  const currentArticle = computed(() => {
    return data.value.find(item => item.id === Number(route.params.id))
  })
  onMounted(() => {
    truncatedDescription.value = truncateDescription(
      currentArticle.value.text.description,
      maxFullwidthChars
    )
  })
</script>

<template>
  <section
    class="DetailKv"
    :style="{
      '--picPc': `url(${currentArticle.pic.pc})`,
      '--picMb': `url(${currentArticle.pic.mb})`
    }"
  >
    <div class="pic"></div>
    <div class="text">
      <p class="time">{{ currentArticle.text.time }}</p>
      <p class="subtitle">
        <span class="tag">{{ currentArticle.text.tag }}</span>
        <span class="hot">{{ currentArticle.text.hot }}</span>
      </p>
      <p class="title">{{ currentArticle.text.title }}</p>
      <p class="description">{{ truncatedDescription }}</p>
    </div>
  </section>
</template>

<style lang="scss">
  .DetailKv {
    --picPc: '';
    --picMb: '';
    display: flex;
    align-items: center;
    border: 1px solid var(--color-secondary);
    .pic {
      width: 50%;
      height: 0;
      background-image: var(--picPc);
      background-size: cover;
      background-position: center;
      padding-top: calc(640 / 1920) * 100%;
    }
    .text {
      width: 50%;
      padding: 24px;
    }
    .time {
      font-size: 16px;
      margin-bottom: 4px;
    }
    .subTitle {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
    }
    .tag {
      font-size: 24px;
      line-height: 150%;
    }
    .hot {
      background-color: var(--color-blue);
      color: var(--color-white);
      border-radius: 18px;
      padding: 6px 12px;
      font-size: 16px;
      font-weight: 700;
      margin-left: 8px;
      display: inline-block;
    }
    .title {
      font-size: 28px;
      font-weight: 700;
      color: var(--color-black);
      line-height: 150%;
      margin-bottom: 8px;
    }
    .description {
      margin-bottom: 16px;
    }
    .detailed {
      border: 1px solid var(--color-black);
      font-size: 16px;
      padding: 8px 16px;
      border-radius: 20px;
      &:hover {
        border: 1px solid var(--color-blue);
        background-color: var(--color-blue);
        color: var(--color-white);
      }
    }
  }
  @media (max-width: 1024px) {
    .DetailKv {
      flex-direction: column;
      .pic {
        width: 100%;
        padding-top: calc(640 / 1024) * 100%;
      }
      .text {
        width: 100%;
      }
    }
  }
  @media (max-width: 768px) {
    .DetailKv {
      .pic {
        background-image: var(--picMb);
        padding-top: calc(768 / 768) * 100%;
      }
      .text {
        padding: 48px 12px;
      }
    }
  }
</style>
