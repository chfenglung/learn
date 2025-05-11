<script setup>
  import { ref, watch } from 'vue'
  import { useWindowSize } from '@vueuse/core'
  const { width } = useWindowSize()
  const data = {
    title: ['職涯諮詢', '成功案例'],
    img: {
      pc: 'https://www.fenglung.url.tw/learn-img/idx-case-pc.png',
      mb: 'https://www.fenglung.url.tw/learn-img/idx-case-mb.png'
    },
    msg: {
      box1: [
        '在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效',
        '突破原有的舒適圈。'
      ],
      box2: {
        text: '期待在下一個新機會中，我能與你一起攜手邁向更高峰！',
        reserve: {
          text: '立即預約諮詢',
          link: 'javascript:;'
        }
      }
    },
    podcastList: [
      {
        img: 'https://www.fenglung.url.tw/learn-img/idx-case-photo1.png',
        title: '無經驗到前端工程師 Offer',
        list: ['打造前端專案與履歷亮點', '深度強化面試表現'],
        podcast: {
          text: '前往聆聽 podcast',
          link: 'javascript:;'
        }
      },
      {
        img: 'https://www.fenglung.url.tw/learn-img/idx-case-photo2.png',
        title: '轉職迷茫到明確學習規劃',
        list: ['制訂階段性目標與時間安排', '鼓勵參與前端社群或活動'],
        podcast: {
          text: '前往聆聽 podcast',
          link: 'javascript:;'
        }
      },
      {
        img: 'https://www.fenglung.url.tw/learn-img/idx-case-photo3.png',
        title: '面試緊張到從容應對',
        list: ['透過面試模擬找出常犯的邏輯漏洞', '討論遇到不熟悉議題時的回應方式'],
        podcast: {
          text: '前往聆聽 podcast',
          link: 'javascript:;'
        }
      },
      {
        img: 'https://www.fenglung.url.tw/learn-img/idx-case-photo4.png',
        title: '面試緊張到從容應對',
        list: ['擬定進階框架或技術研究目標', '培養跨團隊溝通與簡報能力'],
        podcast: {
          text: '前往聆聽 podcast',
          link: 'javascript:;'
        }
      }
    ]
  }
  const isMobile = ref(false)
  watch(
    () => width.value,
    newVal => {
      if (newVal <= 768) {
        isMobile.value = true
      }
    }
  )
</script>

<template>
  <section class="IdxCase">
    <div class="container">
      <h2>
        <span v-for="(item, idx) in data.title" :key="idx">{{ item }}</span>
      </h2>
      <div class="case">
        <div class="consult">
          <div class="pic">
            <img v-if="isMobile" :src="data.img.mb" alt="" /><img
              v-else
              :src="data.img.pc"
              alt=""
            />
          </div>
          <div class="msg">
            <div class="box box1">
              <p>
                <span v-for="(item, ms1) in data.msg.box1" :key="ms1">{{ item }}</span>
              </p>
            </div>
            <div class="box box2">
              <p>{{ data.msg.box2.text }}</p>
              <a :href="data.msg.box2.reserve.link" class="btn-reserve">{{
                data.msg.box2.reserve.text
              }}</a>
            </div>
          </div>
        </div>
        <ul class="podcast">
          <li v-for="(single, i) in data.podcastList" :key="i">
            <img :src="single.img" :alt="single.title + '照片'" class="photo" />
            <h3>{{ single.title }}</h3>
            <ul class="check">
              <li v-for="(li, idx) in single.list" :key="idx">{{ li }}</li>
            </ul>
            <a :href="podcast / `${i + 1}`">前往聆聽 podcast</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .IdxCase {
    padding: 80px 0;
    .case {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    .consult {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 24px;
      position: relative;
      .pic {
        background-color: #ededed;
        padding: 24px;
        max-width: 745px;
        z-index: 0;
      }
      .msg {
        position: absolute;
        right: 0;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;
        max-width: 745px;
        z-index: 1;
      }
    }
    .box {
      padding: 144px 40px 80px;
      width: 100%;
      max-width: 526px;
      font-size: 16px;
      font-weight: 700;
      p {
        position: relative;
        &::before {
          content: '';
          width: 30px;
          height: 2.5px;
          border-radius: 3em;
          background-color: var(--color-blue);
          position: absolute;
          top: -43px;
          left: 0;
        }
      }
    }
    .box1 {
      background-color: var(--color-white);
      z-index: 1;

      span {
        & ~ span {
          color: var(--color-blue);
        }
      }
    }
    .box2 {
      position: relative;
      background-color: #f5f5f5;
      z-index: 2;
      margin-top: -40px;
      align-self: flex-end;
      .btn-reserve {
        color: var(--color-blue);
        font-size: 16px;
        font-weight: 700;
        padding: 8px 16px;
        border: 1px solid var(--color-blue);
        border-radius: 20px;
        display: inline-block;
        margin-top: 24px;
      }
    }
    .podcast {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      background-color: #f5f5f5;
      padding: 24px;
      > li {
        width: calc(25% - 18px);
      }

      .photo {
        width: 80px;
        margin-bottom: 16px;
      }
      h3 {
        font-size: 24px;
        font-weight: 700;
        line-height: 150%;
        color: #000;
        margin-bottom: 8px;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      a {
        color: var(--color-grey);
        font-size: 16px;
        font-weight: 500;
        padding: 8px 16px;
        display: inline-block;
        border: 1px solid var(--color-black);
        border-radius: 20px;
        margin-top: 16px;
        &:hover {
          background-color: var(--color-blue);
          color: var(--color-white);
          border: 1px solid var(--color-blue);
        }
      }
    }
    .check {
      border-bottom: 1px solid var(--color-grey);
      padding-bottom: 16px;
      > li {
        position: relative;
        padding-left: 24px;
        font-size: 16px;
        font-weight: 500;
        color: var(--color-grey);
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        &::before {
          content: '';
          position: absolute;
          width: 16px;
          height: 16px;
          border-radius: 4px;
          background-color: var(--color-blue);
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        &::after {
          content: '';
          position: absolute;
          width: 5px;
          height: 8px;
          left: 4px;
          top: 35%;
          border-right: 1.5px solid var(--color-white);
          border-bottom: 1.5px solid var(--color-white);
          transform: rotate(45deg) translateY(-35%);
        }
        & ~ li {
          margin-top: 8px;
        }
      }
    }
  }
  @media (max-width: 1680px) {
    .IdxCase {
      .container {
        max-width: 1280px;
      }
    }
  }
  @media (max-width: 1280px) {
    .IdxCase {
      .container {
        max-width: 768px;
      }
      .consult {
        flex-direction: column;
        .pic {
          width: 100%;
          max-width: 100%;
        }
        .msg {
          position: relative;
          max-width: 100%;
        }
      }
      .box {
        max-width: 100%;
        padding: 104px 24px 40px;
      }
      .box2 {
        margin-top: 0;
      }
      .podcast {
        gap: 40px 24px;
        > li {
          width: calc(50% - 24px);
        }
      }
    }
  }
  @media (max-width: 768px) {
    .IdxCase {
      h2 {
        span {
          display: block;
        }
      }
      .container {
        max-width: 375px;
      }
      .podcast {
        > li {
          width: 100%;
        }
      }
    }
  }
</style>
