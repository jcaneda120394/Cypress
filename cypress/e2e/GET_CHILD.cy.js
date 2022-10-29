/// <reference types="Cypress" />

/// This Test Case Contains - GET Child - Endpoint


describe('GET Parent', () => {

  it('GET Parent' , () => {

    cy.request({

        method: 'GET',
        url: 'https://join.reckon.com/child/05418b51-7f94-421b-8846-9e6cd5ea7d15',
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