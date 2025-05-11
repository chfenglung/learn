<script setup>
  const data = {
    title: '部落格精選',
    slider: [
      {
        img: 'https://www.fenglung.url.tw/learn-img/idx/idx-slide1.png',
        date: '2024/10/21',
        tag: '前端開發 x 職涯成長',
        hot: '最新文章',
        title: '自學前端不用怕：從零開始的三大關鍵',
        description:
          '嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」 其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！',
        detailed: {
          text: '閱讀內文',
          link: '/detailed/'
        }
      },
      {
        img: 'https://www.fenglung.url.tw/learn-img/idx/idx-slide2.png',
        date: '2024/07/08',
        tag: '#面試準備 #工程師求職',
        hot: '人氣文章',
        title: '前端面試不再慌：破解常見提問的三大策略',
        description:
          '面試前端工程師時，你或許擔心被問到各種刁鑽的技術題目，或是擔憂無法在短時間內展現實力。其實，許多面試官關注的重點並不僅是程式碼本身，更包含問題解決的流程與溝通能力。這篇文章將分享我在面試過程中常見的三大難題，以及如何以更具條理的方式回應，讓你在面試場合中脫穎而出。',
        detailed: {
          text: '閱讀內文',
          link: '/detailed/'
        }
      },
      {
        img: 'https://www.fenglung.url.tw/learn-img/idx/idx-slide3.png',
        date: '2024/09/03',
        tag: '#CSS設計 #視覺體驗',
        hot: '',
        title: 'CSS 魔法大揭密：排版與設計的三大關鍵技巧',
        description:
          '在瀏覽器畫面上實現各種精美介面，一直是前端開發充滿成就感的部分。但當面臨複雜的佈局需求或是響應式設計時，往往讓人抓破頭皮。這篇文章想跟大家分享我在實務專案中累積的三大技巧，幫助你更有效率地駕馭 CSS，打造兼具美感與功能性的網頁。',
        detailed: {
          text: '閱讀內文',
          link: '/detailed/'
        }
      }
    ]
  }
</script>

<template>
  <section class="idxChosen">
    <div class="container">
      <h2>{{ data.title }}</h2>
    </div>
    <div class="slide">
      <ul class="slide-content">
        <li v-for="(item, idx) in data.slider" :key="idx">
          <div class="pic">
            <img :src="item.img" :alt="item.title + '照片'" />
          </div>
          <div class="text">
            <p class="date">{{ item.date }}</p>
            <div class="tag">
              <p>{{ item.tag }}</p>
              <span v-if="item.hot != ''" class="hot">{{ item.hot }}</span>
            </div>
            <h3>{{ item.title }}</h3>
            <p class="description">{{ item.description }}</p>
            <router-link :to="item.detailed.link + `${idx + 1}`" class="more">{{
              item.detailed.text
            }}</router-link>
          </div>
        </li>
      </ul>
      <div class="slide-arrow">
        <a class="slide-prev disable"></a>
        <a class="slide-next"></a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .idxChosen {
    padding: 80px 0;
    overflow: hidden;

    .slide {
      max-width: 1432px;
      margin: 24px auto 0;
      position: relative;

      &-content {
        max-width: 1432px;
        display: flex;
        justify-content: center;

        gap: 24px;
        > li {
          width: 416px;
          flex-shrink: 0;
        }
      }
      .text {
        padding-top: 16px;
      }
      .date {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 4px;
      }
      .tag {
        display: flex;
        align-items: center;
        p {
          font-size: 24px;
          font-weight: 500;
          color: var(--color-blue);
          display: inline;
          line-height: 150%;
        }
        .hot {
          background-color: var(--color-blue);
          color: var(--color-white);
          border-radius: 18px;
          margin-left: 8px;
          font-size: 16px;
          font-weight: 700;
          display: inline-block;
          padding: 6px 12px;
          white-space: nowrap;
        }
      }
      h3 {
        font-size: 28px;
        line-height: 150%;
        font-weight: 700;
        color: var(--color-black);
        margin-bottom: 8px;
      }
      .description {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 16px;
        font-weight: 500;
        color: var(--color-grey);
      }
      .more {
        color: var(--color-grey);
        border: 1px solid var(--color-black);
        border-radius: 20px;
        font-size: 16px;
        font-weight: 500;
        padding: 8px 16px;
        display: inline-block;
        margin-top: 16px;
        &:hover {
          background-color: var(--color-blue);
          border: 1px solid var(--color-blue);
          color: var(--color-white);
        }
      }
      &-arrow {
        position: absolute;
        top: 50%;
        right: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        transform: translateY(-50%);
      }
      &-prev,
      &-next {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background-color: var(--color-blue);
        cursor: pointer;
        position: relative;
        transform: scale(1);
        transition: all 0.3s;
        &:hover {
          transform: scale(1.2);
        }
        &::before {
          position: absolute;
          content: '';
          width: 17px;
          height: 3px;
          background-color: var(--color-white);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        &::after {
          content: '';
          position: absolute;
          border-top: 3px solid var(--color-white);
          border-right: 3px solid var(--color-white);
          top: 50%;
          right: 13px;
          width: 13px;
          height: 13px;
          transform: translateY(-50%) rotate(45deg);
        }

        &.disable {
          background-color: var(--color-disable);
          cursor: default;

          &:hover {
            transform: scale(1);
          }
        }
      }
      &-prev {
        transform: scaleX(-1);
        &:hover {
          transform: scaleX(-1) scale(1.2);
        }
        &.disable:hover {
          transform: scaleX(-1) scale(1);
        }
      }
      &-next {
        &.disable:hover {
          transform: scale(1);
        }
      }
    }
  }
  @media (max-width: 1680px) {
    .idxChosen {
      .slide {
        padding-bottom: 74px;
        max-width: 1296px;
        &-arrow {
          top: unset;
          bottom: 0;
          transform: none;
          justify-content: flex-end;
          gap: 24px;
          padding-right: 12px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .idxChosen {
      padding: 64px 0;
      .slide {
        &-content {
          > li {
            width: 351px;
          }
        }
      }
    }
  }
</style>
