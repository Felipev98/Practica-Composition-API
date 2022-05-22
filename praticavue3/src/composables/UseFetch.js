import {ref} from 'vue'
import axios from 'axios'
export default function useFetch(url){ 
    let data = ref(null)
    let error = ref(null)
    let loading = ref(false)
    const fetchData = async () => {
        loading.value = true
     try {
       let response = await axios.get(url)
        data.value = response.data.results
     } catch (error) {
       console.log(error)
     }
     finally{
        loading.value = false
     } 
    }

    // fetch(url)
    // .then((res) => res.json())
    // .then((json) => (data.value = json))
    // .catch((err) => (error.value = err))

  return { data, error,fetchData,loading }
}
