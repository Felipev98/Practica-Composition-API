<template>
<div>
<h2>{{msg}}</h2>
<span>{{contador}}</span>
<button @click="increase">Incrementar</button>
<div class="layaout" >
    <div v-if="loading">
        <h2>Cargando...</h2>
    </div>
    <Cards :data="data"/>
</div>
</div>
</template>
<script>
import {onMounted, ref} from 'vue'
import UseIncrement from '../composables/UseIncrement'
import useFetch from '../composables/UseFetch'
import Cards from '../components/Cards'
export default { 
    components:{
        Cards
    },
    setup() {
        const msg = ref('Viste ahora si sirve');
        const {increase,contador} = UseIncrement();
        const {data,error,fetchData,loading} = useFetch("https://rickandmortyapi.com/api/character");
        onMounted((()=>{
            fetchData();
        }))
        return {
            msg,
            increase,
            contador,
            data,
            error,
            fetchData,
            loading
        }
    }
}

</script>
<style>
body{
    background: red;
}
.layout{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>
