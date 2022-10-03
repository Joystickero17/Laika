import { createStore } from "vuex"
import productModule from "./modules/products/products"
import api from "@/utils/api"



const store = createStore({
    state:{
        routeName:"",
        randomSearchMessages:[
            "¿Qué se te daño?",
            "Escribe y mira la magia",
            "¿lo buscas? lo encuentras!",
        ],
        isLoading: false,
        errors: []
    },
    getters:{
        getLoadingStatus(state) {
            return state.isLoading
        },
        getCurrentErrors(state){
            return state.errors
        },
        getCurrentRandomMessage(state){
            return state.randomSearchMessages[Math.floor(Math.random()*state.randomSearchMessages.length)]
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