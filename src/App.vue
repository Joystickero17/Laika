<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ErrorModal from "./components/ErrorModal.vue"
import SearchBar from './components/SearchBar.vue';
import InteractionModal from './components/InteractionModal.vue';



</script>

<template>
		<InteractionModal/>
		<RouterView />
		
    

</template>
