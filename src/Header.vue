<template>
  <header class='header'>
    <h1>VUENIVERSE</h1>
    <form>
      <input 
        v-model="date" 
        type='date' 
        min='1995-06-20' 
        :max="today"
        @change='findPicture' 
      />
    </form>
    <p>Expand your Vue.</p>
  </header>
</template>

<script>
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

  h1, p {
    margin: 0%;
    margin-left: 2%;
    margin-right: 2%;
  }
</style>