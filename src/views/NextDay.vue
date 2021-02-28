<template>
    <div class='different-day-container'>
        <h2>Next Day</h2>
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
  name: 'NextDay',
  props: ['pond'],
}
</script>

<style scoped>

</style>