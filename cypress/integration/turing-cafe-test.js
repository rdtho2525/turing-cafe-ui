describe('Turing Cafe', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it.only('should display a header, a form, and all current reservations', () => {
    cy.get('div[class="App"]').contains('Turing Cafe Reservations')
    cy.get('form').should('be.visible')
    cy.get('div[class="card"]').should('be.visible')
  });

  it('should accept and hold user input as values within a controlled form', () => {
    
  });

  it('should add a new card to the dashboard when a reservation form is submitted', () => {

  });

})