<template >
    <div class='different-day-container'>
        <h2>Next Day</h2>
        <iframe
            :src="pond.url" 
            class='different-day-video' 
            v-if="pond.media_type === 'video'" 
            :title="pond.title"
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
        />
        <img 
            :src="pond.url" 
            class="different-day-photo" 
            v-if="pond.media_type === 'image'" :alt="pond.title"
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