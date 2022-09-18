import api from "@/utils/api"

const productModule = {
    namespaced: true,
    state: {
        priceMinFilter: 1,
        priceMaxFilter: 999,
        searchParam: "",
        products: [],
        totalResults: 0,
        productsObj: {},
        seeFreeProducts: true,
    }
    ,
    getters: {

        getProducts(state) {
            return state.products
        },
        getSearchParam(state) {
            return state.searchParam
        },
        getMinPrice(state) {
            return state.priceMinFilter
        },
        getMaxPrice(state) {
            return state.priceMaxFilter
        },
        getProductsCount(state) {
            return state.totalResults
        },
        getProductsObj(state) {
            return state.productsObj
        },
        getSeeFreeProducts(state){
            return state.seeFreeProducts
        }

    },
    actions: {
        async fetchProducts(context, search_param) {
            context.commit("loading", null, { root: true })
            let params = {
                "min_price": context.state.priceMinFilter,
                "max_price": context.state.priceMaxFilter,
                "free_products": context.state.seeFreeProducts
            }
            console.log(params)
            let search = search_param ? search_param : context.getters.getSearchParam
            const data = await api.products({ search: search, ...params })
            if (data?.error) {
                context.commit("setCurrentError", data.error, { root: true })
            }
            if (data?.results) {
                context.commit("setProducts", data["results"])
                context.commit("setResultsCount", data["count"])
                context.commit("setProductObj", data)
            }
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
        setSearchParam(state, value) {
            state.searchParam = value
        },
        setSeeFreeProducts(state, value){
            state.seeFreeProducts = value
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