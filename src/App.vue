<template>
    <header class='header'>
      Header
    </header>
    <main class='main'>
      <div class='pod'>
        <PhotoOfTheDay />
      </div>
      <div class='yesterday'>
        Yesterday
      </div>
    </main>
    <footer class='footer' >
      Footer
    </footer>
</template>

<script>
// import Vue from 'vue';
// import Router from 'vue-router';
import PhotoOfTheDay from './PicOfTheDay.vue';

export default {
  name: 'App',
  components: {
    PhotoOfTheDay
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
}
</style>