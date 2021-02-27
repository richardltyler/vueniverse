// describe("Pic of the Day component", () => {

//   beforeEach(() => {
    // cy.fixture('potd_data.json')
    //   .then((response) => {
    //     cy.intercept('https://api.nasa.gov/planetary/apod?api_key=j9VLjGbdXCRXtf61nCle9dLGtNzWVnNqUM1BNV86', {
    //       body: response
    //     })
    //   })

//     cy
//       .visit("http://localhost:8080")
//       .get("footer").get("a:last").click()
//   })
// })
  // it("Should load a picture to display when navigating to the home page", () => {
  //   cy
  //     .get("main")
  // })

describe("Should do the thing", () => {

    beforeEach(() => {
      cy.fixture('spec_date_data.json')
        .then((response) => {
          cy.intercept('https://api.nasa.gov/planetary/apod?date=2020-12-25&api_key=j9VLjGbdXCRXtf61nCle9dLGtNzWVnNqUM1BNV86', {
           body: response
        })
      })
      cy
      .visit("http://localhost:8080")
      .get("footer").get("a:last").click().wait(1000)
    })

    it("Should choose a date and display photo based on date", () => {
      cy
        .get("input").invoke("val", "2020-12-25").trigger("input")
    })
  })

