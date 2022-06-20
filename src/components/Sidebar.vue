<template>
    <ul class="border rounded shadow p-2">
        <li v-for="categorie in categories" :key="categorie.id">
            {{categorie.name}} <small>{{categorie.quantity}}</small>
        </li>
    </ul>
</template>
<script>
export default {
    data: ()=> {
        return {
            categories: [
                {id:1, name: "Carroceria", quantity:500},
                {id:2, name: "Motores", quantity:500}
            ]
        }
    }
}
</script>