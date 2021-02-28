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

export default {
    name: 'DayBefore',
    props: ['podb'],
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