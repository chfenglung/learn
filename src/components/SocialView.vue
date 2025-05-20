<script setup>
  import {} from 'vue'
  const data = {
    email: 'alysewang@hexschool.com',
    social: [
      {
        icon: 'https://www.fenglung.url.tw/learn-img/icon-youtube.png',
        link: 'https://Youtube.com',
        alt: 'youtube'
      },
      {
        icon: 'https://www.fenglung.url.tw/learn-img/icon-Podcast.png',
        link: 'https://podcast.com',
        alt: 'podcast'
      },
      {
        icon: 'https://www.fenglung.url.tw/learn-img/icon-Facebook.png',
        link: 'https://Facebook.com',
        alt: 'Facebook'
      },
      {
        icon: 'https://www.fenglung.url.tw/learn-img/icon-Linkedin.png',
        link: 'https://Linkedin.com',
        alt: 'Linkedin'
      },
      {
        icon: 'https://www.fenglung.url.tw/learn-img/icon-Instagram.png',
        link: 'https://Youtube.com',
        alt: 'youtube'
      },
      {
        icon: 'https://www.fenglung.url.tw/learn-img/icon-youtube.png',
        link: 'https://Instagram.com',
        alt: 'Instagram'
      }
    ]
  }
</script>

<template>
  <section class="social">
    <div class="container">
      <div class="social-group">
        <a :href="'mailto:' + data.email" class="email">
          {{ data.email }}
        </a>
        <ul class="social-item">
          <li v-for="(item, idx) in data.social" :key="idx">
            <a :href="item.link" target="_blank">
              <img :src="item.icon" :alt="item.alt" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .social {
    padding: 80px 0;
    &-group {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-item {
      display: flex;
    }
    .email {
      text-decoration: none;
      font-size: 32px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media (max-width: 1280px) {
    .social {
      .container {
        max-width: 768px;
      }
    }
  }
  @media (max-width: 768px) {
    .social {
      display: none;
    }
  }
</style>
