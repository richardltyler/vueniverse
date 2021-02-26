<template>
  <div>
    <button @click='zoomThroughSpace'>🤠 CLICK HERE TO BLAST OFF 🤠</button>
    <p>(WARNING FLASHING LIGHTS!!)</p>
  </div>
</template>


<script>

export default {
  name: 'ClickToEnter',
  methods: {
    zoomThroughSpace() {
      let body = document.querySelector("#app");
      body.style.backgroundImage = "url('https://media.giphy.com/media/MaThe6p8WAKbf9NDDM/giphy.gif')"
      setTimeout(function() {
        body.style.backgroundImage = "url(/img/intro.24ff364e.png)"
      },9800)
    }
  }
}
</script>

<style scoped>
#app {
  background-image: url(../images/intro.png);
}
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
a {
  font-size: x-large;
  color: white;
  margin: 0;
}
p {
  color: red;
}
</style>