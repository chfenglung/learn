<script setup>
const data=[{
    img: "title.png",
    text: "說明文字"
}]
</script>
<template>
    <div class="kv">
        <div v-for="(item, idx) in data" :key="idx">
            <img :src="$require(`@/assets/img/${item.img}`)" :alt="item.text" />
        </div>

    </div>
</template>
<style lang="scss">
.kv{

}
</style>