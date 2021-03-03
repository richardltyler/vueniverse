import moment from 'moment'

describe("Click To Enter component", () => {

  beforeEach(() => {
    const today = moment().format('YYYY-MM-DD');
    cy.intercept('GET', `https://api.nasa.gov/planetary/apod?date=${today}&api_key=j9VLjGbdXCRXtf61nCle9dLGtNzWVnNqUM1BNV86`, {
        statusCode: 201,
        body: {
          "date": today,
          "explanation":"Sometimes it do be like that.",
          "hdurl":"https://apod.nasa.gov/apod/image/2102/PIA24333_fig1.jpg",
          "media_type":"image",
          "service_version":"v1",
          "title":"Perseverance Landing Site from Mars Reconnaissance Orbiter",
          "url":"https://apod.nasa.gov/apod/image/2102/PIA24333_fig1_1035c.jpg"
        }
      })
    cy.visit("http://localhost:8080")
  })

  it("Should contain text and an input in the header", () => {
    cy
      .get("header").get("h1").contains("VUENIVERSE").should("be.visible")
      .get("header").get("input").should("be.visible")
      .get("header").get("p").contains("Expand your Vue.").should("be.visible")
  })

  it("Should contain a welcome message", () => {
    cy.get("h2").contains("🤠 👽 WELCOME TO THE VUENIVERSE!! 👽 🤠")
  })

  it("Should contain a blast-off link that takes you to the home page", () => {
    cy
      .get(".enter-site").contains("🚀 🛰 CLICK HERE TO ENTER 🛰 🚀")
      .click()
      .url().should("include", "/home")
  })

  it("Should contain a footer with component links", () => {
    cy
      .get("footer a").contains("About").should("be.visible")
  })
})