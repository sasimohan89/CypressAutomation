/// <reference types="Cypress" />

describe('My first test suite', function() {
    it('My first test case', function() {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get(".search-keyword").type("ca")
      cy.wait(2000)
      cy.get(".product:visible").should("have.length", 4)
      cy.get('.products').as('productsLocator')
      cy.get('@productsLocator').find('.product').eq(2).contains('ADD TO CART').click()

      cy.get('.products').find('.product').each(($el, index, $list) => {
        const name = $el.find('h4.product-name').text()
        if (name.includes('Cashews')) {
            $el.find('button').click()
        }
      })
      cy.get('.brand').then(function(logo) {
          cy.log(logo.text());
      })
    });
  });