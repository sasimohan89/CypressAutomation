/// <reference types="Cypress" />

describe('My first test suite', function() {
    it('My first test case', function() {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
     
      //loop through a column in table
      cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
        
        const text1 = $el.text()
        if(text1.includes("Python")) {
            
            //traverse to sibling element price value using next(); resolve promise to get price wiht function; index updated dynamically
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) {

                const priceText = price.text()
                expect(priceText).to.equal('25')
            })
        }
      })
    })
  })