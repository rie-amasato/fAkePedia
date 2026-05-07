<template>
    <div class="container white">
        <h2 class="title">{{title}}</h2>
        <div class="text">
            <div v-if="isLoading" class="mh-auto" style="overflow: hidden; display: flex; justify-content: center; gap: 16px;">
                <div class="dondurma violet" style="animation-delay: -0.2s;" />
                <div class="dondurma pink" style="animation-delay: -0.4s;" />
                <div class="dondurma red" style="animation-delay: -0.6s;" />
                <div class="dondurma orange" style="animation-delay: -0.8s;" />
                <div class="dondurma yellow" style="animation-delay: -1s;" />
                <div class="dondurma green" style="animation-delay: -1.2s;" />
                <div class="dondurma blue" style="animation-delay: -1.4s;" />
            </div>
            <p>
                {{text}}
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

const isLoading=ref(true)
const title=ref()
const text=ref()

title.value=route.params.word

useHead({
    title: `fAkePedia - ${title.value}`
})

onMounted(async()=>{
    text.value=""

    const res=await fetch(`${runtimeConfig.public.baseUrl}/fAkePediaStreaming/${route.params.word}`)
    isLoading.value=false

    if (res.status==500){
        text.value="記事作成サーバーでエラーが発生したようです。多分レート制限なので明日またアクセスしてみてください。"
        return
    }
    const streamReader=res.body.getReader()

    const decoder=new TextDecoder()
    let readResult={value: "", done: false}
    while(!readResult.done){
        readResult=await streamReader.read()
    
        if(!!readResult.value){
            text.value+=decoder.decode(readResult.value)
        }
    }
})
</script>