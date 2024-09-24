<template>
    <div class="container white">
        <h2 class="title">ハルシネーション</h2>
        <div class="text">
            <p>
                ハルシネーション（hallucination）とは幻覚を意味し、人工知能があたかも本当のように、嘘をついてしまうことを示す。<br>
                このサイトはAIが生成した嘘を干渉するためのサイトであり、要するにこのサイトで得られる知識は虚無でしかないのである。<br>
            </p>
            <p>
                ↓たとえばこんなかんじ↓<br>
                <div class="container white">
                    {{text}}
                </div>
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

</style>

<script setup>
const title="ハルシネーション"
const text=ref()

const runtimeConfig=useRuntimeConfig()

useHead({
    title: `fAkePedia - ${title}`
})

onMounted(async()=>{
    text.value="生成中"

    try{
        const res=await fetch(`${runtimeConfig.public.baseUrl}/fAkePedia/${title}`)
    
        text.value=(await(res.json())).text
    }catch{
        text.value="エラーが発生したようです。画面更新すると治るかもしれません。"
    }
})
</script>