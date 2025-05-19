<script setup>
  import { ref, onMounted } from 'vue'
  const data = {
    pic: {
      pc: 'https://www.fenglung.url.tw/learn-img/blog/blog-keyPicPc.png',
      mb: 'https://www.fenglung.url.tw/learn-img/blog/blog-keyPicMb.png'
    },
    text: {
      time: '2024/10/21',
      tag: '前端開發 x 職涯成長',
      hot: '最新文章',
      title: '自學前端不用怕：從零開始的三大關鍵',
      description:
        '嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」 其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！',
      detailed: {
        text: '閱讀內文',
        link: '/blog/1'
      }
    }
  }
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

  onMounted(() => {
    truncatedDescription.value = truncateDescription(data.text.description, maxFullwidthChars)
  })
</script>

<template>
  <section
    class="BlogArticle"
    :style="{
      '--picPc': `url(${data.pic.pc})`,
      '--picMb': `url(${data.pic.mb})`
    }"
  >
    <div class="pic"></div>
    <div class="text">
      <p class="time">{{ data.text.time }}</p>
      <p class="subtitle">
        <span class="tag">{{ data.text.tag }}</span>
        <span class="hot">{{ data.text.hot }}</span>
      </p>
      <p class="title">{{ data.text.title }}</p>
      <p class="description">{{ truncatedDescription }}</p>
      <a :href="data.text.detailed.link" class="detailed">{{ data.text.detailed.text }}</a>
    </div>
  </section>
</template>

<style lang="scss">
  .BlogArticle {
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
    .BlogArticle {
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
    .BlogArticle {
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
