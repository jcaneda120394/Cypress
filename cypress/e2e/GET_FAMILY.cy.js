/// <reference types="Cypress" />

/// This Test Case Contains - GET Family - Endpoint

describe('GET Family', () => {

  it('GET Family' , () => {

    cy.request({

        method: 'GET',
        url: 'https://join.reckon.com/family/3d36a5b5-9c1b-40ca-b6ed-431c2d510291',
        headers: {
          'content-type': 'application/json'
        }
        }).then((res)=>{
          cy.log(JSON.stringify(res))
              expect(res.status).to.eq(200)

         })

  });

})