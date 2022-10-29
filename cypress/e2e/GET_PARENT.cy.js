/// <reference types="Cypress" />


/// This Test Case Contains - GET Parent - Endpoint

describe('GET Parent', () => {

  it('GET Parent' , () => {

    cy.request({

        method: 'GET',
        url: 'https://join.reckon.com/parent/c1011ebb-674a-4d9e-8158-0b31eda665b3',
        headers: {
          'content-type': 'application/json',
          'accept' : 'application/json'
        }
        }).then((res)=>{
          cy.log(JSON.stringify(res))
              expect(res.status).to.eq(200)

         })

  });

})