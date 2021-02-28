<template>
  <article 
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
    <section class="information">
      <h2 class="potd-date">{{ potd.date }}</h2>
      <h3 class="potd-title">{{ potd.title }}</h3>
      <h4 class="potd-copyright" v-if="potd.copyright">{{ potd.copyright }}</h4>
      <p class="potd-explanation">{{ potd.explanation }}</p>
    </section>
  </article>
  <DayBefore />
</template>

<script>
import DayBefore from './DayBefore.vue'
export default {
  name: 'PicOfTheDay',
  props: ['potd'],
  components: {
    DayBefore
  }
}
</script>

<style scoped>
.potd-component {
  display: flex;
  flex-direction: row;
  column-gap: 2em;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 4%;
}

.photo {
  filter: drop-shadow(0 0 10px #434343);
  max-width: 320px;
  height: auto;
  align-self: center;
}

.video {
  border: none;
  max-width: 320px;
  max-height: 170px;
  align-self: center;
}

.information {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.potd-date,
.potd-title,
.potd-copyright {
  margin: 0;
}

.potd-explanation {
  margin-top: 0;
  color: #56BBCD;
}
</style>
