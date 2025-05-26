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
  const formData = ref({
    name: '',
    email: ''
  })

  const loading = ref(false)
  const successMessage = ref('')
  const errorMessage = ref('')
  const showError = ref(true)
  const SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbxqX3VfmFgk1d2TDh7DOuQsP2a8i6dlTdJgck3BXYh1rxkdjWzHAL8f-kQFCsvKilWowg/exec'

  const submitForm = async () => {
    loading.value = true
    successMessage.value = ''
    errorMessage.value = ''

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData.value)
      })

      successMessage.value = '表單送出成功！感謝您的填寫。'
      formData.value = { name: '', email: '' } // 清空表單
      // 清除所有驗證錯誤，並將欄位標記為未觸發狀態
      showError.value = false
    } catch (error) {
      console.error('表單送出失敗:', error)
      errorMessage.value = '送出失敗，請稍後再試。'
    } finally {
      loading.value = false
    }
  }
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
        <VForm v-slot="{ errors }" ref="formRef" @submit="submitForm">
          <div class="form-item">
            <VField
              id="name"
              v-model="formData.name"
              name="name"
              type="text"
              placeholder="請輸入您的大名"
              :rules="{ required: true, min: 2 }"
              :class="{ 'is-invalid': errors.name }"
            />
            <VErrorMessage v-if="showError" name="name" class="error-message-text" />
          </div>
          <div class="form-item">
            <VField
              id="email"
              v-model="formData.email"
              name="email"
              type="email"
              placeholder="請輸入您的電子信箱"
              rules="required|email"
              :class="{ 'is-invalid': errors.email }"
            />
            <VErrorMessage v-if="showError" name="email" class="error-message-text" />
          </div>

          <button
            type="submit"
            :disabled="loading || Object.keys(errors).length > 0"
            class="submit"
          >
            {{ loading ? '提交中...' : '啟動訂閱' }}
          </button>
          <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </VForm>
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

    input[type='text'],
    input[type='email'] {
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
      &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
        color: var(--color-grey);
        border: 1px solid var(--color-grey);
      }
    }

    .success-message {
      color: var(--color-blue);
      margin-top: 16px;
      text-align: center;
    }

    .error-message {
      color: #dc3545;
      margin-top: 16px;
      text-align: center;
    }
    .error-message-text {
      color: #dc3545;
    }
  }
  @media (max-width: 1280px) {
    .IdxNews {
      h2 {
        font-size: 48px;
      }
      .news {
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
