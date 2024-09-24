<template>
    <div class="container white w-90p">
        <h2 class="title">{{title}}</h2>
        <div class="text">
            <p>
                {{text}}
            </p>
        </div>
    </div>
</template>

<style>
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
const text=ref()

title.value=route.params.word

useHead({
    title: `fAkePedia - ${title.value}`
})

onMounted(async()=>{
    text.value="生成中"

    try{
        const res=await fetch(`${runtimeConfig.public.baseUrl}/fAkePedia/${route.params.word}`)
    
        text.value=(await(res.json())).text
    }catch{
        text.value="エラーが発生したようです。画面更新すると治るかもしれません。"
    }
})
</script>