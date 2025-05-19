<script setup>
  import {} from 'vue'
  const data = {
    title: 'BLOG',
    subTitle: '前端工程師 & 職涯諮詢師',
    people: {
      pc: 'https://www.fenglung.url.tw/learn-img/Hero-pc.png',
      mb: 'https://www.fenglung.url.tw/learn-img/Hero-mb.png'
    },
    textBlock: {
      pc: 'https://www.fenglung.url.tw/learn-img/idx/idxKvBg-pc.png',
      mb: 'https://www.fenglung.url.tw/learn-img/idx/idxKvBg-mb.png'
    }
  }
</script>

<template>
  <section
    class="BlogKv"
    :style="{
      '--peoplePc': `url(${data.people.pc})`,
      '--peopleMb': `url(${data.people.mb})`,
      '--textBlockPc': `url(${data.textBlock.pc})`,
      '--textBlockMb': `url(${data.textBlock.mb})`
    }"
  >
    <div class="content">
      <div class="people"></div>
      <div class="textBlock">
        <h1>{{ data.title }}</h1>
        <p>{{ data.subTitle }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .BlogKv {
    --peoplePc: '';
    --peopleMb: '';
    --textBlockPc: '';
    --textBlockMb: '';
    position: relative;
    .content {
      display: flex;
      height: calc(834 / 1920) * 100%;
      position: relative;
      .people {
        background-image: var(--peoplePc);
        padding-top: calc(834 / 1920) * 100%;
        width: 50%;
        height: 100%;
        background-size: cover;
        background-position: center;
      }
      .textBlock {
        background-image: var(--textBlockPc);
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
  }
  @media (max-width: 1680px) {
    .BlogKv {
      .content {
        .textBlock {
          padding-left: 60px;
          h1 {
            font-size: 100px;
          }
          p {
            font-size: 24px;
          }
        }
      }
    }
  }
  @media (max-width: 1280px) {
    .BlogKv {
      .content {
        .textBlock {
          padding-left: 40px;
          h1 {
            font-size: 80px;
          }
          p {
            font-size: 24px;
          }
        }
      }
    }
  }
  @media (max-width: 1024px) {
    .BlogKv {
      .content {
        .textBlock {
          padding-left: 30px;
          h1 {
            font-size: 60px;
          }
          p {
            font-size: 20px;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .BlogKv {
      .content {
        flex-direction: column;
        height: auto;
        .people {
          width: 100%;
          background-image: var(--peopleMb);
          padding-top: calc(640 / 640) * 100%;
        }
        .textBlock {
          width: 100%;
          background-image: var(--textBlockMb);
          padding: 24px;
          height: calc(180 / 375) * 100%;
          h1 {
            font-size: 52px;
          }
          p {
            font-size: 28px;
          }
        }
      }
    }
  }
</style>
