/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('My first test suite', function() {
    it('My first test case', function() {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
     
      //grab href attribute - .prop()
        cy.get('#opentab').then(function(el) {

            const url = el.prop('href')
            cy.visit(url)
        })
      
    })
  })