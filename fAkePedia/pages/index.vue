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
const title="ハルシネーション"
const text=ref()

const runtimeConfig=useRuntimeConfig()

useHead({
    title: `fAkePedia - ${title}`
})

onMounted(async()=>{
    text.value=""

    const res=await fetch(`${runtimeConfig.public.baseUrl}/fAkePediaStreaming/${title}`)

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