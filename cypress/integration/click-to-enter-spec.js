describe("Click To Enter component", () => {

  beforeEach(() => {
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