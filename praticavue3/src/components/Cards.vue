<template>
    
    <div class="card">
        <div v-for="datas in data" :key="datas.id" >
            <h2>{{datas.name}}</h2>
            <img :src="datas.image" alt="">
        </div>
    </div>
</template>
<script>
export default {
props:{
    data:{
        type:Object,
        required:true
    },
}
}
</script>
