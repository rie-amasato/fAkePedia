<template>
    <div class="container white w-100p">
        <h2 class="title">{{title}}</h2>
        <div class="text">
            {{text}}
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

.w-100p{
    width: 100%;
}
</style>

<script setup>
const route=useRoute()

const title=ref()
const text=ref()

onMounted(async()=>{
    text.value="生成中"
    title.value=route.params.word

    const res=await fetch(`https://rieama.fly.dev/fAkePedia/${route.params.word}`)
    
    text.value=(await(res.json())).text
    console.log(text.value)
})
</script>