describe("Devs Component", () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
      .get('footer a').click()
      .get(".devs-link").click()
  })

  it('Should have a url for the Dev component', () => {
    cy.url().should('include', '/dev');
  })

  it('should display all devs', () => {
    cy.get('article').should("have.length", 3);
    cy.get('#lucas .dev-name').contains("Lucas Merchant")
    cy.get('#cole .dev-name').contains("Cole Fiscus")
    cy.get('#richard .dev-name').contains("Richard Tyler")
  })

  it('should display all devs\' images', () => {
    cy.get('img').should("have.length", 3);
    cy.get('#lucas .dev-image').should("have.attr", "src", "https://avatars.githubusercontent.com/u/69216459?s=400&u=7e00612de053590e88c752574170e46e8f002b7d&v=4")
    cy.get('#cole .dev-image').should("have.attr", "src", "https://avatars.githubusercontent.com/u/58485286?s=400&u=75d7ab4daaa9b5ef1276d667dc9e5a5ca59e5de8&v=4")
    cy.get('#richard .dev-image').should("have.attr", "src", "https://avatars.githubusercontent.com/u/70095063?s=400&u=39c274f1a2fbb88cc013de61aa8307596a988255&v=4")
  })

  it('should navigate to each dev\'s github', () => {
    cy.get('#lucas .dev-gh').should('have.attr', 'href', 'https://github.com/lbmerchant93');
    cy.get('#cole .dev-gh').should('have.attr', 'href', 'https://github.com/colefiscus');
    cy.get('#richard .dev-gh').should('have.attr', 'href', 'https://github.com/richardltyler');
  })

  it('should navigate to each dev\'s linkedin', () => {
    cy.get('#lucas .dev-li').should('have.attr', 'href', 'https://www.linkedin.com/in/lucas-merchant93/');
    cy.get('#cole .dev-li').should('have.attr', 'href', 'https://www.linkedin.com/in/colefiscus/');
    cy.get('#richard .dev-li').should('have.attr', 'href', 'https://www.linkedin.com/in/richardltyler/');
  })
})