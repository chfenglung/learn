<script setup>
  const data = {
    title: '與我聯繫',
    community: [
      {
        title: 'email',
        text: ['alysewang@hexschool.com', '合作洽談'],
        link: 'alysewang@hexschool.com'
      },
      {
        title: 'youtube',
        icon: 'https://www.fenglung.url.tw/learn-img/icon-youtube.png',
        text: ['Youtube', '職涯諮詢室'],
        link: 'Youtube.com'
      },
      {
        title: 'podcast',
        icon: 'https://www.fenglung.url.tw/learn-img/icon-Podcast.png',
        text: ['podcast', '職涯諮詢室'],
        link: 'podcast.com'
      },
      {
        title: 'Facebook',
        icon: 'https://www.fenglung.url.tw/learn-img/icon-Facebook.png',
        text: ['Facebook', '前端社群'],
        link: 'Facebook.com'
      },
      {
        title: 'Linkedin',
        icon: 'https://www.fenglung.url.tw/learn-img/icon-Linkedin.png',
        text: ['Linkedin', '職涯交流'],
        link: 'Linkedin.com'
      },
      {
        title: 'Instagram',
        icon: 'https://www.fenglung.url.tw/learn-img/icon-Instagram.png',
        text: ['Instagram', '日常分享'],
        link: 'Instagram.com'
      }
    ]
  }
</script>

<template>
  <section class="IdxContact">
    <div class="container">
      <h2>{{ data.title }}</h2>
      <ul class="community">
        <li>
          <div>
            <span>{{ data.community[0].text[0] }} </span>
            <span>{{ data.community[0].text[1] }} </span>
          </div>
          <span class="icon-arrow"></span>

          <a :href="'mailto:' + data.community[0].link"></a>
        </li>
        <li v-for="(item, idx) in data.community.slice(1)" :key="idx">
          <div>
            <img v-if="item.icon != ''" :src="item.icon" :alt="item.title" class="icon" />
            <span v-for="(txt, t) in item.text" :key="t">{{ txt }} </span>
          </div>
          <span class="icon-arrow"></span>

          <a :href="item.link"></a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
  .IdxContact {
    padding: 80px 0;
    .community {
      > li {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 28px;
        font-weight: 500;
        line-height: 150%;
        border-bottom: 1px solid var(--color-black);
        padding: 16px 0;
        &:hover {
          color: var(--color-blue);
        }
        &:first-of-type {
          span {
            &:first-of-type {
              text-decoration: underline;
            }
          }
        }
        > div {
          display: flex;
          align-items: center;
          gap: 8px;
          span:first-of-type {
            margin-right: 16px;
          }
        }
      }
      .icon {
        margin-right: 8px;
        max-width: 44px;
      }
      a {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .icon-arrow {
        position: relative;
        width: 24px;
        height: 24px;
        &::before {
          content: '';
          position: absolute;
          width: 13px;
          height: 1px;
          background-color: var(--color-black);
          right: 2px;
          top: 50%;
          transform: translateY(-50%);
        }
        &::after {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          border-right: 1px solid var(--color-black);
          border-bottom: 1px solid var(--color-black);
          right: 2px;
          top: 50%;
          transform: translateY(-50%) rotate(-45deg);
        }
      }
    }
  }
  @media (max-width: 1680px) {
    .IdxContact {
      .container {
        max-width: 1280px;
      }
    }
  }
  @media (max-width: 1280px) {
    .IdxContact {
      .container {
        max-width: 768px;
      }
    }
  }
  @media (max-width: 768px) {
    .IdxContact {
      padding: 64px 0;
      .container {
        max-width: 375px;
      }
      .community {
        > li {
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          font-size: 24px;
          > div {
            flex-wrap: wrap;
          }
        }
      }
    }
  }
</style>
