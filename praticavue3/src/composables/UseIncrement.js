
import {ref} from 'vue'
 const incrementar = () =>{
    const contador = ref(0)
    return{
        contador,
        increase: () => contador.value++
    }
}
export default incrementar