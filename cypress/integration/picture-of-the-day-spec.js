const { iterator } = require("core-js/fn/symbol")

describe("Pic of the Day component", () => {

  beforeEach(() => {
    cy
      visit("http://localhost:8080")
      .get("footer").get("a:last").click()
  })

  // it("Should show a picture and description when loading home page", () => {

  // })

})