import moment from 'moment'

describe("Pic of the Day component", () => {
  const today = moment().format('YYYY-MM-DD')

  beforeEach(() => {

    cy.fixture('potd_data.json')
      .then(() => {
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
      })
    cy.fixture('spec_date_data.json')
      .then((response) => {
        cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?date=2020-12-25&api_key=j9VLjGbdXCRXtf61nCle9dLGtNzWVnNqUM1BNV86', {
          statusCode: 201,
          body: response
        })
      }) 
      cy.fixture('next_day_data.json')
      .then((response) => {
        cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?date=2020-12-26&api_key=j9VLjGbdXCRXtf61nCle9dLGtNzWVnNqUM1BNV86', {
          statusCode: 201,
          body: response
        })
      }) 
      cy.fixture('potd_data.json')
      .then((response) => {
        cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?date=2020-12-24&api_key=j9VLjGbdXCRXtf61nCle9dLGtNzWVnNqUM1BNV86', {
          statusCode: 201,
          body: response
        })
      }) 
    cy.visit("http://localhost:8080") 
      .get(".enter-site").click()
  })

  it("Should load a picture to display when navigating to the home page", () => {
    cy.get("img").should("have.attr", "src", "https://apod.nasa.gov/apod/image/2102/PIA24333_fig1_1035c.jpg")
  })

  it("Should have a title, date, and explanation for the image", () => {
    const today = moment().format('YYYY-MM-DD')
    cy.get(".potd-date").contains(today)
    cy.get(".potd-title").contains("Perseverance Landing Site from Mars Reconnaissance Orbiter")
    cy.get(".potd-explanation").contains("Sometimes it do be like that.")
  })

  it("Should have a previous day section", () => {
    cy.get(".different-day-container").first()
      .contains("Previous")
    cy.get(".different-day-container").first("img")
  })

  it("Should display a new picture after changing the date input", () => {
    cy
      .get("header").get("input").type("2020-12-25", "{enter}").trigger("change").wait(500)
      .get("img").should("have.attr", "src", "https://www.ladbible.com/cdn-cgi/image/width=720,quality=70,format=webp,fit=pad,dpr=2/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F890e41365fd7d265d770d2c2c6969993.png")
  })

  it("Should have a next day section when the date isn\'t today", () => {
    cy.get("header").get("input").type("2020-12-25", "{enter}").trigger("change").wait(500)
    cy.get(".different-day-container").last()
      .contains("Next")
    cy.get(".different-day-container").last("img")
  })

  it("Should populate with the new date\'s info when a different day is selected", () => {
    cy.get("header").get("input").type("2020-12-25", "{enter}").trigger("change").wait(500)
    cy.get(".potd-date").contains("2020-12-25")
    cy.get(".potd-title").contains("This is what peak performance looks like.")
    cy.get(".potd-explanation").contains("Fear is the Mindkiller!")
  })

  it("Should have a section for copyright if the response has a copyright in it", () => {
    cy.get("header").get("input").type("2020-12-25", "{enter}").trigger("change").wait(500)
    cy.get(".potd-copyright").contains("Richard, Cole, Lucas")
  })

  it("Should have a home link when not on today's date", () => {
    cy.get("header").get("input").type("2020-12-25", "{enter}").trigger("change").wait(500)
    cy.get(".home-link")
      .click()
      .url().should("include", "/home")
  })
})

describe('Picture of the Day 404 Error', () => {
  const today = moment().format('YYYY-MM-DD')
  beforeEach(() => {

    cy.intercept('GET', `https://api.nasa.gov/planetary/apod?date=${today}&api_key=j9VLjGbdXCRXtf61nCle9dLGtNzWVnNqUM1BNV86`, {
      statusCode: 404
    })
    cy.visit("http://localhost:8080")
      .get(".enter-site").click() 
  })
  it('Should display the error number and a message when something goes wrong with the api call to retrieve the photo of the day information is not ok', () => {
    cy.get('main').contains("404 error. Sorry! Something went wrong! Try again later or go to Contact Us to contact the developers with questions!")
  })
})

describe('Picture of the Day 500 Error', () => {
  const today = moment().format('YYYY-MM-DD')
  beforeEach(() => {
    
    cy.intercept('GET', `https://api.nasa.gov/planetary/apod?date=${today}&api_key=j9VLjGbdXCRXtf61nCle9dLGtNzWVnNqUM1BNV86`, {
      statusCode: 500
    })
    cy.visit("http://localhost:8080")
      .get(".enter-site").click() 
  })
  it('Should display the error number and a message when something goes wrong with the api call to retrieve the photo of the day information is not ok', () => {
    cy.get('main').contains("500 error. Sorry! Something went wrong! Try again later or go to Contact Us to contact the developers with questions!")
  })
})

describe("Picture of the Day Loading", () => {
  const today = moment().format('YYYY-MM-DD')
  beforeEach(() => {
    cy.fixture('potd_data.json')
      .then((response) => {
        cy.intercept('GET', `https://api.nasa.gov/planetary/apod?date=${today}&api_key=j9VLjGbdXCRXtf61nCle9dLGtNzWVnNqUM1BNV86`, {
          statusCode: 201,
          delay: 100,
          body: response
        })
      })
    cy.visit("http://localhost:8080")
      .get(".enter-site").click() 
  })
    it('Should have a loading message while retrieving the movies', () => {
      cy.get('main').contains('loading...')
    });
 
})