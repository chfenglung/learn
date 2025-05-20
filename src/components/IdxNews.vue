<script setup>
  import { ref } from 'vue'
  const data = {
    people: {
      pc: 'https://www.fenglung.url.tw/learn-img/idx/idx-news-people-pc.png',
      mb: 'https://www.fenglung.url.tw/learn-img/idx/idx-news-people-mb.png'
    },
    news: {
      pc: 'https://www.fenglung.url.tw/learn-img/idx/idxKvBg-pc.png',
      mb: 'https://www.fenglung.url.tw/learn-img/idx/idxKvBg-mb.png'
    },
    title: '訂閱電子報',
    subTitle: ['立即訂閱，搶先掌握', '前端 x 職涯', '的獨家資訊！']
  }
  const name = ref('')
  const email = ref('')
  const isSubmitting = ref(false)
</script>

<template>
  <section
    class="IdxNews"
    :style="{
      '--peoplePc': `url(${data.people.pc})`,
      '--peopleMb': `url(${data.people.mb})`,
      '--newsPc': `url(${data.news.pc})`,
      '--newsMb': `url(${data.news.mb})`
    }"
  >
    <div class="people"></div>
    <div class="news">
      <div class="form">
        <h2>{{ data.title }}</h2>
        <p>
          <span v-for="(item, idx) in data.subTitle" :key="idx">{{ item }}</span>
        </p>
        <div class="form-item">
          <input
            v-model="name"
            name="name"
            type="text"
            placeholder="請輸入您的大名"
            maxlength="20"
            autocomplete="off"
          />
        </div>
        <div class="form-item">
          <input
            v-model="email"
            name="email"
            type="text"
            placeholder="請輸入您的電子信箱"
            maxlength="100"
            autocomplete="off"
          />
        </div>

        <button :disabled="isSubmitting" class="submit">啟動訂閱</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .IdxNews {
    --peoplePc: '';
    --peopleMb: '';
    --newsPc: '';
    --newsMb: '';
    display: flex;
    .people {
      width: 50%;
      height: 0;
      background-image: var(--peoplePc);
      background-size: cover;
      background-position: center;
      padding-top: calc(834 / 1920) * 100%;
    }
    .news {
      display: flex;
      width: 50%;
      justify-content: center;
      align-items: center;
      background-image: var(--newsPc);
      background-size: cover;
      background-position: center;
    }
    .form {
      width: calc(800 / 960) * 100%;
      padding: 80px;
      background-color: var(--color-white);
      &-item {
        margin-top: 8px;
      }
      p {
        font-size: 20px;
        margin-bottom: 16px;
      }
      span {
        &:nth-of-type(2) {
          color: var(--color-blue);
        }
      }
    }
    input[type='text'] {
      position: relative;
      padding: 0 16px;
      width: 100%;
      max-height: 50px;
      font-size: 20px;
      background-color: #f1f1f1;
      line-height: 46px;
      border: none;
    }
    ::placeholder {
      color: var(--color-grey);
    }
    .submit {
      border: 1px solid var(--color-blue);
      border-radius: 20px;
      color: var(--color-blue);
      padding: 8px 16px;
      background-color: var(--color-white);
      margin-top: 24px;
      cursor: pointer;
    }
  }
  @media (max-width: 1280px) {
    .IdxNews {
      h2 {
        font-size: 48px;
      }
      .people {
        // width: 40%;
      }
      .news {
        // width: 60%;
        .form {
          padding: 40px 24px;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    .IdxNews {
      flex-direction: column;
      .people {
        width: 100%;
        padding-top: calc(1024 / 1024) * 100%;
      }
      h2 {
        font-size: 48px;
      }
      .news {
        width: 100%;
        padding: 12px;
        .form {
          width: 100%;
          max-width: 768px;
        }
      }
    }
  }
</style>
