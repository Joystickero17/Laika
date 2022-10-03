<template>
        <div class="col-md-6">
            <div class="header-search">
                <form>
                    <select class="input-select">
                        <option value="0">Categorias</option>
                        <option value="1">Categoria 1</option>
                        <option value="1">Categoría 2</option>
                    </select>
                    <input class="d-inline form-control input" @input="search" :placeholder="getCurrentRandomMessage">
                    <button class="search-btn"><i class="fa fa-search"></i></button>
                </form>
            </div>
        </div>
</template>

<script>
import { mapGetters } from 'vuex';
import store from '../store';

    // TODO: Enviar parametro de filter search en mutation
    export default {
        methods:{
            search(event){
                store.commit("productModule/setSearchParam", event.target.value)
                store.dispatch("productModule/fetchProducts")
            }
        },
        computed:{
            ...mapGetters(["getCurrentRandomMessage"])
        }
    }
</script>