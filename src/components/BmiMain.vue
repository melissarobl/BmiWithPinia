<script setup>
import { useBmiStore} from "../stores/BmiStore.js";
import { ref } from "vue"
import {storeToRefs} from "pinia";


const BmiStore = useBmiStore()


//const { metricUnitsChecked } = storeToRefs(BmiStore) //access data from store
const emit = defineEmits( ['metric-Units-Used'] )  //emit event to store
const metricUnitsChecked = () => {
  emit( 'metric-Units-Used')
}




</script>

<template>


  <h1>Body Mass Index Calculator</h1>

  <label for="checkboxUnits">
    <input type="checkbox" v-model="metricUnitsChecked" v-on:change="metricUnitsChecked"> <!-- v-model connects checkbox to variable -->
    Use Metric Units
  </label>


<!--  <HeightAndWeight-->
<!--      v-bind:useMetric="metricUnitsChecked"-->
<!--  ></HeightAndWeight>-->

</template>




<style scoped>



h1 {
  margin: 5px;
  font-family: Calibri;
  padding: 10px 1px 20px 1px;
}




</style>