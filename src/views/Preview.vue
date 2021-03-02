<template>
  <div class='different-day-container' @click="switchPhotos">
      <h2>{{ name }}</h2>
      <iframe
          :src="potd.url" 
          class='different-day-video' 
          v-if="potd.media_type === 'video'" 
          :title="potd.title"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
      />
      <img 
          :src="potd.url" 
          class="different-day-photo" 
          v-if="potd.media_type === 'image'" :alt="potd.title"
      >
  </div>
</template>

<script>
import router from '../router';
export default {
    name: 'Preview',
    props: ['name', 'potd'],
    methods: {
      switchPhotos() {
        this.$parent.$emit('submitted-date', this.potd.date)

        router.push({path:`/date/${this.potd.date}`})
      }
    }
}
</script>

<style>
.different-day-container {
    border: white 1px solid;
    width: 160px;
    height: 180px;
    margin-left: 4%;
    margin-right: 4%;
    text-align: center;
    overflow: hidden;
}

.different-day-video,
.different-day-photo {
  position: relative;
  right: 38%;
  border: none;
}
</style>