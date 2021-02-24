<template>
    <header class='header'>
      Header
    </header>
    <main class='main'>
      <div class='pod'>
        POD
      </div>
      <div class='yesterday'>
        Yesterday
      </div>
    </main>
    <footer class='footer' >
      <About />
    </footer>
</template>

<script>
import About from './views/About.vue';
export default {
  name: 'App',
  components: {
    About
  },
  props: {},
  methods: {
    getAllMovies() {

    },
    getsomeMovies() {

    }
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
