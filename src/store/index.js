import { createStore } from "vuex"
import productModule from "./modules/products/products"
import api from "@/utils/api"



const store = createStore({
    state:{
        routeName:"",
        isLoading: false,
    },
    getters:{
        getLoadingStatus(state) {
            return state.isLoading
        }
    },
    actions:{},
    mutations:{
        loading(state){
            state.isLoading = true
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