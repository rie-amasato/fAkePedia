<template>
    <div>
        <div class="container white">
            fAke Pedia. 
        </div>
        <div class="container white">
            <input v-model="str_search" @keydown="keydown_input" />
            <button @click="click_search">検索</button>
        </div>
    </div>
    <NuxtPage />
    <div>
        <iframe class="ads" src="ads.html" />
    </div>
</template>

<style>
.ads{
    border: none;
    width: 100%;
    height: 80px;
}
</style>

<script setup>
useSeoMeta({
    title: "fAkePedia",
    ogTitle: "fAkePedia",
    description: "AIが嘘を生成することがあると思います。そんな虚構、幻影（ハルシネーション）を意図的に起こして観察してみたい。そう思いませんか？えぇ、はい。そう思うんですよ。ね？",
    ogDescription: "AIが嘘を生成することがあると思います。そんな虚構、幻影（ハルシネーション）を意図的に起こして観察してみたい。そう思いませんか？えぇ、はい。そう思うんですよ。ね？"
})

const str_search=ref()

const keydown_input=(e)=>{
    if (e.code=="Enter" && !e.isComposing)click_search()
}

const click_search=()=>{
    navigateTo(`/${str_search.value}`)
}

</script>
