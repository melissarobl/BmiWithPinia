<script setup>
import HeightAndWeight from './components/HeightAndWeight.vue'
import BmiMain from "./components/BmiMain.vue";

import {useBmiStore} from "./stores/BmiStore.js";
import { storeToRefs } from "pinia";

const BmiStore = useBmiStore()

const { computeBmi } = storeToRefs(BmiStore)

</script>

<template>

  <h1>Body Mass Index Calculator</h1>

  <div id="app-component">
    <BmiMain></BmiMain>
    <HeightAndWeight></HeightAndWeight>
  </div>

  <h2>BMI is: {{ computeBmi }}</h2>


</template>




<style scoped>

#app-component {
  border: solid 3px midnightblue;
  width: 650px;
  padding: 20px;
}
</style>
