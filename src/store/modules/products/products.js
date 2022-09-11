import api from "@/utils/api"

const productModule = {
    namespaced: true,
    state: {
        priceMinFilter: 1,
        priceMaxFilter: 999,
        searchParam: "",
        products: [],
        totalResults: 0,
        productsObj: {}
    }
    ,
    getters: {

        getProducts(state) {
            return state.products
        },
        getProductsCount(state) {
            return state.totalResults
        },
        getProductsObj(state) {
            return state.productsObj
        }

    },
    actions: {
        async fetchProducts(context, search_param, query_params) {
            context.commit("loading",null,{ root: true })
            const data = await api.products({ search: search_param })
            context.commit("setProducts", data["results"])
            context.commit("setResultsCount", data["count"])
            context.commit("setProductObj", data)
        },
        async fetchFilterPrice(context,) {

        }
    },
    mutations: {
        setProducts(state, products) {
            this.commit("loaded", null, { root: true })
            state.products = products
        }, setProductObj(state, value) {
            this.commit("loaded")
            state.productsObj = value
        }, setResultsCount(state, value) {
            state.totalResults = value
        },
        updateMinPrice(state, value) {
            state.priceMinFilter = value
        }, updateMaxPrice(state, value) {
            state.priceMaxFilter = value
        },
        loading(state) {
            state.isLoading = true
        },
        loaded(state) {
            state.isLoading = false
        }
    }
}

export default productModule