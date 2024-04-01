<script setup>
import HeightAndWeight from './components/HeightAndWeight.vue'
import BmiMain from "./components/BmiMain.vue";
import CalculateBmi from './components/CalculateBmi.vue'

</script>

<template>
  <div id="app-component">
    <BmiMain></BmiMain>
    <HeightAndWeight></HeightAndWeight>
    <CalculateBmi></CalculateBmi>
  </div>

</template>




<style scoped>

#app-component {
  border: solid 3px midnightblue;
  width: 650px;
  padding: 20px;
}
</style>
