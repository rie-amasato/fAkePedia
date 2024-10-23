<template>
    <h2>履歴</h2>
    <div class="histories">
        <div v-for="history in histories">
            <NuxtLink :to="`/history/${history[0]}`">
                <div class="title">{{history[3]}}</div>
                <div>{{history[1].slice(0, 20)}}...</div>
            </NuxtLink>
        </div>        
    </div>
</template>

<style scoped>
    .histories{
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .title{
        font-weight: 700;
    }
</style>

<script setup>
const histories=ref([])
onMounted(async()=>{
    const resp=await fetch("https://secure-olimpia-shihoaka-fd09df42.koyeb.app/fAkePedia-history?limit=8")
    histories.value=await resp.json()
})
</script>