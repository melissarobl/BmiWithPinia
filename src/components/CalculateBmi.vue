<script setup>

import { useBmiStore } from "../stores/BmiStore.js";
import { storeToRefs } from "pinia";


const BmiStore = useBmiStore()
const  { bmiCalculated } = storeToRefs(BmiStore)

</script>

<template>



  <h2>BMI is: {{ bmiCalculated }}</h2>


</template>




<style scoped>




</style>