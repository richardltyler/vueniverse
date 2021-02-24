<template>
  <header class='header'>
    <h1>VUENIVERSE</h1>
    <input type='date' min='2020-12-25' />
    <p>Wow, such Vue</p>
  </header>
</template>

<script>

export default {
  name: 'Header' 
}
</script>

<style scoped>
  .header {
    background-color: rgb(1, 1, 18);
    color: whitesmoke;
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1, p {
    margin: 0%;
  }
</style>