
describe ("CareTreatmentReporingRates", ()=>{
    it("Select Nairobi County and validate the care and treatment reporting ",function(){

        cy.visit("https://dwh.nascop.org/#/reporting-rates/ct");
        cy.get("#county").click({ force: true });
    
        cy.xpath('//*[@id="county"]/input').click({ force: true, multiple: true });
    
        //selects NAIROBI
        cy.xpath('//*[@id="county"]/div[2]/div[26]/span').click({
          force: true,
          multiple: true,
        });

        cy.
        request ({method:'GET', url: 'https://dwh.nascop.org/api/manifests/consistencyreportingbycountypartner/ct?reportingType=county&county[]=NAIROBI&fromDate=Oct+2022&period=2022,9'})
        .then(result=> {
          cy.log(result.body.NAIROBI);

          cy.get('.consistency-reporting-figure').should('have.text',result.body.NAIROBI);
        })
        cy.
        request ({method:'GET', url: 'https://dwh.nascop.org/api/manifests/recencyreportingbycounty/ct?county[]=NAIROBI&fromDate=Oct+2022&period=2022,10'})
        .then(response=> {
          const result=response.body;
          cy.log(result[0].recency);

          //cy.log(result.body.recency);

         cy.get('.overall-rates-figure').should('have.text',result[0].recency);
        })

        
    })

    it("Select KASARANI sub-county and validate the models based on the api", function () {
      cy.get("#subCounty").click({ force: true });
    
      cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
      //selects KASARANI
    
    
      //cy.get(':nth-child(4) > :nth-child(1) > .form-group > #sub-county').should('include.text', 'Kasarani');
  
   
    cy.xpath('//*[@id="subCounty"]/div[2]/div[10]/span').click({
      force: true,
      multiple: true,
   });
   cy.
   request ({method:'GET', url: 'https://dwh.nascop.org/api/manifests/recencyreportingbycounty/ct?county[]=NAIROBI&subCounty[]=KASARANI&fromDate=Oct+2022&period=2022,10'})
   .then(response=> {
     const result=response.body;
     cy.log(result[0].recency);

     //cy.log(result.body.recency);
    cy.get('.expected-uploads-text').should('have.text',result[0].expected);
    cy.get('.overall-rates-figure').should('have.text',result[0].recency);

   })

    
  });


})