/// <reference types="Cypress" />

describe('My first test suite', function() {
    it('My first test case', function() {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

      // tagname[attribute=value]
      cy.get('input[type="checkbox"]').check(['option2', 'option3']).should('be.checked')

      // static dropdown
      cy.get('select').select('option3').should('have.value', 'option3')

      // dynamic dropdown
      cy.get('#autocomplete').type('Bri')
      cy.get('.ui-menu-item').each(($el, index, $list) => {
          if($el.text() == 'Virgin Islands (British)') {
            $el.click()
          }
          
      })  
      cy.get('#autocomplete').should('have.value', 'Virgin Islands (British)')

      // toggle visibility
      cy.get('#displayed-text').should('be.visible')
      cy.get('#hide-textbox').click()
      cy.get('#displayed-text').should('not.be.visible')
      cy.get('#show-textbox').click()
      cy.get('#displayed-text').should('be.visible')
      
    });
  });