<template>
    <div class="container white">
        <h2 class="title">ハルシネーション</h2>
        <div class="text">
            <p>
                ハルシネーション（hallucination）とは幻覚を意味し、人工知能があたかも本当のように、嘘をついてしまうことを示す。<br>
                このサイトはAIが生成した嘘を鑑賞するためのサイトであり、要するにこのサイトで得られる知識は虚無でしかないのである。<br>
            </p>
            <p>
                ↓たとえばこんなかんじ↓<br>
            </p>
            <div class="container white">
                <div v-if="isLoading" class="mh-auto" style="display: flex; gap: 16px;">
                    <div class="dondurma violet" style="animation-delay: -0.2s;" />
                    <div class="dondurma pink" style="animation-delay: -0.4s;" />
                    <div class="dondurma red" style="animation-delay: -0.6s;" />
                    <div class="dondurma orange" style="animation-delay: -0.8s;" />
                    <div class="dondurma yellow" style="animation-delay: -1s;" />
                    <div class="dondurma green" style="animation-delay: -1.2s;" />
                    <div class="dondurma blue" style="animation-delay: -1.4s;" />
                </div>
                {{text}}
            </div>
            
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

</style>

<script setup>
const isLoading=ref(true)
const title="ハルシネーション"
const text=ref()

const runtimeConfig=useRuntimeConfig()

useHead({
    title: `fAkePedia - ${title}`
})

onMounted(async()=>{
    text.value=""

    const res=await fetch(`${runtimeConfig.public.baseUrl}/fAkePediaStreaming/${title}`)
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