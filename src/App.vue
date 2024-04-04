<script setup>
import HeightAndWeight from './components/HeightAndWeight.vue'
import BmiMain from "./components/BmiMain.vue";

import {useBmiStore} from "./stores/BmiStore.js";  //need to use the store to access computeBmi
import { storeToRefs } from "pinia";

const BmiStore = useBmiStore() //create reference to the store

const { computeBmi } = storeToRefs(BmiStore)  //allow access to this reactive data from the store

</script>

<template>

  <h1>Body Mass Index Calculator</h1>

  <div id="app-component">
    <BmiMain></BmiMain>
    <HeightAndWeight></HeightAndWeight>

    <!--    can also say just <BmiMain/>  and <HeightAndWeight/>-->
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
