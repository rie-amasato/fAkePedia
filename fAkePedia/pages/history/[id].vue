<template>
    <div class="container white">
        <h2 class="title">{{text[3]}}</h2>
        <div class="text">
            <p>
                {{text[1]}}
            </p>
        </div>
    </div>
</template>

<style scoped>
.title{
    width: 100%;
    border-bottom: solid 4px gray;
}

.text{
    white-space: pre-wrap;
}

.w-90p{
    width: 90%;
}
</style>

<script setup>
const route=useRoute()
const runtimeConfig=useRuntimeConfig()

const title=ref()
const text=ref([null, "履歴取得中", null, "履歴取得中"])

title.value=route.params.word

useHead({
    title: `fAkePedia - ${title.value}`
})

onMounted(async()=>{
    try{
        const res=await fetch(`${runtimeConfig.public.baseUrl}/fAkePedia-history/${route.params.id}`)
        text.value=(await res.json())
    }catch{
        text.value="エラーが発生したようです。画面更新すると治るかもしれません。"
    }
})
</script>