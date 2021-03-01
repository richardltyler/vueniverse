<template>
  <header class='header'>
    <section class="logo">
     <router-link to='/home' @click='goHome'><h1>VUENIVERSE</h1></router-link>
     <p>Expand your Vue.</p>
    </section>
    <div>
      <input 
        v-model="date" 
        type='date' 
        min='1995-06-20' 
        :max="todaysDate"
        @change='findPicture' 
      />
    </div>
    <router-link class='home-link' to='/home' @click='goHome'> Home </router-link>
  </header>
</template>

<script>
import router from './router'
export default {
  name: "Header",
  props: ['todaysDate'],
  data() {
    return {
      date: '',
      today: this.todaysDate
    }
  },
  methods: {
    findPicture() {
      this.$emit('submitted-date', this.date)
      router.push({path:`/date/${this.date}`})
    },
    goHome() {
      this.$emit('submitted-date')
    }
  }
}
</script>

<style scoped>
  .header {
    background-color: rgb(1, 1, 28);
    color: whitesmoke;
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: xx-large;
  }

  h1, p {
    margin: 0%;
    margin-left: 4%;
  }

  .logo {
    display: flex;
    flex-direction: column;
  }

  .home-link {
    margin-right: 4%;
  }

  input {
    background-color: black;
    color: white;
    border: none;
  }
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
}
</style>