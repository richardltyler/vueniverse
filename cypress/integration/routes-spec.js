import moment from 'moment'

describe("Vue Routes", () => {
  const today = moment().format('YYYY-MM-DD')

  beforeEach(() => {
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
  
  it("Should visit intial component on page load", () => {
    cy.url().should("include", "8080/")
  })

  it("Should change to the Home URL when navigating to the Home component", () => {
    cy
      .get("footer a").click()
      cy.url().should("include", "/about")
      .get("header a").click()
      cy.url().should("include", `/date/${today}`)
  })

  it("Should change to the About URL when navigating to the About component", () => {
    cy
      .get("header a").click()
    cy.url().should("include", `/date/${today}`)

      .get("footer a").click()
    cy.url().should("include", "/about")
  })

  it("Should navigate to the Home URL when clicking on the Vueniverse headline in the header", () =>{
    cy
      .get("header a").click();
    cy.url().should("include", `/date/${today}`);
  })
})

