<template>
    <div class="container white">
        <h2 class="title">{{title}}</h2>
        <div class="text">
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

const title=ref()
const text=ref()

title.value=route.params.word

useHead({
    title: `fAkePedia - ${title.value}`
})

onMounted(async()=>{
    text.value=""

    const res=await fetch(`${runtimeConfig.public.baseUrl}/fAkePediaStreaming/${route.params.word}`)
    
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
    
        text.value=(await(res.json())).text
    }catch{
        text.value="エラーが発生したようです。画面更新すると治るかもしれません。"
    }
})
</script>