describe("About component", () => {

  beforeEach(() => {
    cy
      .visit("http://localhost:8080")
      .get("footer").get('a[href="/about"').click()
  })

  it("Should show a description of the site when going to About page", () => {
    cy.get("main").get("article").get("h2").contains("🚀 👽 About the Vueniverse 👽 🚀").should("be.visible")
    cy.get("h3").contains("Context")
    cy.get("h3").contains("Design")
    cy.get("h3").contains("Technologies")
    cy.get("h3").contains("Creators")
    cy.get(".answer:first").contains("This project is the developers' first time creating an application using Vue.js. After spending some time learning React, the developers chose to dive into learning the basics of Vue.js and see the comparison. The team set goals of implementing Vue Router and End to End testing using Cypress.js.")
  })

  it("Should contain links to the API used and the inspiration for the site", () => {
    cy
      .get("main")
      .get("article")
      .get("p:last > a:first")
      .should("have.attr", "href", "https://apod.nasa.gov/apod/astropix.html")
      .get("main")
      .get("article")
      .get("p:last > a:last")
      .should("have.attr", "href", "https://api.nasa.gov/index.html")
  })
  
  it("Should list the technologies used in the application", ()=> {
    cy.get("li").should("have.length", "4")
    cy.get("li").contains("Vue.js")
    cy.get("li").contains("Vue-Router")
    cy.get("li").contains("Cypress.js")
    cy.get("li").contains("Moment.js")
  })

  it("Should contain a link that takes you to devs url", () => {
    cy.get(".devs-link").click()
      .url().should("include", "/devs")
  })
})