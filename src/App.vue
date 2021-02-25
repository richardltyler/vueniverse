<template>
    <header class='header'>
      Header
    </header>
    <main class='main'>
      <router-view />
      <!-- <div class='pod'>
        POD
      </div>
      <div class='yesterday'>
        Yesterday
      </div> -->
    </main>
    <footer>
      <nav class='footer-links'>
        <router-link class='footer-link' to='/about'>About</router-link>
        <router-link class='footer-link' to='/'> Home </router-link>
      </nav>
    </footer>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  props: {},
  methods: {
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
  height: 100vh;
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

</style>
