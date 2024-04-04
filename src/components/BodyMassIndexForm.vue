<script setup>

import {useBmiStore} from "../stores/BmiStore.js";
import { storeToRefs } from "pinia";

const BmiStore = useBmiStore()
//allow access to the height reactive data from the store

const { height, weight } = storeToRefs(BmiStore)

</script>

<template>


  <h1>Body Mass Index Calculator</h1>

  <label>Enter height in meters</label>

  <input v-model="height">

  <label for="weight">Enter weight in kilograms</label>
  <input v-model="weight">

<!--  Add input for weight-->



</template>




<style scoped>




</style>