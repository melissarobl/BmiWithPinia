import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// this is what is used by components and in the store
// useBmiStore is a function, we are creating and exporting a function definition
// other parts of the program - like components - can call this function
// to get access to the store and its variables/data/computed properties
export const useBmiStore = defineStore('bmi', () => {

    const height= ref()
    const weight = ref()
    const metricUnitsChecked = ref( true )


    const computeBmi = computed( () => {

        let bmi //declare a global variable to be used, but can't be defined yet - waiting for data
        if (metricUnitsChecked.value === true) { //if the metric box is checked, then use this calculation
            bmi = weight.value / (height.value * height.value)  //To calculate the body mass index, assuming variables called height and weight,  const bmi = weight / ( height * height )
        } else { //if the box is not checked, use this calculation for bmi
            bmi = (weight.value / (height.value * height.value) * 730)
        }
        bmi = bmi.toFixed(2) //Display the calculated body mass index, formatted to 2 decimal places.
        return bmi  //this is the effective value of the computeBmi property



    })



    return {


        //reactive data
        height,
        weight,
        metricUnitsChecked,

        //computed properties
        computeBmi,
    }

})

