<template>
  <p class="loading-message" v-if="loading && !error">{{ loading }}</p>
  <p class="error-message" v-if="error">{{ error }}</p>
  
  <article 
    v-if="potd && !error && !loading" 
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
  <section v-if="!error && !loading" class="previews"> 
    <Preview name="Previous" :potd="podb"/>
    <Preview name="Next" v-if="checkForPond()" :potd="pond" />
  </section>
</template>

<script>
import Preview from './Preview.vue'
import moment from 'moment';

export default {
  name: 'PicOfTheDay',
  props: ['error', 'loading', 'potd', 'podb', 'pond'],
  emits: ['submitted-date'],
  components: {
    Preview
  },
  methods: {
    checkForPond() {
      const todaysDate = moment().format('YYYY-MM-DD');
      return (todaysDate !== this.potd.date);
    }
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
  margin-right: 3%;
}

.potd-date,
.potd-title,
.potd-copyright {
  margin: 0.5%;
}

.potd-explanation {
  margin-top: 0.5%;
  color: #56BBCD;
}

.previews {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.error-message {
  text-align: center;
  padding: 0 30% 0 30%;
} 

@media screen and (max-width: 875px) {
  .potd-component {
    flex-direction: column;
  }
  .photo {
    max-height: 350px;
  }
  .information {
    margin-top: 5%;
  }
  .video {
    min-width: 480px;
    height: 255px;
    max-height: none;
  }
}

@media screen and (max-width: 510px) {
  .potd-component {
    flex-direction: column;
  }
  .photo {
    max-height: 350px;
  }
  .information {
    margin-top: 5%;
  }
  .video {
    min-width: 320px;
    height: 170px;
    max-height: none;
  }
}
</style>
