<script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
  import chosenData from '@/assets/chosenList.json'
  const titleData = computed(() => {
    return chosenData.data.title
  })
  const sliderData = computed(() => {
    return chosenData.data.slider
  })
  // 輪播功能相關狀態
  const currentIndex = ref(0)
  const slideContainer = ref(null)
  const isDragging = ref(false)
  const startPos = ref(0)
  const currentTranslate = ref(0)
  const prevTranslate = ref(0)
  const animationID = ref(null)
  const slidesToShow = ref(3) // 預設顯示3張

  // 根據視窗寬度調整顯示數量
  const updateSlidesToShow = () => {
    if (window.innerWidth < 768) {
      slidesToShow.value = 1
    } else if (window.innerWidth < 1280) {
      slidesToShow.value = 2
    } else {
      slidesToShow.value = 3
    }
  }
  // 處理輪播導航
  const goToPrev = () => {
    if (currentIndex.value <= 0) return
    currentIndex.value--
    updateSliderPosition()
  }
  const goToNext = () => {
    if (currentIndex.value >= sliderData.value.length - slidesToShow.value) return
    currentIndex.value++
    updateSliderPosition()
  }
  // 更新輪播位置
  const updateSliderPosition = () => {
    if (!slideContainer.value) return

    const slideWidth = slideContainer.value.children[0]?.offsetWidth || 0
    const gap = 24 // 與CSS中的gap一致
    const translateX = -(currentIndex.value * (slideWidth + gap))

    slideContainer.value.style.transform = `translateX(${translateX}px)`
  }
  // 觸控/鼠標拖拽相關
  const touchStart = e => {
    isDragging.value = true
    startPos.value = getPositionX(e)
    prevTranslate.value = currentTranslate.value
    animationID.value = requestAnimationFrame(animation)
    slideContainer.value.style.cursor = 'grabbing'
  }

  const touchMove = e => {
    if (!isDragging.value) return
    const currentPosition = getPositionX(e)
    currentTranslate.value = prevTranslate.value + currentPosition - startPos.value
  }

  const touchEnd = () => {
    if (!isDragging.value) return
    isDragging.value = false
    cancelAnimationFrame(animationID.value)
    slideContainer.value.style.cursor = 'grab'

    const movedBy = currentTranslate.value - prevTranslate.value
    if (movedBy < -50 && currentIndex.value < sliderData.value.length - slidesToShow.value) {
      currentIndex.value++
    } else if (movedBy > 50 && currentIndex.value > 0) {
      currentIndex.value--
    }

    updateSliderPosition()
  }

  const getPositionX = e => {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX
  }

  const animation = () => {
    if (!isDragging.value) return
    setSliderPosition()
    animationID.value = requestAnimationFrame(animation)
  }

  const setSliderPosition = () => {
    slideContainer.value.style.transform = `translateX(${currentTranslate.value}px)`
  }
  // 新增一個監聽器來處理視窗大小變化
  const handleResize = () => {
    updateSlidesToShow()

    // 確保 currentIndex 不會超出範圍
    const maxIndex = Math.max(0, sliderData.value.length - slidesToShow.value)
    if (currentIndex.value > maxIndex) {
      currentIndex.value = maxIndex
    }

    updateSliderPosition()
  }
  // 阻止觸摸事件的默認行為
  const preventTouch = e => {
    e.preventDefault()
    e.stopPropagation()
  }

  // 初始化與響應式調整
  onMounted(() => {
    updateSlidesToShow()
    window.addEventListener('resize', handleResize)
    updateSliderPosition()
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
  })
</script>

<template>
  <section class="idxChosen">
    <div class="container">
      <h2>{{ titleData }}</h2>
      <div class="slide">
        <ul
          ref="slideContainer"
          class="slide-content"
          @mousedown="touchStart"
          @mousemove="touchMove"
          @mouseup="touchEnd"
          @mouseleave="touchEnd"
          @touchstart="touchStart"
          @touchmove="touchMove"
          @touchend="touchEnd"
        >
          <li v-for="(item, idx) in sliderData" :key="idx">
            <div class="pic">
              <img :src="item.img" :alt="item.title + '照片'" draggable="false" />
            </div>
            <div class="text">
              <p class="date">{{ item.date }}</p>
              <div class="tag">
                <p>{{ item.tag }}</p>
                <span v-if="item.hot != ''" class="hot">{{ item.hot }}</span>
              </div>
              <h3>{{ item.title }}</h3>
              <p class="description">{{ item.description }}</p>
              <router-link
                :to="/detailed/ + `${item.id}`"
                target="_blank"
                class="more"
                @touchstart.passive="preventTouch"
                @mousedown.stop
                @click.stop
                >閱讀內文</router-link
              >
            </div>
          </li>
        </ul>
      </div>
      <div class="slide-arrow">
        <a class="slide-prev" :class="{ disable: currentIndex <= 0 }" @click="goToPrev"></a>
        <a
          class="slide-next"
          :class="{ disable: currentIndex >= sliderData.length - slidesToShow }"
          @click="goToNext"
        ></a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .idxChosen {
    padding: 80px 0;
    border: 1px solid var(--color-secondary);
    .container {
      position: relative;
    }

    .slide {
      margin: 24px auto 0;
      position: relative;
      overflow: hidden;
      -webkit-overflow-scrolling: touch;

      &-content {
        max-width: 1432px;
        display: flex;
        justify-content: flex-start;
        transition: transform 0.3s ease-out;
        cursor: grab;
        user-select: none;
        gap: 24px;
        > li {
          width: calc(33.33% - 16px);
          flex-shrink: 0;
        }
        &.grabbing {
          cursor: grabbing;
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
        margin: 16px 0 0 2px;
        touch-action: manipulation;
        &:hover {
          background-color: var(--color-blue);
          border: 1px solid var(--color-blue);
          color: var(--color-white);
        }
      }
      &-arrow {
        position: absolute;
        width: calc(100% + 136px);
        top: 60%;
        left: 50%;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        transform: translate(-50%, -60%);
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
        max-width: 90%;
        &-arrow {
          width: 100%;
        }
      }
    }
  }
  @media (max-width: 1280px) {
    .idxChosen {
      .container {
        max-width: 768px;
      }
      .slide {
        padding-bottom: 80px;
        max-width: 768px;
        overflow: hidden;
        &-content {
          > li {
            width: 360px;
          }
        }
        &-arrow {
          top: unset;
          left: unset;
          bottom: 6px;
          transform: none;
          justify-content: flex-end;
          gap: 24px;
          padding: 0 24px;
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
