/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
// import { includes } from 'cypress/types/lodash'

import HomePage from '../pageObjects/HomePage'
import Products from '../pageObjects/Products'

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
      
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

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

        //loop and add item to cart
        this.data.productName.forEach(function(element) {
            
            cy.selectProduct(element)

        });

        products.checkoutButton().click()
        cy.contains('Checkout').click()


        //cy.pause() to debug

        
    })

  })