<template>
    <div class="container white w-100p">
        <h2 class="title">{{title}}</h2>
        <div class="text">
            {{text}}
        </div>
    </div>
</template>

<script setup>
const title="ハルシネーション"
const text=ref()

onMounted(async()=>{
    text.value="生成中"

    const res=await fetch(`https://rieama.fly.dev/fAkePedia/${title}`)
    
    text.value=(await(res.json())).text
    console.log(text.value)
})
</script>