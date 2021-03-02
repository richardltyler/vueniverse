describe("Devs Component", () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
      .get('footer a').click()
      .get('a').eq(4).click()
  })

  it('Should have a url for the Dev component', () => {
    cy.url().should('include', '/dev');
  })

  it('should display all devs', () => {
    cy.get('article').should("have.length", 3);
  })

  it('should display all devs\' images', () => {
    cy.get('img').should("have.length", 3);
  })

  it('should navigate to each dev\'s github', () => {
    cy.get('article:first a:first').should('have.attr', 'href', 'https://github.com/lbmerchant93');

    cy.get('article a').eq(2).should('have.attr', 'href', 'https://github.com/colefiscus');

    cy.get('article a').eq(4).should('have.attr', 'href', 'https://github.com/richardltyler');
  })

  it('should navigate to each dev\'s linkedin', () => {
    cy.get('article:first a:last').should('have.attr', 'href', 'https://www.linkedin.com/in/lucas-merchant93/');

    cy.get('article a').eq(3).should('have.attr', 'href', 'https://www.linkedin.com/in/colefiscus/');

    cy.get('article a').eq(5).should('have.attr', 'href', 'https://www.linkedin.com/in/richardltyler/');
  })
})