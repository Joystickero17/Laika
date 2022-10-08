<template>
    <!-- SECTION -->
    <div class="section">
        <div class="container pt-5">

            <div class="row">
                <div class="col-md-4">
                    <Sidebar />
                </div>
                <div class="col-md-7">
                    <Itemslist :items="getProducts" />
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import Sidebar from "../components/Sidebar.vue"
import Itemslist from "../components/Itemslist.vue"
import SearchBar from "../components/SearchBar.vue"

import { mapGetters } from "vuex"

export default {
  components:{
    Sidebar,
    Itemslist,
    SearchBar
  },
  data: ()=>{
    return {
    }
  },mounted(){
    console.log(this.$route.params)
    this.$store.dispatch("productModule/fetchProducts", {store:this.$route.params?.id})
  },
  computed:{
    ...mapGetters("productModule",["getProducts"])
  }
}
</script>