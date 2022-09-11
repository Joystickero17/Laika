import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import 'nouislider/dist/nouislider.css';
import "./assets/style.css"
import App from './App.vue'
import router from './router';
import store from "./store/index"


const Vue = createApp(App)

Vue.use(router)
Vue.use(store)
Vue.mount('#app')