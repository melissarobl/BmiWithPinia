<script setup>

import { useBmiStore } from "../stores/BmiStore.js";
import { ref } from "vue";  //import the store
//import { storeToRefs} from "pinia";  //get a reference to the store
// const props = defineProps({
//   metricUnitsChecked: Boolean,
// })


const BmiStore = useBmiStore()  //convert things in store to refs in script
const metricUnitsChecked = ref(BmiStore.metricUnitsChecked)
const heightEntered = ref('')
const weightEntered = ref('')
const emit = defineEmits( ['stats-entered'])
const statsEntered = () => {
  emit('stats-entered', heightEntered.value, weightEntered.value )
}

</script>

<template>


  <!-- v-bind sets the boolean in the checkbox with the prop sent to child-->
  <!-- Receive the stats-entered event from BodyMassIndexForm, and use the data sent to calculate the user's body mass index  -->
  <!-- info after = is what we want to do. In this case we want to compute the BMI with the info emitted-->
  <!-- computeBmi is a function we define-->
  <div id="enterHeightWeight">
  <h2>Enter your height and weight</h2>

  <div v-if="metricUnitsChecked">
    <label for="heightEntered" id="numberBox">Height in meters</label>
    <input v-model="heightEntered" id="heightEntered">
    <label for="weightEntered" id="numberBox">Weight in kilograms</label>
    <input v-model="weightEntered" id="weightEntered">
  </div>

  <div v-else>
    <label for="heightEntered" id="numberBox">Height in inches</label>
    <input v-model="heightEntered" id="heightEntered">
    <label for="weightEntered" id="numberBox">Weight in pounds</label>
    <input v-model="weightEntered" id="weightEntered">
  </div>

  <button v-on:click="statsEntered" type="button" id="button">Calculate</button>  <!-- Show a button with the text 'Calculate'   -->
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