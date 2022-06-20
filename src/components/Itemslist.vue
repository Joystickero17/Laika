<template>
    
</template>

<script>
export default {
    data: ()=>{
        return {
            itemsCount:0,
            itemList: [],
            pages: 20,
            nextPage: "",
            previousPage: ""
        }
    },
    props: [
        "items"
    ],
}
</script>