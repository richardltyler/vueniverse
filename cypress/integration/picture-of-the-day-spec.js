describe("Pic of the Day component", () => {

  beforeEach(() => {
    cy.fixture('potd_data.json')
      .then((response) => {
        cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?api_key=j9VLjGbdXCRXtf61nCle9dLGtNzWVnNqUM1BNV86', {
          statusCode: 201,
          body: response
        })
      })
    cy.fixture('spec_date_data.json')
      .then((response) => {
        cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?date=2020-12-25&api_key=j9VLjGbdXCRXtf61nCle9dLGtNzWVnNqUM1BNV86', {
          statusCode: 201,
          body: response
        })
      }) 
    cy.visit("http://localhost:8080") 
      .get("main")
      .get("a").eq(2).click()
  })

  it("Should load a picture to display when navigating to the home page", () => {
    cy
      .get("img").should("have.attr", "src", "https://apod.nasa.gov/apod/image/2102/PIA24333_fig1_1035c.jpg")
  })

  it("Should display a new picture after changing the date input", () => {
    cy
      .get("header").get("input").type("2020-12-25", "{enter}").trigger("change").wait(500)
      .get("img").should("have.attr", "src", "https://www.ladbible.com/cdn-cgi/image/width=720,quality=70,format=webp,fit=pad,dpr=2/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F890e41365fd7d265d770d2c2c6969993.png")
  })
})
