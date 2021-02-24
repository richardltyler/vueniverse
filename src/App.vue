<template>
    <Header />
    <main class='main'>
      <div class='pod'>
        POD
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
import Header from './Header.vue';

export default {
  name: 'App',
  components: {
    Header
  },
  props: {},
  methods: {
    
  }
}
</script>

<style>
html, body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
}
</style>