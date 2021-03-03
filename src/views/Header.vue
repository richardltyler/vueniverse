<template>
  <header class='header'>
    <section class="logo">
     <router-link to='/home' @click='(event) => findPicture(event, todaysDate)'><h1>VUENIVERSE</h1></router-link>
     <p>Expand your Vue.</p>
    </section>
    <form>
      <input 
        aria-label='date-input'
        v-model="date" 
        type='date' 
        min='1995-06-20' 
        :max="todaysDate" 
      />
      <button class="submit-btn" @click='(event) => findPicture(event, date)'>SUBMIT</button>
    </form>
    <router-link v-if="onHome !== true" class='home-link' to='/home' @click='(event) => findPicture(event, todaysDate)'> Home </router-link>
  </header>
</template>

<script>
import router from '../router';

export default {
  name: "Header",
  props: ['onHome' , 'todaysDate'],
  data() {
    return {
      date: '',
      today: this.todaysDate
    }
  },
  methods: {
    findPicture(event, date) {
      event.preventDefault();
      
      if (date) {
        this.$emit('submitted-date', date);
        router.push({path:`/date/${date}`})
      }

      this.date = '';
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

  input, button {
    background-color: black;
    color: white;
    border: 1px solid white;
    height: 24px;
    box-sizing: border-box;
    padding: 0px;
  }

  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
}

@media screen and (max-width: 550px) {
  p {
    display: none;
  }
  h1 {
    font-size: medium;
  }
}

@media screen and (max-width: 400px) {
  .header {
    flex-direction: column;
    height: 10%;
    text-align: center;
  }
  section {
    margin: 3%;
    width: 100%;
  }
  h1 {
    width: 100%;
    margin: 0%;
  }
  .home-link {
    margin: 3%;
  }
}
</style>