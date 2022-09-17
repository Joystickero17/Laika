import { createStore } from "vuex"
import productModule from "./modules/products/products"
import api from "@/utils/api"



const store = createStore({
    state:{
        routeName:"",
        isLoading: false,
        errors: []
    },
    getters:{
        getLoadingStatus(state) {
            return state.isLoading
        },
        getCurrentErrors(state){
            return state.errors
        }
    },
    actions:{},
    mutations:{
        loading(state){
            state.isLoading = true
        },
        setCurrentError(state, value){
            state.errors.push(value)
        },
        loaded(state){
            state.isLoading = false
        }
    },
    modules:{
        productModule
    }
})


export default store