<script setup>

import {useBmiStore} from "../stores/BmiStore.js";
import { storeToRefs } from "pinia"

const BmiStore = useBmiStore()  //create reference to the store

const { height, weight, metricUnitsChecked } = storeToRefs(BmiStore)


</script>

<template>

  <div id="enterHeightWeight">
  <h2>Enter your height and weight</h2>

  <div v-if="metricUnitsChecked">
    <label for="heightEntered" id="numberBox">Height in meters</label>
    <input v-model="height" id="height" >
    <label for="weightEntered" id="numberBox">Weight in kilograms</label>
    <input v-model="weight" id="weight" >
  </div>

  <div v-else>
    <label for="heightEntered" id="numberBox">Height in inches</label>
    <input v-model="height" id="height">
    <label for="weightEntered" id="numberBox">Weight in pounds</label>
    <input v-model="weight" id="weight">
  </div>
  </div>


</template>




<style scoped>
#enterHeightWeight {
  border: solid 3px darkred;
  padding: 20px;
  font-family: "Lucida Sans Typewriter"
}


#numberBox {
  margin: 1px 1px 1px 135px;


}

#button {
  background-color: darkgreen;
  border: solid 4px rosybrown;
  color: rosybrown;
  margin: 10px;
  font-size: 20px;
  font-family: "Lucida Sans Typewriter"
}


</style>