/// <reference types="Cypress" />

describe('My first test suite', function() {
    it('My first test case', function() {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get('[value="Alert"]').click()
      cy.get('#confirmbtn').click()

      // validate alert msg - fire event
      cy.on('window:alert', (str) => {
        expect(str).to.equal("Hello , share this practice page and share your knowledge")
      })

      cy.on('window:confirm', (str) => {
        expect(str).to.equal("Hello , Are you sure you want to confirm?")
      })
      
      //open tab in same page
      cy.get('#opentab').invoke('removeAttr','target').click()

      //validate url
      cy.url().should('include', 'rahulshettyacademy')

      //back browser
      cy.go('back')
    });
  });