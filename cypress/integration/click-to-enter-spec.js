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

  it("Should contain a blast-off button and additional text", () => {
    cy
      .get("main").get("button").contains("🤠 CLICK HERE TO BLAST OFF 🤠").should("be.visible")
      .get("main").get("p").contains("(WARNING FLASHING LIGHTS!!)").should("be.visible")
  })

  it("Should contain a footer with component links", () => {
    cy
      .get("footer").get("a:first").contains("About").should("be.visible")
      .get("footer").get("a:last").contains("Home").should("be.visible")
  })

  it("Should show the picture of the day after clicking the blast-off button", () => {
    cy
      .get("#app").should("have.css", "background-image", 'url("http://localhost:8080/img/intro.24ff364e.png")')
      .get("main").get("button").click()
      .get("#app").should("have.css", "background-image", 'url("https://media.giphy.com/media/MaThe6p8WAKbf9NDDM/giphy.gif")')
  })
})