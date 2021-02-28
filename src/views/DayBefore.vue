<template>
    <div class='day-before-container'>
        <h2>Day Before</h2>
        <h3>{{ podb.date }} </h3>
    </div>
</template>

<script>
import apiCalls from '../apiCalls.js'
import moment from 'moment';

export default {
    name: 'DayBefore',
    data() {
        return {
            podb: {}
        }
    },
    methods: {

    },
    mounted() {
        const dateMoment = moment().subtract(1, 'days').calendar('L')
        const dateSplit = dateMoment.split('/')
        const date = dateSplit[2] + '-' + dateSplit[0] + '-' + dateSplit[1]
        apiCalls.getSpecificDatesPhoto(date)
        .then(data => {
            console.log(data)
            this.podb = data})
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