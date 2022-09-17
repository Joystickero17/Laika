<template> 
    <div class="modal fade" :class="{ show: getBooleanError, 'd-block':getBooleanError }" ref="Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{getCurrentErrors ? "Un error ha ocurrido": "Mensaje"}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <ul v-if="getCurrentErrors">
            <div v-if="getCurrentErrors.length > 1">
                <li v-for="error in getCurrentErrors">
                                    {{error}}
                                </li>
            </div>
            <p v-if="getCurrentErrors.length === 1">
                {{getCurrentErrors[0]}}
            </p>
        </ul>
            
      </div>
      <div class="modal-footer">
        <button type="button" @click="closeModal" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
   
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data (){
        return{

        }
    },
    methods:{
        closeModal(){
            this.$refs.Modal.classList.remove("show")
            this.$refs.Modal.classList.remove("d-block")
        },
        openModal(){
            this.$refs.Modal.classList.add("show")
            this.$refs.Modal.classList.add("d-block")
        }
    },
    computed:{
        getBooleanError(){
            return this.getCurrentErrors?.length ? true : false
        },
        ...mapGetters(["getCurrentErrors"])
    }
}
</script>
