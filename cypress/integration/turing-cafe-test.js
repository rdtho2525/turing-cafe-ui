describe('Turing Cafe', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('should display a header, a form, and all current reservations', () => {
    cy.get('div[class="App"]').contains('Turing Cafe Reservations')
    cy.get('form').should('be.visible')
    cy.get('div[class="card"]').should('be.visible')
  });

  it('should accept and hold user input as values within a controlled form', () => {
    cy.get('input[name=name]').type('Yoda')
    cy.get('input[name=time]').type('3:30')
    cy.get('input[name=date]').type('4/1')
    cy.get('input[name=numOfGuests]').type(13)
  });

  it('should add a new card to the dashboard when a reservation form is submitted', () => {
    cy.get('input[name=name]').type('Yoda')
    cy.get('input[name=time]').type('3:30')
    cy.get('input[name=date]').type('4/1')
    cy.get('input[name=numOfGuests]').type(13)
    cy.get('input[class=submit-button]').click()
    cy.get('p[id="Yoda"]').should('be.visible')
  });

});