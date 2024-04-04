<script setup>

import {useBmiStore} from "../stores/BmiStore.js"; //need to use the store to access computeBmi
import { storeToRefs } from "pinia"

const BmiStore = useBmiStore()  //create reference to the store

const { metricUnitsChecked } = storeToRefs(BmiStore)  //allow access to this reactive data in the store

</script>

<template>




  <label for="checkboxUnits">
    <input type="checkbox" v-model="metricUnitsChecked" > <!-- v-model connects checkbox to variable -->
    Use Metric Units
  </label>


</template>




<style scoped>



h1 {
  margin: 5px;
  font-family: Calibri;
  padding: 10px 1px 20px 1px;
}




</style>