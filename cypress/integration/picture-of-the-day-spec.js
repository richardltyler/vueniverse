describe("Pic of the Day component", () => {

  beforeEach(() => {
    cy
      visit("http://localhost:8080")
      .get("footer").get("a:last").click()
  })

  

})