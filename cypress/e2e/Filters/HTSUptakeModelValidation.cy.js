
describe("HTSUpdateModelValidation", function () {
    // test case
    it("Select NAIROBI county and validate model", function () {
      cy.visit("https://dwh.nascop.org/#/hiv-testing/uptake");
      cy.get("#county").click({ force: true });
  
      cy.xpath('//*[@id="county"]/input').click({ force: true, multiple: true });
  
    
      cy.xpath('//*[@id="county"]/div[2]/div[29]/span').click({
        force: true,
        multiple: true,
      });


       cy.task("queryDb",'SELECT year,month, \n' +
      'SUM(Tested) Tested, TestedBefore, SUM(CASE WHEN positive IS NULL THEN 0 ELSE positive END) positive, \n' +
       '((SUM(CASE WHEN positive IS NULL THEN 0 ELSE positive END) \n' +
       '/SUM(Tested))*100) AS positivity FROM fact_htsuptake WHERE Tested IS NOT NULL and year=2022 \n' +
       ' and month=09 and county="NAIROBI"\n').then((result)=>{
        cy.log(result);
        cy.get(':nth-child(1) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').should(
          "have.text", 
        result[0].Tested.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
       );
       cy.get(':nth-child(2) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').should(
       "have.text", result[0].positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
       )
      })

      cy.task ("queryDb",'SELECT Gender gender, SUM(Tested) tested,\n' 
       +'SUM(Positive) positive, ((SUM(CASE WHEN positive IS NULL THEN 0 ELSE positive END)/SUM(Tested))*100)\n'
       +'AS positivity FROM fact_hts_agegender WHERE Tested IS NOT NULL\n' +
       'and year=2022 and month=09 and county="NAIROBI" group by gender\n').then((result)=>{
         cy.log(result)
         cy.get(':nth-child(3) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').should(
          "have.text",result[0].tested.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
         );
        cy.get('.overall-rates-figure').should("have.text",result[0].positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))
        cy.get(':nth-child(1) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
        .should('have.text',result[1].tested.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))
        cy.get(':nth-child(2) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
        .should('have.text',result[1].positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))
       })
      
    
    })
    it("Select LANGATA sub-county and validate model", function () {
      cy.get("#subCounty").click({ force: true });
      cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
      cy.xpath('//*[@id="subCounty"]/div[2]/div[12]/span').click({
      force: true,
      multiple: true,
      });
      cy.task("queryDb",'SELECT year,month, \n' +
      'SUM(Tested) Tested, TestedBefore, SUM(CASE WHEN positive IS NULL THEN 0 ELSE positive END) positive, \n' +
       '((SUM(CASE WHEN positive IS NULL THEN 0 ELSE positive END) \n' +
       '/SUM(Tested))*100) AS positivity FROM fact_htsuptake WHERE Tested IS NOT NULL and year=2022 \n' +
       ' and month=09 and county="NAIROBI" and subCounty="LANGATA"\n').then((result)=>{
        cy.log(result);
        cy.get(':nth-child(1) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').should(
          "have.text", 
        result[0].Tested.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
       );
       cy.get(':nth-child(2) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').should(
       "have.text", result[0].positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
       )
      })


      
      cy.task ("queryDb",'SELECT Gender gender, SUM(Tested) tested,\n' 
       +'SUM(Positive) positive, ((SUM(CASE WHEN positive IS NULL THEN 0 ELSE positive END)/SUM(Tested))*100)\n'
       +'AS positivity FROM fact_hts_agegender WHERE Tested IS NOT NULL\n' +
       'and year=2022 and month=09 and county="NAIROBI" and subCounty="LANGATA" group by gender\n').then((result)=>{
         cy.log(result)
         cy.get(':nth-child(3) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').should(
          "have.text",result[1].tested.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
         );
        cy.get('.overall-rates-figure').should("have.text",result[1].positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))
        cy.get(':nth-child(1) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
        .should('have.text',result[0].tested.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))
        cy.get(':nth-child(2) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
        .should('have.text',result[0].positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))
       })
      
    
  });


  it("Select CIHEB CONNECT partner and validate its model", function () {
    cy.get("#partner").click({ force: true });
   
    cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });

    //selects CIHEB CONNECT
    //cy.get('.visible > :nth-child(5) > .text').click({
      //force:true,
     // multiple:true
    //});
     cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
     force: true,
     multiple: true,
     });

     cy.task("queryDb",'SELECT year,month, \n' +
     'SUM(Tested) Tested, TestedBefore, SUM(CASE WHEN positive IS NULL THEN 0 ELSE positive END) positive, \n' +
      '((SUM(CASE WHEN positive IS NULL THEN 0 ELSE positive END) \n' +
      '/SUM(Tested))*100) AS positivity FROM fact_htsuptake WHERE Tested IS NOT NULL and year=2022 \n' +
      ' and month=09 and county="NAIROBI" and subCounty="LANGATA" and CTPartner="CIHEB CONNECT"\n').then((result)=>{
       cy.log(result);
       cy.get(':nth-child(1) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').should(
         "have.text", 
       result[0].Tested.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      );
      cy.get(':nth-child(2) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').should(
      "have.text", result[0].positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      )
     })


     
     cy.task ("queryDb",'SELECT Gender gender, SUM(Tested) tested,\n' 
      +'SUM(Positive) positive, ((SUM(CASE WHEN positive IS NULL THEN 0 ELSE positive END)/SUM(Tested))*100)\n'
      +'AS positivity FROM fact_hts_agegender WHERE Tested IS NOT NULL\n' +
      'and year=2022 and month=09 and county="NAIROBI" and subCounty="LANGATA" and  CTPartner="CIHEB CONNECT" group by gender\n').then((result)=>{
        cy.log(result)
        cy.get(':nth-child(3) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').should(
         "have.text",result[1].tested.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        );
       cy.get('.overall-rates-figure').should("have.text",result[1].positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))
       cy.get(':nth-child(1) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
       .should('have.text',result[0].tested.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))
       cy.get(':nth-child(2) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
       .should('have.text',result[0].positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))
      })

  });


 

  })

