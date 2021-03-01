<template>
  <section class='devs-container'>
    <article class='dev' id='lucas'>
      <img class='dev-image' src='https://avatars.githubusercontent.com/u/69216459?s=400&u=7e00612de053590e88c752574170e46e8f002b7d&v=4' alt='Lucas Merchant'>
      <h2 class='dev-name'>Lucas Merchant</h2>
      <a class='dev-gh' href='https://github.com/lbmerchant93'>Lucas's GitHub</a>
      <a class='dev-li' href='https://www.linkedin.com/in/lucas-merchant93/'>Lucas's LinkedIn</a>
    </article>
    <article class='dev' id='cole'>
      <img class='dev-image' src='https://avatars.githubusercontent.com/u/58485286?s=400&u=75d7ab4daaa9b5ef1276d667dc9e5a5ca59e5de8&v=4' alt='Cole Fiscus'>
      <h2 class='dev-name'>Cole Fiscus</h2>
      <a class='dev-gh' href='https://github.com/colefiscus'>Cole's GitHub</a>
      <a class='dev-li' href='https://www.linkedin.com/in/colefiscus/'>Cole's LinkedIn</a>
    </article>
    <article class='dev' id='richard'>
      <img class='dev-image' src='https://avatars.githubusercontent.com/u/70095063?s=400&u=39c274f1a2fbb88cc013de61aa8307596a988255&v=4' alt='Richard Tyler'>
      <h2 class='dev-name'>Richard Tyler</h2>
      <a class='dev-gh' href='https://github.com/richardltyler'>Richard's GitHub</a>
      <a  class='dev-li' href='https://www.linkedin.com/in/richardltyler/'>Richard's LinkedIn</a>
    </article>
  </section>
</template>
<script>
export default {
  name: 'Devs'
}
</script>
<style scoped>
.devs-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  column-gap: 1rem;
  row-gap: 1rem;
  flex-wrap: wrap;
}

.dev {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.dev-image {
  height: 250px;
  width: 250px;
}

.dev-name {
  margin-bottom: 10px;
}

a {
  margin-bottom: 5px;
}

</style>