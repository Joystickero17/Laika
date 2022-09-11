import { reactive } from "vue";


const store = reactive({
    minPriceFilter: 1,
    maxPriceFilter:999,
    updateMinPrice(value){
        this.minPriceFilter = value
    },
    updateMaxPrice(value){
        this.maxPriceFilter = value
    }
})

export default store