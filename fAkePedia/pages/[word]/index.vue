<template>
    fAke Pedia. 

    <div class="text">
        {{text}}
    </div>
</template>

<style>
.text{
    white-space: pre;
}
</style>

<script setup>
const route=useRoute()

const text=ref()

onMounted(async()=>{
    text.value="生成中"
    console.log(route.params.word)
    const res=await fetch(`https://rieama.fly.dev/fAkePedia/${route.params.word}`)
    
    text.value=(await(res.json())).text
    console.log(text.value)
})
</script>