<template>
    <div class='different-day-container'>
        <h2>Day Before</h2>
        <iframe
            :src="podb.url" 
            class='different-day-video' 
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
            class="different-day-photo" 
            v-if="podb.media_type === 'image'" :alt="podb.title"
        >
    </div>
</template>

<script>
export default {
    name: 'DayBefore',
    props: ['podb'],
}
</script>

<style>
.different-day-container {
    border: white 1px solid;
    max-width: 40%;
    height: auto;
    margin-left: 4%;
    text-align: center;
}

.different-day-video,
.different-day-photo {
    max-width: 60%;
    height: auto;
    max-height: 300px;
}
</style>