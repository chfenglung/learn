<script setup>
  import { computed } from 'vue'
  import chosenData from '@/assets/chosenList.json'
  const titleData = computed(() => {
    return chosenData.data.title
  })
  const sliderData = computed(() => {
    return chosenData.data.slider
  })
</script>

<template>
  <section class="idxChosen">
    <div class="container">
      <h2>{{ titleData }}</h2>
      <div class="slide">
        <ul class="slide-content">
          <li v-for="(item, idx) in sliderData" :key="idx">
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
              <router-link :to="/detailed/ + `${item.id}`" class="more">閱讀內文</router-link>
            </div>
          </li>
        </ul>
        <div class="slide-arrow">
          <a class="slide-prev disable"></a>
          <a class="slide-next"></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .idxChosen {
    padding: 80px 0;
    border: 1px solid var(--color-secondary);

    .slide {
      margin: 24px auto 0;
      position: relative;

      &-content {
        max-width: 1432px;
        display: flex;
        justify-content: flex-start;

        gap: 24px;
        > li {
          width: calc(33.33% - 16px);
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
        margin-left: -68px;
        transform: scaleX(-1);
        &:hover {
          transform: scaleX(-1) scale(1.2);
        }
        &.disable:hover {
          transform: scaleX(-1) scale(1);
        }
      }
      &-next {
        margin-right: -68px;
        &.disable:hover {
          transform: scale(1);
        }
      }
    }
  }
  @media (max-width: 1680px) {
    .idxChosen {
      .slide {
        max-width: 90%;
      }
    }
  }
  @media (max-width: 1280px) {
    .idxChosen {
      .container {
        max-width: 768px;
      }
      .slide {
        padding-bottom: 74px;
        max-width: 100%;
        overflow: hidden;
        &-content {
          > li {
            width: 360px;
          }
        }
        &-arrow {
          top: unset;
          bottom: 0;
          transform: none;
          justify-content: flex-end;
          gap: 24px;
          padding-right: 12px;
        }
        &-prev {
          margin-left: 0;
        }
        &-next {
          margin-right: 0;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .idxChosen {
      padding: 64px 0;
      .container {
        max-width: 375px;
      }
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
