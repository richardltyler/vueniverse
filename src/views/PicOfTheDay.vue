<template>
  <section 
    v-if="potd" 
    class='potd-component'
  >
    <iframe
      :src="potd.url" 
      class='video' 
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
      class="photo" 
      v-if="potd.media_type === 'image'" :alt="potd.title"
    >
    <h2>{{ potd.date }}</h2>
    <h3>{{ potd.title }}</h3>
    <h4>{{ potd.explanation }}</h4>
  </section>
</template>

<script>
export default {
  name: 'PicOfTheDay',
  props: ['potd'],
}
</script>

<style scoped>
.potd-component {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.photo {
  filter: drop-shadow(0 0 10px #434343);
  max-width: 640px;
  height: auto;
}

.video {
  border: none;
  width: 640px;
  height: 390px;
}

.explanation {
  text-align: center;
  width: 640px;
}

h3 {
  margin: 0;
}

h4 {
  margin-top: 0;
  color: #56BBCD;
  width: 80%;
}
</style>
