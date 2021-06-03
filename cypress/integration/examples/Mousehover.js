/// <reference types="Cypress" />

describe('My first test suite', function() {
    it('My first test case', function() {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
     
      //show() method in jquery - include child div to show whats hidden
      cy.get('.mouse-hover-content').invoke('show')
      cy.contains('Top').click()

      // YOU CAN ALSO CLICK HIDDEN ELEMENTS WITH THE USE OF FORCE:TRUE; eg. cy.contains('Top').click({force: true})

      //verify url
      cy.url().should('include', 'top')
      
    })
  })