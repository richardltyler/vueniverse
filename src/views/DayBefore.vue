<template>
    <div class='day-before-container'>
        <h2>Day Before</h2>
        <iframe
            :src="podb.url" 
            class='video' 
            v-if="podb.media_type === 'video'" 
            :title="podb.title"
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
        />
        <img 
            :src="podb.url" 
            class="photo" 
            v-if="podb.media_type === 'image'" :alt="podb.title"
        >
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
        .then(data => this.podb = data)
    }
}
</script>

<style scoped>
.day-before-container {
    border: white 1px solid;
    max-width: 40%;
    height: auto;
    margin-left: 4%;
    text-align: center;
}

.video,
.photo {
    max-width: 60%;
    height: auto;
    max-height: 300px;
}
</style>