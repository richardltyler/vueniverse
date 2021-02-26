<template>
    <header class='header'>
      Header
    </header>
    <main class='main'>
      <router-view />
      <div class='pod'>
        <PicOfTheDay :potd="potd" />
      </div>
      <div class='yesterday'>
        Yesterday
      </div>
    </main>
    <footer>
      <nav class='footer-links'>
        <router-link class='footer-link' to='/about'>About</router-link>
        <router-link class='footer-link' to='/'> Home </router-link>
      </nav>
    </footer>
</template>

<script>
import apiCalls from './apiCalls.js';
import PicOfTheDay from './PicOfTheDay.vue';

export default {
  name: 'App',
  components: {
    PicOfTheDay
  },
  data() {
    return {
      potd: {}
    }
  },
  created() {
    apiCalls.getTodaysPic()
      .then(photo => this.potd = photo);
  }
}

</script>

<style>
body {
  margin: 0;
  color: white;
}

#app {
  background-image: url(./images/space.jpeg);
  background-size: cover;
  background-color: rgba(0,0,0, 0.6);
  background-blend-mode: darken;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  color: white;
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
}

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
