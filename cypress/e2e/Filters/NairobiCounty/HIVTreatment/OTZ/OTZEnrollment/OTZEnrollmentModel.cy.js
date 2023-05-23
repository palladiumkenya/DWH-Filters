

describe("DWHCT", function () {
    let query='select Count(TxCurr) from FACT_Trans_OTZEnrollments where '
    let query2='select Count(*) from FACT_Trans_OTZEnrollments where OTZEnrollmentDate is not null'
    let query3='select  Count(*) from FACT_Trans_OTZEnrollments where  lastVL is not null and  OTZEnrollmentDate is not null'
    let query4='select  Count(*)  from FACT_Trans_OTZEnrollments where  Last12MVLResult IS NOT NULL and OTZEnrollmentDate is not null'
it("Select NAIROBI county and validate its model", function () {

    cy.visit("https://dwh.nascop.org/#/hiv-treatment/otz/otz_enrollment");
 
 
    cy.get("#county").click({ force: true });

    cy.xpath('//*[@id="county"]/input').click({ force: true, multiple: true });

    //selects NAIROBI
    cy.xpath('//*[@id="county"]/div[2]/div[25]/span').click({
      force: true,
      multiple: true,
    });
    cy.sqlServer(
        query +` County='NAIROBI' `
      ).then((result) => {
        console.log(result[0]);
        cy.get(':nth-child(1) > .card-uploads-consistency-rates > .align-items-center > :nth-child(1) > .expected-uploads-text')
        .should("contain.text",result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      });

      cy.sqlServer(
        query2 +` and County='NAIROBI' `
      ).then((result) => {
        console.log(result[0]);
        cy.get(':nth-child(2) > .card-uploads-consistency-rates > .align-items-center > :nth-child(1) > .expected-uploads-text')
        .should("contain.text",result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      });


      
      cy.sqlServer(
        query3 +` and County='NAIROBI' `
      ).then((result) => {
        
        cy.get(':nth-child(3) > .card-uploads-consistency-rates > .align-items-center > :nth-child(1) > .expected-uploads-text')
        .should("contain.text",result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      });




      cy.sqlServer(
        query4 +` and County='NAIROBI' `
      ).then((result) => {
        
        cy.get(':nth-child(4) > .card-uploads-consistency-rates > .align-items-center > :nth-child(1) > .expected-uploads-text')
        .should("contain.text",result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      });
    
     //cy.get(':nth-child(4) > :nth-child(1) > .form-group > #county').click()
     //.contains('Nairobi').click()
     //cy.get().contains('have text'Nairobi')

    cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');

    //remove Nairobi
    //cy.xpath('//*[@id="county"]/a/i').click({force:true,multiple:true})

    // cy.get('#county > a').type("Nairobi")
    // asserting the option selected
    // .should("have.text", "Nairobi");
  });


  //it("Select KASARANI sub-county and validate its attribute", function () {
  //  cy.get("#subCounty").click({ force: true });
   // cy.xpath('//*[@id="subCounty"]/input').click({
   //   force: true,
     // multiple: true,
    //});
    //selects KASARANI
    //cy.get(':nth-child(4) > :nth-child(1) > .form-group > #county').should('include.text', 'Kasarani');

    it("Select DAGORETTI NORTH sub-county and validate its model", function () {
      cy.get("#subCounty").click({ force: true });
    
      cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
      //selects KASARANI
    
    
      //cy.get(':nth-child(4) > :nth-child(1) > .form-group > #sub-county').should('include.text', 'Kasarani');
  
   
    cy.xpath('//*[@id="subCounty"]/div[2]/div[1]/span').click({
      force: true,
      multiple: true,
   });
    cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI NORTH");
    //remove KASARANI
    //cy.xpath('//*[@id="sub-county"]/a/i').click({force:true,multiple:true})
    // cy.get('#sub-county > a').type("Kasarani")
    // asserting the option selected
    // .should("have.text", "Kasarani");

    cy.sqlServer(
        query +` SubCounty='Dagoretti North' `
      ).then((result) => {
        console.log(result[0]);
        cy.get(':nth-child(1) > .card-uploads-consistency-rates > .align-items-center > :nth-child(1) > .expected-uploads-text')
        .should("contain.text",result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      });

      cy.sqlServer(
        query2 +` and SubCounty='Dagoretti North' `
      ).then((result) => {
        console.log(result[0]);
        cy.get(':nth-child(2) > .card-uploads-consistency-rates > .align-items-center > :nth-child(1) > .expected-uploads-text')
        .should("contain.text",result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      });


      
      cy.sqlServer(
        query3 +` and SubCounty='Dagoretti North' `
      ).then((result) => {
        
        cy.get(':nth-child(3) > .card-uploads-consistency-rates > .align-items-center > :nth-child(1) > .expected-uploads-text')
        .should("contain.text",result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      });




      cy.sqlServer(
        query4 +` and SubCounty='Dagoretti North' `
      ).then((result) => {
        
        cy.get(':nth-child(4) > .card-uploads-consistency-rates > .align-items-center > :nth-child(1) > .expected-uploads-text')
        .should("contain.text",result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      });
  });

  it("Select Riruta Health Centre facility and validate its model", function () {
      cy.get("#facility").click({ force: true });
     
      cy.xpath('//*[@id="facility"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="facility"]/div[2]/div[6]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="facility"]/a').should('include.text','Riruta Health Centre' );


      cy.sqlServer(
        query +` FacilityName='Riruta Health Centre' `
      ).then((result) => {
        console.log(result[0]);
        cy.get(':nth-child(1) > .card-uploads-consistency-rates > .align-items-center > :nth-child(1) > .expected-uploads-text')
        .should("contain.text",result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      });

      cy.sqlServer(
        query2 +` and FacilityName='Riruta Health Centre' `
      ).then((result) => {
        console.log(result[0]);
        cy.get(':nth-child(2) > .card-uploads-consistency-rates > .align-items-center > :nth-child(1) > .expected-uploads-text')
        .should("contain.text",result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      });


      
      cy.sqlServer(
        query3 +` and FacilityName='Riruta Health Centre' `
      ).then((result) => {
        
        cy.get(':nth-child(3) > .card-uploads-consistency-rates > .align-items-center > :nth-child(1) > .expected-uploads-text')
        .should("contain.text",result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      });




      cy.sqlServer(
        query4 +` and FacilityName='Riruta Health Centre' `
      ).then((result) => {
        
        cy.get(':nth-child(4) > .card-uploads-consistency-rates > .align-items-center > :nth-child(1) > .expected-uploads-text')
        .should("contain.text",result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      });

  });
});