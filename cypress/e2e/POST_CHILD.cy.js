/// <reference types="Cypress" />

/// This Test Case Contains - POST Child - Endpoint

describe('Post Add Child', () => {

  it('Create Child' , () => {

    cy.request({

        method: 'POST',
        url: 'https://join.reckon.com/child',
        headers: {
          'content-type': 'application/json'
        },
        body: 
        {
          "familyId": "3d36a5b5-9c1b-40ca-b6ed-431c2d510291",
          "firstName": "Vivian",
          "lastName": "Green",
          "favouriteToy": "Rocking Horse"
        }


        }).then((res)=>{
          cy.log(JSON.stringify(res))
              expect(res.status).to.eq(201)

         })

  });



})