/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('My first test suite', function() {
    it('My first test case', function() {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
     
      //iframe
        cy.frameLoaded('#courses-iframe')

        cy.iframe().find('a[href*="mentorship"]').eq(0).click()

        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)
    })
      
})
  