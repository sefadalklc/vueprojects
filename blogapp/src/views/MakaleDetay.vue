<template>
  <h1>Makale Detay</h1>
  <p>{{id}}</p>

</template>

<script>
import {ref} from 'vue'
import {useRoute} from 'vue-router'

export default {
    setup(){
        const route=useRoute();

        const id=ref(route.params.id)
        return{id}
    }
}
</script>

<style>

</style>