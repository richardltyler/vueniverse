<template>
  <header class='header'>
    <section class="logo">
     <router-link to='/home'><h1>VUENIVERSE</h1></router-link>
     <p>Expand your Vue.</p>
    </section>
    <div>
      <input 
        v-model="date" 
        type='date' 
        min='1995-06-20' 
        :max="today"
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
  data() {
    return {
      date: '',
      today: this.findTodaysDate()
    }
  },
  methods: {
    findPicture() {
      this.$emit('submitted-date', this.date)
      router.push({path:`/date/${this.date}`})
    },
    goHome() {
      this.$emit('submitted-date')
    },
    findTodaysDate() {
      const today = new Date();
      const todayArr = today.toLocaleDateString().split('/');
      const year = todayArr.pop();
      todayArr.unshift(year);

      const formattedDate = todayArr.map(value => {
        if (value.length < 2) {
          return '0' + value;
        } else {
          return value;
        }
      });

      return formattedDate.join('-');
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