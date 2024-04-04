<script setup>

import { ref } from "vue"  //needed if making new reactive data in component
import { useBmiStore } from "../stores/BmiStore.js";
import { storeToRefs } from "pinia";



const BmiStore = useBmiStore()
const  { computeBmi } = storeToRefs(BmiStore)




</script>

<template>



</template>




<style scoped>




</style>