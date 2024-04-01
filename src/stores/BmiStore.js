//contains reactive data, computed data

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBmiStore = defineStore('bmi', () => {

    const heightEntered = ref('')
    const weightEntered = ref('')
    const bmiCalculated = ref('')
    const heightInput = ref('')
    const weightInput = ref('')
    const metricUnitsChecked = ref('')
    const height = heightEntered.value
    const weight = weightEntered.value

    function computeBmi(heightEntered, weightEntered) {
        //then use reactive data defined in app.vue (heightInput and weightInput)
        //and update reactive data with what user entered in child/what was emitted from child

        let bmi //declare a global variable to be used, but can't be defined yet- waiting for data
        if (metricUnitsChecked.value === true) { //if the metric box is checked, then use this calculation
            bmi = weight / (height * height)  //To calculate the body mass index, assuming variables called height and weight,  const bmi = weight / ( height * height )
        } else { //if the box is not checked, use this calculation for bmi
            bmi = (weight / (height * height) * 730)
        }
        bmiCalculated.value = bmi.toFixed(2) //Display the calculated body mass index, formatted to 2 decimal places.
    }



    return {

        //functions
        computeBmi,

        //reactive data
        heightEntered,
        weightEntered,
        bmiCalculated,
        heightInput,
        weightInput,
        metricUnitsChecked,
    }

})

