/// <reference types="Cypress" />

/// This Test Case Contains - POST Parent - Endpoint

describe('Post Add Parent', () => {

  it('Create Parent' , () => {

    cy.request({

        method: 'POST',
        url: 'https://join.reckon.com/parent',
        headers: {
          'content-type': 'application/json'
        },
        body: 
        {
          "familyId": "d290f1ee-6c54-4b01-90e6-d701748f4537",
          "firstName": "Imran",
          "lastName": "Kyle",
          "favouriteColour": "Green"
        }


        }).then((res)=>{
          cy.log(JSON.stringify(res))
              expect(res.status).to.eq(201)

         })

  });



})