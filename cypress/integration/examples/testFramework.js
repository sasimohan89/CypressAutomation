/// <reference types="Cypress" />
// / <reference types="cypress-iframe" />
import 'cypress-iframe'
// import { includes } from 'cypress/types/lodash'

import HomePage from '../../support/pageObjects/HomePage'
import Products from '../../support/pageObjects/Products'

describe('My first test suite', function() {

    before(function() {

        //runs once before all tests in block
        // this keyword refers to whole class
        cy.fixture('example').then(function(data) {

            //making data global
            this.data = data

        })
        
    })

    it('My first test case', function() {

        // declare timeout specific to class
        Cypress.config('defaultCommandTimeout', 8000)

        // allocate memory for object while creating it - new keyword
        const homePage = new HomePage()
        const products = new Products()
      
        cy.visit(Cypress.env('url') + '/angularpractice/')

        homePage.getNameTextBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)

        //assert text match
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)

        //assert minimum length of text box
        homePage.getNameTextBox().should('have.attr', 'minlength', '2')

        //check status of checkbox
        homePage.getEntrepreneur().should('be.disabled')

        //go to shop page
        homePage.getShopTab().click()
        Cypress.config('defaultCommandTimeout', 100000)


        //loop and add item to cart
        this.data.productName.forEach(function(element) {
            
            cy.selectProduct(element)

        });

        //go to cart page
        products.checkoutButton().click()


        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

            const amount = $el.text()
            var res = amount.split(' ')
            res = res[1].trim()
            sum = Number(sum) + Number(res)

        })
        cy.get('h3 strong').then(function(element) {

            const amount = element.text()
            var res = amount.split(' ')
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum)

        })

        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.wait('8000')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('.checkbox > label').click()
        cy.get('input[type="submit"]').click()

        //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')

        cy.get('.alert').then(function(element) {

            const actualText = element.text()
            expect(actualText.includes('Success!')).to.be.true
        })



        //cy.pause() to debug

        
    })

  })