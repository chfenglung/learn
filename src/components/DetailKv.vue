<script setup>
  import {} from 'vue'

  defineProps({
    data: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <section
    class="DetailKv"
    :style="{
      '--picPc': `url(${data.pic.pc})`,
      '--picMb': `url(${data.pic.mb})`
    }"
  >
    <div class="pic"></div>
    <div class="text">
      <p class="time">{{ data.text.time }}</p>
      <p class="subtitle">
        <a v-if="data.text.tag" href="javascript:;" class="tag">{{ data.text.tag }}</a>
        <span v-if="data.text.hot" class="hot">{{ data.text.hot }}</span>
      </p>
      <p class="title">{{ data.text.title }}</p>
    </div>
  </section>
</template>

<style lang="scss">
  .DetailKv {
    --picPc: '';
    --picMb: '';
    display: flex;
    align-items: center;
    border: 1px solid var(--color-secondary);
    .pic {
      width: 50%;
      height: 0;
      background-image: var(--picPc);
      background-size: cover;
      background-position: center;
      padding-top: calc(640 / 1920) * 100%;
    }
    .text {
      width: 50%;
      padding: 24px;
    }
    .time {
      margin-bottom: 4px;
    }
    .subTitle {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
    }
    .tag {
      font-size: 24px;
      color: var(--color-blue);
    }
    .hot {
      background-color: var(--color-blue);
      color: var(--color-white);
      border-radius: 18px;
      padding: 6px 12px;
      font-weight: 700;
      margin-left: 8px;
      display: inline-block;
    }
    .title {
      font-size: 28px;
      font-weight: 700;
      color: var(--color-black);
      margin-bottom: 8px;
    }
  }
  @media (max-width: 1024px) {
    .DetailKv {
      flex-direction: column;
      .pic {
        width: 100%;
        padding-top: calc(640 / 1024) * 100%;
      }
      .text {
        width: 100%;
      }
    }
  }
  @media (max-width: 768px) {
    .DetailKv {
      .pic {
        background-image: var(--picMb);
        padding-top: calc(768 / 768) * 100%;
      }
      .text {
        padding: 48px 12px;
      }
    }
  }
</style>
