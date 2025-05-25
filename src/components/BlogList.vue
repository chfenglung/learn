<script setup>
  import { ref, computed } from 'vue'
  import PaginationView from './PaginationView.vue'
  import listData from '@/assets/articleList.json'

  const data = computed(() => {
    return listData.data
  })
  const nowPage = ref(1)
  const itemsPerPage = 12 // 每頁顯示的項目數
  const pageNum = computed(() => Math.ceil(data.value.length / itemsPerPage)) // 根據data長度計算總頁數

  // 計算當前頁顯示的數據
  const paginatedData = computed(() => {
    const start = (nowPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return data.value.slice(start, end)
  })

  const scrollToAnchor = anchor => {
    const target = document.querySelector(anchor)
    const navHeight = document.querySelector('.NavBar').offsetHeight

    if (document.querySelector('.NavBar').getAttribute('class').includes('fx')) {
      window.scrollTo({
        top: target.offsetTop - navHeight,
        behavior: 'smooth'
      })
    } else {
      window.scrollTo({
        top: target.offsetTop - navHeight * 2,
        behavior: 'smooth'
      })
    }
  }
  const changePage = async page => {
    nowPage.value = page
    scrollToAnchor('#List')
  }
</script>

<template>
  <section class="BlogList">
    <div id="List" class="container">
      <div class="search">
        <div>
          <img src="https://www.fenglung.url.tw/learn-img/blog/icon-search.svg" alt="icon-search" />
          <input type="text" placeholder="搜尋你感興趣的文章" />
        </div>
      </div>
      <ul class="list">
        <li v-for="(item, idx) in paginatedData" :key="idx">
          <div class="pic">
            <img :src="item.img" :alt="item.title + '照片'" />
          </div>
          <div class="text">
            <p class="date">{{ item.date }}</p>
            <div class="tag">
              <p>{{ item.tag }}</p>
              <span v-if="item.hot" class="hot">{{ item.hot }}</span>
            </div>
            <h3>{{ item.title }}</h3>
            <p class="description">{{ item.description }}</p>
            <router-link :to="/detailed/ + `${item.id}`" target="_blank" class="more"
              >閱讀內文
            </router-link>
          </div>
        </li>
      </ul>
      <PaginationView
        :page-num="pageNum"
        :current-page="nowPage"
        @change-page="changePage"
      ></PaginationView>
    </div>
  </section>
</template>

<style lang="scss">
  .BlogList {
    padding: 96px 0;
    border: 1px solid var(--color-grey);
    margin-top: -1px;
    .search {
      margin-bottom: 40px;
      > div {
        display: flex;
        align-items: center;
        max-width: 461px;
        border: 1px solid var(--color-grey);
        border-radius: 28px;
        padding: 16px;
      }

      img {
        max-width: 24px;
        margin-right: 10px;
      }

      input[type='text'] {
        position: relative;
        width: 100%;
        max-width: 318px;
        height: 24px;
        font-size: 18px;
        line-height: 24px;
        background-color: transparent;
        border: none;
        outline: none;
      }
      ::placeholder {
        color: var(--color-grey);
      }
    }

    .list {
      max-width: 1296px;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
      gap: 80px 24px;

      > li {
        width: calc(33.33% - 16px);
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
          line-height: 150%;
          color: var(--color-blue);
          display: inline;
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
        font-weight: 700;
        color: var(--color-black);
        margin-bottom: 8px;
        line-height: 150%;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
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
        text-decoration: none;

        &:hover {
          background-color: var(--color-blue);
          border: 1px solid var(--color-blue);
          color: var(--color-white);
        }
      }
    }
  }
  @media (max-width: 1280px) {
    .BlogList {
      .list {
        max-width: 768px;
        > li {
          width: 360px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .BlogList {
      padding: 64px 0;
      .list {
        > li {
          width: 100%;
        }
      }
    }
  }
</style>
