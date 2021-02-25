<template>
    <header class='header'>
      Header
    </header>
    <main class='main'>
      <div class='pod'>
        <PicOfTheDay />
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
import PicOfTheDay from './PicOfTheDay.vue';

export default {
  name: 'App',
  components: {
    PicOfTheDay
  }
}
</script>

<style>
#app {
  /* height: 200px; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  height: 100vh;
}

.header {
  height: 100px;
}
</style>