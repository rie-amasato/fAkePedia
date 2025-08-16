<template>
    <div class="flex mainpage">
        <div class="container white logo">
            <img src="/logo.png" height="56" alt="fAke Pedia.">
        </div>
        <span class="container white h-7" style="width: calc(90% - 56px)">
            <div>fAkePedia -ウソ辞書-</div>
            <input v-model="str_search" @keydown="keydown_input" />
            <button @click="click_search">検索</button>
        </span>
    </div>
    <div class="mainpage grid">
        <div :class="{s1: true, e4: !isMobile, e5: isMobile}">
            <NuxtPage />
            <Ads />
        </div>
        <div v-if="!isMobile" class="container white s4 e5">
            <History />
        </div>
    </div>
</template>

<style>
.flex{
    display: flex;
}

.h-7{
    height: 56px;
}

.bg{
    background-color: #777;
}

</style>

<script setup>
useSeoMeta({
    title: "fAkePedia",
    ogTitle: "fAkePedia",
    description: "AIが嘘を生成することがあると思います。そんな虚構、幻影（ハルシネーション）を意図的に起こして観察してみたい。そう思いませんか？えぇ、はい。そう思うんですよ。ね？",
    ogDescription: "AIが嘘を生成することがあると思います。そんな虚構、幻影（ハルシネーション）を意図的に起こして観察してみたい。そう思いませんか？えぇ、はい。そう思うんですよ。ね？"
})

const isMobile=ref(false)
const str_search=ref()

onMounted(()=>{
    isMobile.value=window.matchMedia && window.matchMedia("(max-device-width:640px)").matches
})

const keydown_input=(e)=>{
    if (e.code=="Enter" && !e.isComposing)click_search()
}

const click_search=()=>{
    navigateTo(`/word/${str_search.value}`)
}

</script>

<style scoped>
.logo{
    overflow: hidden;
}

.mainpage{
  width: 90%;
  max-width: 720px;
  margin-right: auto;
  margin-left: auto;
}
</style>