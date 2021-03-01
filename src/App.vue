<template>
    <Header @submitted-date="showPicture" />
    <main class='main'>
      <router-view 
        :potd="potd" 
        :podb="podb" 
        :pond="pond" 
      />
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
import moment from 'moment';

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      potd: {},
      podb: {},
      pond: {},
      todaysDate: this.getTodaysDate(),
    }
  },
  methods: {
    showPicture(date) {
      if(date === undefined) {
        date = this.todaysDate;
      }
      apiCalls.getSpecificDatesPhoto(date)
        .then(photo => this.potd = photo)

      const dayBefore = this.getPreviousDate(date)
      apiCalls.getSpecificDatesPhoto(dayBefore)
        .then(photo => this.podb = photo)

      if (date !== this.todaysDate) {
        const nextDay = this.getNextDate(date);
        apiCalls.getSpecificDatesPhoto(nextDay)
          .then(photo => this.pond = photo)
      } 
    },
    getTodaysDate() {
      return moment().format('YYYY-MM-DD');
    },
    getPreviousDate(date) {
      const day = moment(date);
      return day.subtract(1, 'days').format('YYYY-MM-DD');
    },
    getNextDate(date) {
      const day = moment(date);
      return day.add(1, 'days').format('YYYY-MM-DD');
    }
  },
  created() {
    this.showPicture()
    // apiCalls.getTodaysPic()
    //   .then(photo => this.potd = photo);
    // const dateMoment = moment.utc().subtract(1, 'days').format('YYYY-MM-DD')
    // apiCalls.getSpecificDatesPhoto(dateMoment)
    //   .then(data => this.podb = data)
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
