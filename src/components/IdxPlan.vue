<script setup>
  const data = {
    title: '專業服務與方案',
    list: [
      {
        img: 'https://fenglung.url.tw/learn-img/idx/photo1.png',
        title: '履歷健檢',
        text: '履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。'
      },
      {
        img: 'https://fenglung.url.tw/learn-img/idx/photo2.png',
        title: '線上諮詢',
        text: '想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。'
      },
      {
        img: 'https://fenglung.url.tw/learn-img/idx/photo3.png',
        title: '網頁開發',
        text: '想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。'
      },
      {
        img: 'https://fenglung.url.tw/learn-img/idx/photo4.png',
        title: '企業內訓',
        text: '想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。'
      }
    ],
    more: {
      text: '聯繫我，取得更多資訊！',
      link: 'javascript:;'
    }
  }
</script>
<template>
  <section class="IdxPlan">
    <div class="container">
      <h2>{{ data.title }}</h2>
      <ul class="list">
        <li v-for="(item, idx) in data.list" :key="idx" class="list-item">
          <div class="pic">
            <img :src="item.img" :alt="item.title + '照片'" />
          </div>
          <div class="text">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </li>
      </ul>
      <div class="more">
        <a :href="data.more.link" target="_blank"
          ><p>{{ data.more.text }}</p>
          <span></span>
        </a>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
  .IdxPlan {
    padding: 80px 0;

    .list {
      display: flex;
      flex-direction: column;
      gap: 64px;
      width: 100%;
      max-width: 1076px;
      margin: 32px auto 0;

      &-item {
        display: flex;
        position: relative;
        align-items: center;
        &:nth-of-type(even) {
          flex-direction: row-reverse;
          .text {
            right: unset;
            left: 0;
          }
        }
      }
      .pic {
        width: 60%;
        max-width: 636px;
        position: relative;
        z-index: 0;
      }
      .text {
        width: 50%;
        background-color: var(--color-white);
        max-width: 480px;
        padding: 64px 24px 24px;
        right: 0;
        z-index: 1;
        min-height: 186px;
        position: absolute;
      }
      h3 {
        font-size: 28px;
        font-weight: 700;
        line-height: 150%;
        margin-bottom: 8px;
        position: relative;
        &::before {
          content: '';
          width: 30px;
          height: 3px;
          background-color: var(--color-blue);
          position: absolute;
          left: 0;
          top: -20px;
        }
      }
    }
    .more {
      width: 100%;
      max-width: 1076px;
      margin: 32px auto 0;
      font-size: 28px;
      font-weight: 700;
      line-height: 150%;
      color: var(--color-black);

      a {
        display: flex;
        justify-content: flex-end;
        align-content: center;

        &:hover {
          color: var(--color-blue);
        }
      }
      span {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: inline-block;
        border: 1px solid var(--color-black);
        position: relative;

        &::before {
          position: absolute;
          content: '';
          width: 13px;
          height: 1px;
          background-color: var(--color-black);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        &::after {
          content: '';
          position: absolute;
          border-top: 1px solid var(--color-black);
          border-right: 1px solid var(--color-black);
          top: 50%;
          right: 12px;
          width: 9px;
          height: 9px;
          transform: translateY(-50%) rotate(45deg);
        }
      }
    }
  }
  @media (max-width: 1680px) {
    .IdxPlan {
      .container {
        padding: 0 12px;
      }
    }
  }
  @media (max-width: 768px) {
    .IdxPlan {
      padding: 64px 0;
      h2 {
        font-size: 48px;
      }
      .list {
        gap: 32px;
        &-item {
          flex-direction: column;
          &:nth-of-type(even) {
            flex-direction: column;
          }
          &:nth-of-type(even) .text {
            left: unset;
          }
        }
        .pic {
          width: 100%;
          max-width: 100%;
        }
        .text {
          width: 100%;
          max-width: 100%;
          position: relative;
        }
      }
      .more {
        a {
          flex-direction: column;
          align-items: flex-end;
        }
      }
    }
  }
</style>
