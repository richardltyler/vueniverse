<template>
    <div class='day-before-container'>
        <h2>Day Before</h2>
        <h3>{{ podb }} </h3>
    </div>
</template>

<script>
// import apiCalls from '../apiCalls.js'
export default {
    name: 'DayBefore',
    data() {
        return {
            podb: "podb"
        }
    },
    methods: {

    },
    created() {
     
    }
}
</script>

<style scoped>
.day-before-container {
    border: white 1px solid;
    max-width: 320px;
    margin-left: 4%;
    text-align: center;
}
</style>