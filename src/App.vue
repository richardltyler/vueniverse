<template>
    <Header @submitted-date="showPicture" :onHome="onHome" :todaysDate="todaysDate"/>
    <main class='main' >
      <router-view 
        @submitted-date="showPicture"
        :error="error"
        :loading="loading"
        :todayPOTD="todayPOTD" 
        :previousPOTD="previousPOTD" 
        :nextPOTD="nextPOTD"
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
      onHome: true,
      loading: '',
      error: '',
      todaysDate: this.getDate(),
      todayPOTD: {},
      previousPOTD: {},
      nextPOTD: {},
    }
  },
  methods: {
    getPhoto(date, option) {
      apiCalls.getSpecificDatesPhoto(date)
        .then(results => {
          this.handleError(results, option)
        });
    },

    handleError(result, option) {
      if (typeof result === 'string') {
        this.error = result;

      } else {
        this[option] = result;
      }
    },

    checkForDateParams(date, relation) {
      if (date && relation) {
        return moment(date);

      } else {
        return moment();
      }
    },

    getDate(date, relation) {
      let today = this.checkForDateParams(date, relation);
    
      if (relation === 'next') {
        today = today.add(1, 'days');

      } else if (relation === 'previous') {
        today = today.subtract(1, 'days');

      }

      return today.format('YYYY-MM-DD');
    },

    showPicture(date) {
      if (date === undefined) {
        date = this.todaysDate;
      }

      this.loading = 'loading....';

      const dayBefore = this.getDate(date, 'previous');
      const nextDay = this.getDate(date, 'next');

      this.getPhoto(date, 'todayPOTD');
      this.getPhoto(dayBefore, 'previousPOTD');

      if (date !== this.todaysDate) {
        this.getPhoto(nextDay, 'nextPOTD');
        this.onHome = false;
      } 

      setTimeout(() => {this.loading = ''}, 1000);
    },

  },

  created() {
    this.showPicture();
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
  width: 100%;
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
