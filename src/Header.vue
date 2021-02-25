<template>
  <header class='header'>
    <h1>VUENIVERSE</h1>
    <div>
      <input v-model='date' type='date' min='1995-06-20' />
      <button type='submit' v-on:click='findPicture'>Show Picture</button>
    </div>
    <p>Expand your Vue.</p>
  </header>
</template>

<script>

export default {
  name: 'Header' 
}
data = () => {
  return {
    date: ''
  }
}
methods: {
  findPicture= () => {
    this.$emit(date)
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