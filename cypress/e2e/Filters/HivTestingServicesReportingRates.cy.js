describe ("HTSTreatmentReporingRates", ()=>{
    it("Select Nairobi County and validate and validate the models based on the api ",function(){

        cy.visit("https://dwh.nascop.org/#/reporting-rates/hts");
        cy.get('.container-fluid > :nth-child(1) > .nav > :nth-child(2) > .nav-link').click({force:true,multiple:true});
        cy.get("#county").click({ force: true });
    
        cy.xpath('//*[@id="county"]/input').click({ force: true, multiple: true });
    
        //selects NAIROBI
        cy.xpath('//*[@id="county"]/div[2]/div[29]/span').click({
          force: true,
          multiple: true,
        });

        cy.
        request ({method:'GET', url: 'https://dwh.nascop.org/api/manifests/consistencyreportingbycountypartner/hts?reportingType=county&county[]=NAIROBI&fromDate=Oct+2022&period=2022,9'})
        .then(result=> {
          cy.log(result.body.NAIROBI);

          cy.get('.consistency-reporting-figure').should('have.text',result.body.NAIROBI);
        })
        cy.
        request ({method:'GET', url: 'https://dwh.nascop.org/api/manifests/recencyreportingbycounty/hts?county[]=NAIROBI&fromDate=Oct+2022&period=2022,9'})
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
   request ({method:'GET', url: 'https://dwh.nascop.org/api/manifests/recencyreportingbycounty/hts?county[]=NAIROBI&subCounty[]=KASARANI&fromDate=Oct+2022&period=2022,10'})
   .then(response=> {
     const result=response.body;
     cy.log(result[0].recency);

     //cy.log(result.body.recency);
    cy.get('.expected-uploads-text').should('have.text',result[0].expected);
    cy.get('.overall-rates-figure').should('have.text',result[0].recency);

   })

    
  });
  it("Clear the filters", function () {
    cy.xpath('//*[@id="county"]/a/i').click({
      force: true,
      multiple: true,
    });
    cy.xpath('//*[@id="subCounty"]/a/i').click({
      force: true,
      multiple: true,
    });
 });
 it("Select CIHEB Connect ", function(){
    cy.get("#partner").click({ force: true });
     
    cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
    cy.xpath('//*[@id="partner"]/div[2]/div[6]/span').click({force:true, multiple:true});

 })


 it('Select CIHEB CONNECT and validate the models based on the api',function(){

   cy.wait(10000);

    cy.
   request ({method:'GET', url: 'https://dwh.nascop.org/api/manifests/recencyreportingbypartner/hts?partner[]=CIHEB+CONNECT&fromDate=Oct+2022&period=2022,10'})
   .then(response=> {
     const result=response.body;
     cy.log(result[0].recency);

     //cy.log(result.body.recency);
    cy.get('.expected-uploads-text').should('have.text',result[0].expected);
    cy.get('.overall-rates-figure').should('have.text',result[0].recency);

   })

 })
 it('Select CDC as the filter',function(){
    cy.xpath('//*[@id="partner"]/a/i').click({
        force: true,
        multiple: true,
      });
  
  
      cy.get("#agency").click({ force: true });
       
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
      cy.xpath('//*[@id="agency"]/div[2]/div[2]/span').click({force:true, multiple:true});
  
 })
 it('Select CDC and validate the models based on the api',function(){
    
    cy.wait(10000);
    cy.
   request ({method:'GET', url: 'https://dwh.nascop.org/api/manifests/expected/hts?agency[]=CDC&fromDate=Oct+2022&period=2022,9'})
   .then(response=> {
     const result=response.body;
     cy.log(result.expected);

     //cy.log(result.body.recency);
    cy.get('.expected-uploads-text').should('have.text',result.expected);
   

   })
   cy.wait(10000);
   cy.request({method:'GET',url:'https://dwh.nascop.org/api/manifests/consistency/hts?agency[]=CDC&fromDate=Oct+2022&period=2022,9'}).then(
    response=>{
        const result=response.body;
        cy.get('.consistency-reporting-figure').should('have.text',result.consistency);
    })

    cy.wait(10000);
    cy.
    request ({method:'GET', url: 'https://dwh.nascop.org/api/manifests/recency/hts?agency[]=CDC&fromDate=Oct+2022&period=2022,9'})
    .then(response=> {
      const result=response.body;
      cy.log(result.recency);
 
      //cy.log(result.body.recency);
    
     cy.get('.overall-rates-figure').should('have.text',result.recency);
 
    })

 })




})