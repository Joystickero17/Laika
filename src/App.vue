<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-white shadow">
  <div class="container-fluid">
    <a class="navbar-brand navbar-hover p-2" href="#">MLS shop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          
         <RouterLink to="/" class="nav-link text-dark">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-dark" to="/about">About</RouterLink> 
        </li>
      </ul>
      <div class="d-flex">
        <div class="mx-2">
          <RouterLink class="nav-link btn btn-danger text-white" to="/login">Iniciar Sesión</RouterLink>
        </div>
        <div class="mx-2">
          <RouterLink class="nav-link btn bg-black text-white" to="/login">Registrarse</RouterLink>
        </div>
      </div>
    </div>
  </div>
</nav>
  </header>
<div class="container pt-5">
  <RouterView />
</div>
</template>

<style>
.navbar-hover{
  transition: all 0.5s;
  color: #dc3545;
}
.navbar-hover:hover{
  transition: all 1s;
  /* text-decoration: underline; */
  background-color: #dc3545;
  color: white;

}
li {
  list-style: none;
}
</style>
