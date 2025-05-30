<script setup>
  import { ref, watch } from 'vue'
  import { useWindowSize } from '@vueuse/core'

  defineProps({
    content: {
      type: Array,
      required: true
    }
  })

  const { width } = useWindowSize()
  const isMobile = ref(false)

  watch(
    () => width.value,
    newVal => {
      if (newVal <= 768) {
        isMobile.value = true
      }
    }
  )
</script>

<template>
  <section class="DetailArticle">
    <div class="container">
      <div class="list">
        <template v-for="(section, index) in content" :key="index">
          <div v-if="section.type === 'section'">
            <div v-if="section.img" class="pic">
              <img v-if="isMobile" :src="section.img.mb" alt="" />
              <img v-else :src="section.img.pc" alt="" />
            </div>
            <h3>{{ section.title }}</h3>
            <template v-for="(subsection, subIndex) in section.subsections" :key="subIndex">
              <div class="subsection">
                <h4 v-if="subsection.title">{{ subsection.title }}</h4>
                <!-- 處理不同類型的內容 -->
                <template v-if="subsection.content">
                  <p v-if="subsection.content.why?.type === 'no-link'" class="why">
                    {{ subsection.content.why.text }}
                  </p>
                  <p v-if="subsection.content.why?.type === 'why-link'" class="why">
                    <span>{{ subsection.content.why.text }}</span>
                    <a :href="subsection.content.why.link.url">
                      {{ subsection.content.why.link.txt }}</a
                    >
                    <span>{{ subsection.content.why.text2 }}</span>
                  </p>
                  <p v-if="subsection.content.way" class="way">{{ subsection.content.way }}</p>
                  <ol v-if="subsection.content.how?.type === 'ordered-list'">
                    <template
                      v-for="(item, itemIndex) in subsection.content.how.items"
                      :key="itemIndex"
                    >
                      <li v-if="item.type === 'no-link'">
                        {{ item.text }}
                      </li>
                      <li v-if="item.type === 'item-link'">
                        <span>{{ item.text }}</span>
                        <a :href="item.link.url">{{ item.link.txt }}</a>
                        <span>{{ item.text2 }}</span>
                      </li>
                    </template>
                  </ol>

                  <ul v-if="subsection.content.type === 'bullet-points'">
                    <template
                      v-for="(item, itemIndex) in subsection.content.items"
                      :key="itemIndex"
                    >
                      <li v-if="item.description.type === 'no-link'">
                        <strong v-if="item.title">{{ item.title }}:</strong>
                        {{ item.description.text || item }}
                      </li>
                      <li v-if="item.description.type === 'item-link'">
                        <span>{{ item.description.text }}</span>
                        <a :href="item.description.link.url">{{ item.description.link.txt }}</a>
                        <span>{{ item.description.text2 }}</span>
                      </li>
                    </template>
                  </ul>

                  <div v-if="subsection.content.tip" class="tip">
                    {{ subsection.content.tip }}
                  </div>
                  <div v-if="subsection.content.end" class="end">{{ subsection.content.end }}</div>
                </template>

                <div v-if="subsection.type === 'summary'" class="summary">
                  {{ subsection.content }}
                </div>
              </div>
            </template>
          </div>
        </template>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .DetailArticle {
    padding: 80px 0;
    border: 1px solid var(--color-secondary);
    margin-top: -1px;
    .list {
      max-width: 636px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 48px;
    }
    .subsection ~ .subsection {
      margin-top: 24px;
    }
    .pic {
      margin-bottom: 24px;
    }
    h3 {
      font-size: 28px;
      font-weight: 700;
      color: var(--color-blue);
      margin-bottom: 24px;
    }
    h4 {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 12px;
    }
    .why {
      a {
        color: var(--color-blue);
      }
    }
    .way {
      margin-top: 8px;
    }

    ol li {
      list-style-type: decimal;
      margin-left: 1.5em;
      a {
        color: var(--color-blue);
      }
    }
    ul li {
      list-style-type: disc;
      margin-left: 1.5em;
      a {
        color: var(--color-blue);
      }
    }
    .summary,
    .tip {
      background-color: var(--color-tip);
      border-radius: 24px;
      padding: 24px;
    }
    .tip,
    .end {
      margin-top: 24px;
    }
  }
</style>
