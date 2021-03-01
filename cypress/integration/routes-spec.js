describe("Vue Routes", () => {

  beforeEach(() => {
    cy.visit("http://localhost:8080")
  })
  
  it("Should visit intial component on page load", () => {
    cy.url().should("include", "8080/")
  })

  it("Should change to the Home URL when navigating to the Home component", () => {
    cy
      .get("footer a").click()
      cy.url().should("include", "/about")
      .get("header a").eq(1).click()
      cy.url().should("include", "/home")
  })

  it("Should change to the About URL when navigating to the About component", () => {
    cy
      .get("header a").eq(1).click()
    cy.url().should("include", "/home")
    cy.url().should("include", "/home")
      .get("footer a").click()
    cy.url().should("include", "/about")
  })
})

