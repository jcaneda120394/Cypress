/// <reference types="Cypress" />

/// This Test Case Contains - POST Family - Endpoint

describe('Post Add Family', () => {

  it('Create Family' , () => {

    cy.request({

        method: 'POST',
        url: 'https://join.reckon.com/family',
        headers: {
          'content-type': 'application/json'
        },
        body: 
        {
          "name": "Jerald Test One",
          "postCode": "2022"
        }
        }).then((res)=>{
          cy.log(JSON.stringify(res))
              expect(res.status).to.eq(201)

         })

  });



})