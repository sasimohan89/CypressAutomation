/// <reference types="Cypress" />

describe('My first test suite', function() {
    it('My first test case', function() {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get(".search-keyword").type("ca")
      cy.wait(2000)
      
      cy.get('.products').as('productsLocator')

      cy.get('.products').find('.product').each(($el, index, $list) => {
        const name = $el.find('h4.product-name').text()
        if (name.includes('Cashews')) {
            $el.find('button').click()
        }
      })
      cy.get('.cart-icon > img').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.contains('Place Order').click()
    });
  });