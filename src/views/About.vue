<template>
  <article class="about">
    <h2>🚀 👽 About the Vueniverse 👽 🚀</h2>
    <h3>Context</h3>
    <p class="answer">
      This project is the developers' first time creating an application using Vue.js. After spending some time learning React, the developers chose to dive into learning the basics of Vue.js and see the comparison. The team set goals of implementing Vue Router and End to End testing using Cypress.js.
    </p>
    <h3>Design</h3>
    <p class="answer">
      The team's inspiration for this application came from the information displayed on the <a href="https://apod.nasa.gov/apod/astropix.html">Astronomy Picture of the Day</a>site and uses the <a href="https://api.nasa.gov/index.html">APOD API</a>.
    </p>
    <h3>Technologies</h3>
    <ul>
      <li>
        Vue.js
      </li>
      <li>
        Vue-Router
      </li>
      <li>
        Cypress.js
      </li>
    </ul>
  </article>
</template>

<style scoped>
  .about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .answer {
    padding: 0 50px;
    text-align: center;
    color: #49A8C6;
  }

  a {
    text-decoration: underline;
    color: #824D9D;
  }

  ul {
    padding: 0;
  }

  li {
    text-align: center;
    list-style-type: none;
    color: #49A8C6;
  }

</style>
