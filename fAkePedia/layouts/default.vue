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
const str_search=ref()

const keydown_input=(e)=>{
    if (e.code=="Enter" && !e.isComposing)click_search()
}

const click_search=()=>{
    navigateTo(`/${str_search.value}`)
}

</script>
