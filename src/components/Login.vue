<script setup>
import api from '../utils/api';
</script>
<script>
export default {
    data: ()=>{
        return {
            email: "",
            password: "",
            errorMessage:"",
            emailErrors:[],
            passwordErrors:[],
            AreCredentialsValid: true
        }
    },
    methods:{
        validateForm(e){
            this.emailErrors = []
            this.passwordErrors = []
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            if (!validRegex.test(this.email)){
                this.emailErrors.push("El email proporcionado es inválido")
            }
            if(!this.password){
                this.passwordErrors.push("la Contraseña no puede estar vacia")
            }
            e.preventDefault()
            if(!this.emailErrors.length && !this.passwordErrors.length){
                this.login()
                .catch((err) =>{
                this.error = true
                this.errorMessage = err.response.data
            })
            }
        },
        login(){
            
            return api.login(this.email, this.password)
            .then(data => console.log(data.token))
            
        }
        
    }
    // beforeMount(){
        
    // }
}
</script>
<template>
<div>
    <ErrorModal />
</div>
<div class="row justify-content-center align-items-center login-flex">
    <div class="col-6" style="height: 250px;">
        <div v-show="error">
            {{errorMessage}}
        </div>
        <form novalidate="true" @submit="validateForm">
            <label for="email" class="form-label">Email</label>
            <input class="form-control" :class="{'is-invalid': emailErrors.length}" v-model="email" type="email">
            <div v-if="emailErrors.length" class="invalid-feedback">
                <div v-for="err in emailErrors">
                    {{ err }}
                </div>
            </div>
            <div class="py-2">
                <label for="password" class="form-label">Contraseña</label>
                <input class="form-control" v-model="password" :class="{'is-invalid': passwordErrors.length}" type="password">
                <div v-if="passwordErrors.length" class="invalid-feedback">
                    <div  v-for="err in passwordErrors">
                        {{ err }}
                    </div>
            </div>
            </div>
            <button type="submit" class="login-button">Sign In</button>
        </form>
    </div>
</div>
</template>

<style>
.login-flex {
    height: 600px;
}
.login-button {
    color: whitesmoke;
    background-color: rgb(0, 183, 122);
    width: 120px;
    padding: 10px;
    margin-top: 20px;
}

</style>