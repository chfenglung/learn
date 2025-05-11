<script setup>
  const data = {
    title: 'Alyse Wang',
    subTitle: '前端工程師 & 職涯諮詢師',
    description: [
      '嗨，我是 Alyse',
      '一名深耕前端技術的工程師。',
      '擅長 React、Vue 等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！'
    ],
    peoplePc: 'https://www.fenglung.url.tw/learn-img/Hero-pc.png',
    peopleMb: 'https://www.fenglung.url.tw/learn-img/Hero-mb.png',
    titlePc: 'https://www.fenglung.url.tw/learn-img/idx/idxKvBg-pc.png',
    titleMb: 'https://www.fenglung.url.tw/learn-img/idx/idxKvBg-mb.png',
    community: [
      {
        icon: 'https://www.fenglung.url.tw/learn-img/icon-youtube.png',
        link: 'javascript:;',
        title: 'YouTube'
      },
      {
        icon: 'https://www.fenglung.url.tw/learn-img/icon-Podcast.png',
        link: 'javascript:;',
        title: 'Podcast'
      },
      {
        icon: 'https://www.fenglung.url.tw/learn-img/icon-Facebook.png',
        link: 'javascript:;',
        title: 'Facebook'
      },
      {
        icon: 'https://www.fenglung.url.tw/learn-img/icon-Linkedin.png',
        link: 'javascript:;',
        title: 'Linkedin'
      },
      {
        icon: 'https://www.fenglung.url.tw/learn-img/icon-Instagram.png',
        link: 'javascript:;',
        title: 'Instagram'
      }
    ]
  }
</script>
<template>
  <section
    class="IdxKv"
    :style="{
      '--peoplePc': `url(${data.peoplePc})`,
      '--peopleMb': `url(${data.peopleMb})`,
      '--titlePc': `url(${data.titlePc})`,
      '--titleMb': `url(${data.titleMb})`
    }"
  >
    <div class="content">
      <div class="people"></div>
      <div class="title">
        <h1>{{ data.title }}</h1>
        <p>{{ data.subTitle }}</p>
      </div>
    </div>
    <div class="description">
      <p>
        <span>{{ data.description[0] }}</span>
        <span>{{ data.description[1] }}</span>
      </p>
      <p>{{ data.description[2] }}</p>
      <ul>
        <li v-for="(item, idx) in data.community" :key="idx">
          <a :href="item.link" target="_blank"><img :src="item.icon" :alt="item.title" /></a>
        </li>
      </ul>
    </div>
  </section>
</template>
<style lang="scss">
  .IdxKv {
    --peoplePc: '';
    --peopleMb: '';
    --titlePc: '';
    --titleMb: '';
    position: relative;
    padding-bottom: 202px;
    .content {
      display: flex;
      height: calc(843 / 1920) * 100%;
      position: relative;
      .people {
        background-image: var(--peoplePc);
        padding-top: calc(843 / 1920) * 100%;
        width: 50%;
        height: 100%;
        background-size: cover;
        background-position: center;
      }
      .title {
        background-image: var(--titlePc);
        background-position: center;
        width: 50%;
        background-size: cover;
        color: var(--color-blue);
        padding-left: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
          font-size: 120px;
          font-weight: 900;
          line-height: 150%;
        }
        p {
          font-size: 28px;
          font-weight: 700;
          line-height: 150%;
        }
      }
    }
    .description {
      position: absolute;
      right: 80px;
      bottom: 0;
      background-color: var(--color-white);
      padding: 80px 40px;
      width: calc(1077 / 1920) * 100%;
      p {
        line-height: 150%;
        font-size: 28px;
        & ~ p {
          margin-top: 16px;
        }
      }
      span {
        display: inline-block;
        & ~ span {
          margin-left: 8px;
        }
      }
      ul {
        display: flex;
        gap: 4px;
        margin-top: 16px;
      }
    }
  }
  @media (max-width: 1680px) {
    .IdxKv {
      .content {
        .title {
          padding-left: 60px;
          h1 {
            font-size: 100px;
          }
          p {
            font-size: 24px;
          }
        }
      }
      .description {
        right: 60px;
        padding: 60px 40px;
        p {
          font-size: 24px;
        }
      }
    }
  }
  @media (max-width: 1280px) {
    .IdxKv {
      padding-bottom: 180px;
      .content {
        .title {
          padding-left: 40px;
          h1 {
            font-size: 80px;
          }
          p {
            font-size: 24px;
          }
        }
      }
      .description {
        right: 30px;
        padding: 40px;
        p {
          font-size: 20px;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    .IdxKv {
      padding-bottom: 160px;
      .content {
        .title {
          padding-left: 30px;
          h1 {
            font-size: 60px;
          }
          p {
            font-size: 20px;
          }
        }
      }
      .description {
        right: 20px;
        padding: 30px;
        p {
          font-size: 18px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .IdxKv {
      padding-bottom: 0;
      .content {
        flex-direction: column;
        height: auto;
        .people {
          width: 100%;
          background-image: var(--peopleMb);
          padding-top: calc(640 / 640) * 100%;
        }
        .title {
          width: 100%;
          background-image: var(--titleMb);
          padding: 24px 24px 200px 24px;
          height: calc(356 / 375) * 100%;
          h1 {
            font-size: 52px;
          }
          p {
            font-size: 28px;
          }
        }
      }
      .description {
        width: 95%;
        left: 0;
        right: 0;
        bottom: unset;
        position: relative;
        margin: -160px auto 0;
        padding: 40px 24px;
        p {
          font-size: 24px;
        }
        span {
          & ~ span {
            margin-left: 0;
          }
        }
      }
    }
  }
</style>
