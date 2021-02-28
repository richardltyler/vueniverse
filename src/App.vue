<template>
    <Header @submitted-date="showPicture" />
    <main class='main'>
      <router-view :potd="potd"/>
      <div class='yesterday'>
        Yesterday
      </div>
    </main>

    <footer>
      <nav class='footer-links'>
        <router-link class='footer-link' to='/about'>About</router-link>
      </nav>

    </footer>
</template>

<script>

import apiCalls from './apiCalls.js';
import Header from './Header.vue';

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      potd: {}
    }
  },
  methods: {
    showPicture(date) {
      apiCalls.getSpecificDatesPhoto(date)
        .then(photo => this.potd = photo)
    }
  },
  created() {
    apiCalls.getTodaysPic()
      .then(photo => this.potd = photo);
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat');
body {
  margin: 0;
  color: white;
}

#app {
  background-image: url(./images/intro.png);
  background-size: cover;
  background-color: rgba(0,0,0, 0.6);
  background-blend-mode: darken;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  color: white;
  position: absolute;
  font-family: "Montserrat";
}

a {
  text-decoration: none;
  color: #824D9D;
}

footer {
  width: 100%;
}

.footer-links {
  display: flex;
  justify-content: flex-start;
  margin: 0 0 15px 15px;
}

.footer-link {
  margin-right: 15px;
}

.header {
  height: 100px;
}

main {
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: fadeIn ease 2s;
}

@keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
} */

p {
  color: #49A8C6;
}

h2 {
  color: #F7B8AF
}

h3 {
  color: #B05D87;
}
</style>
