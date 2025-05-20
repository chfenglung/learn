<script setup>
  import { ref } from 'vue'
  import PaginationView from './PaginationView.vue'
  const data = [
    {
      img: 'https://www.fenglung.url.tw/learn-img/blog/blog-list-1.png',
      date: '2024/10/11',
      tag: '#React #入門基礎',
      hot: '',
      title: 'React 入門不再迷惘：三步驟帶你上手核心概念',
      description:
        '你是否對 React 感到好奇，卻苦惱於該如何正式啟動學習之路？身為前端工程師兼職涯諮詢師，我常遇到同學問我：「React 到底該怎麼入門？」為了幫大家減少摸索的時間，我整理出三個循序漸進的關鍵步驟，帶你更輕鬆地掌握 React 核心概念，真正把理論應用在實際專案中。'
    },
    {
      img: 'https://www.fenglung.url.tw/learn-img/blog/blog-list-2.png',
      date: '2024/09/07',
      tag: '#作品集 #求職攻略',
      hot: '',
      title: '前端作品集打造指南：讓你的專案成為履歷亮點',
      description:
        '對正在求職的前端工程師而言，作品集往往是第一個「說話」的利器。當面試官瀏覽你的網頁作品時，能夠快速了解你的程式邏輯、設計感以及解決問題的思路。我在協助多位同學優化履歷與作品集的過程中，總結出一些關鍵要素，分享給正在打造、升級作品集的你。'
    },
    {
      img: 'https://www.fenglung.url.tw/learn-img/blog/blog-list-3.png',
      date: '2024/09/03',
      tag: '#CSS設計 #視覺體驗',
      hot: '',
      title: 'CSS 魔法大揭密：排版與設計的三大關鍵技巧',
      description:
        '在瀏覽器畫面上實現各種精美介面，一直是前端開發充滿成就感的部分。但當面臨複雜的佈局需求或是響應式設計時，往往讓人抓破頭皮。這篇文章想跟大家分享我在實務專案中累積的三大技巧，幫助你更有效率地駕馭 CSS，打造兼具美感與功能性的網頁。'
    },
    {
      img: 'https://www.fenglung.url.tw/learn-img/blog/blog-list-4.png',
      date: '2024/07/09',
      tag: '#轉職工程師 #學習心法',
      hot: '',
      title: '前端轉職必讀：從自學者到工程師的心路歷程',
      description:
        '能夠憑藉自學進入前端領域，聽起來令人振奮，但實際過程中可能遇到的挫折與疑慮，卻常常令人猶豫。回想當初我也是對程式一竅不通，卻在興趣的驅使下毅然踏上自學之路。今天想透過這篇文章，分享我的轉職經驗和一些調適心態的秘訣，盼能為有心投入前端領域的你提供一些力量與方向。'
    },
    {
      img: 'https://www.fenglung.url.tw/learn-img/blog/blog-list-5.png',
      date: '2024/07/08',
      tag: '#面試準備 #工程師求職',
      hot: '人氣文章',
      title: '前端面試不再慌：破解常見提問的三大策略',
      description:
        '面試前端工程師時，你或許擔心被問到各種刁鑽的技術題目，或是擔憂無法在短時間內展現實力。其實，許多面試官關注的重點並不僅是程式碼本身，更包含問題解決的流程與溝通能力。這篇文章將分享我在面試過程中常見的三大難題，以及如何以更具條理的方式回應，讓你在面試場合中脫穎而出。'
    },
    {
      img: 'https://www.fenglung.url.tw/learn-img/blog/blog-list-6.png',
      date: '2024/06/29',
      tag: '#Vue3 #框架學習',
      hot: '',
      title: 'Vue 3 新手指南：快速掌握 Composition API 與關鍵特色',
      description:
        '許多前端開發者對 Vue 一直情有獨鍾，因為它易上手又靈活。隨著 Vue 3 上線，Composition API 的導入更是大幅提升可讀性與維護性。這篇文章將帶你快速瞭解 Vue 3 的獨特魅力，並透過簡單範例幫助你更順利地切換到新版本的思維模式。'
    },
    {
      img: 'https://www.fenglung.url.tw/learn-img/blog/blog-list-7.png',
      date: '2024/05/04',
      tag: '#Git #協作流程',
      hot: '',
      title: 'Git 與版本控制：前端協作的必修課',
      description:
        '當你從一人開發晉升到多人合作，版本控制的好壞往往決定了專案的順暢度。Git 不僅能記錄程式碼變動，更能確保每位成員都在正確的分支上完成任務。透過這篇文章，你將了解常見的 Git 流程，並學會在前端專案中輕鬆管理與協作。'
    },
    {
      img: 'https://www.fenglung.url.tw/learn-img/blog/blog-list-8.png',
      date: '2024/05/01',
      tag: '#SEO #網頁曝光',
      hot: '',
      title: 'SEO 與前端最佳實踐：讓搜尋引擎看見你的網站',
      description:
        '即使你的網站擁有優美的介面與強大的功能，如果在搜尋引擎上找不到它，那就形同隱形。身為前端工程師，瞭解基本的 SEO 概念與技術是讓網站脫穎而出的關鍵。這篇文章將分享我在前端實作時，常用的 SEO 小技巧與實務做法，幫助你顯著提升網站曝光度。'
    },
    {
      img: 'https://www.fenglung.url.tw/learn-img/blog/blog-list-9.png',
      date: '2024/02/17',
      tag: '#專案維護 #自動化測試',
      hot: '',
      title: '穩定前端環境的祕訣：依賴管理與自動化流程',
      description:
        '前端世界日新月異，第三方套件與工具種類繁多，一個不留神就可能引爆依賴衝突。為了確保專案長期維護的穩定度，建立一套良好的依賴管理與自動化流程至關重要。在本文中，我會分享從套件更新到測試部署的實務經驗，讓你在開發時不再手忙腳亂。'
    },
    {
      img: 'https://www.fenglung.url.tw/learn-img/blog/blog-list-10.png',
      date: '2024/02/17',
      tag: '#TypeScript #程式設計',
      hot: '',
      title: 'TypeScript 快速上手：強化前端程式碼的安全與可讀性',
      description:
        '許多前端開發者在成長過程中都曾面臨動態語言帶來的錯誤風險，而 TypeScript 的出現正是為了改善這種情況。它能在開發階段即發現型別錯誤，並帶來更友善的程式碼提示。本篇文章將介紹如何在前端專案中導入 TypeScript，並透過真實案例展示它為開發流程帶來的優勢。'
    },
    {
      img: 'https://www.fenglung.url.tw/learn-img/blog/blog-list-11.png',
      date: '2024/02/07',
      tag: '#測試框架 #品質保證',
      hot: '',
      title: '掌握前端測試：從單元測試到端對端測試的完整攻略',
      description:
        '寫程式容易，但要確保程式在多種情境、裝置都能正常運行就沒那麼簡單了。這時「測試」便成了維持程式品質的關鍵環節。從最基礎的單元測試，到模擬使用者行為的端對端測試，每一種測試方式都有它的價值與最佳應用情境。本文將帶你認識不同類型的前端測試工具，以及如何在開發流程中實踐自動化測試，打造更穩定、可預期的專案。'
    }
  ]
  const nowPage = ref(0)
  const pageNum = ref(40)
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
  const changePage = async () => {
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
        <li v-for="(item, idx) in data" :key="idx">
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
            <a :href="/detailed/ + `${idx + 1}`" class="more">閱讀內文</a>
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
      .container {
        max-width: 768px;
      }
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
      .container {
        max-width: 375px;
      }
      .list {
        > li {
          width: 100%;
        }
      }
    }
  }
</style>
