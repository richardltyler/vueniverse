<template>
  <div>
    <h2>🤠 👽 WELCOME TO THE VUENIVERSE!! 👽 🤠</h2>
    <router-link name="enterHome" to="/home">🚀 🛰 CLICK HERE TO ENTER 🛰 🚀</router-link>
  </div>
</template>


<script>

export default {
  name: 'ClickToEnter',
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
a {
  font-size: x-large;
  margin: 0;
}
</style>