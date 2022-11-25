describe("DWHCT", function () {
    // test case
    let year='2022';
    let month='10';
    let query=`select Gender, SUM(StartedART) as  TxNew from FACT_Trans_Newly_Started where Start_Year =${year} and StartART_Month=${month}`
    let query2=`select SUM([StartedART]) as TotalStartedOnART,
    SUM(CASE When Gender='Male' Then [StartedART] Else 0 End ) as MalesStartedOnART,
    SUM(CASE When Gender='Female' Then [StartedART] Else 0 End ) as FemalesStartedOnART,
    SUM(CASE When AgeGroup IN('15 to 19', '20 to 24', '25 to 29', '30 to 34', '35 to 39', '40 to 44', '45 to 49', '50 to 54', '55 to 59', '60 to 64', '65+') Then [StartedART] Else 0 End ) as AdultsStartedOnART, 
    SUM(CASE When AgeGroup IN('10 to 14', '15 to 19') Then [StartedART] Else 0 End ) as AdolescentsStartedOnART,
    SUM(CASE When AgeGroup IN('Under 1', '1 to 4', '5 to 9', '10 to 14') Then [StartedART] Else 0 End ) as ChildrenStartedOnART
    from FACT_Trans_Newly_Started where  StartedART IS NOT NULL and  Start_Year=${year} and StartART_Month=${month}`
    it("Select NAIROBI county and validate Model ", function () {
      cy.visit("https://dwh.nascop.org/#/hiv-treatment/newlyOnArt");
      cy.get("#county").click({ force: true });
  
      cy.xpath('//*[@id="county"]/input').click({ force: true, multiple: true });
  
      //selects NAIROBI
      cy.xpath('//*[@id="county"]/div[2]/div[25]/span').click({
        force: true,
        multiple: true,
      });
       //cy.get(':nth-child(4) > :nth-child(1) > .form-group > #county').click()
       //.contains('Nairobi').click()
       //cy.get().contains('have text'Nairobi')
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
     
      cy.sqlServer(
        query +`and County='NAIROBI' group by Gender order by Gender asc`
      ).then((result) => {
        cy.log(result[1][1]);
        cy.get(':nth-child(6) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
        .should("contain.text",result[1][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        cy.get(':nth-child(6) > :nth-child(3) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
        .should("contain.text",result[0][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        
      });
      cy.sqlServer(
        query2 +`and County='NAIROBI'`
      ).then((result) => {
        cy.log(result);
        cy.get(':nth-child(6) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
        .should("contain.text",result[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        cy.get(':nth-child(7) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
        .should("contain.text",result[3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        cy.get(':nth-child(7) > :nth-child(3) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
        .should("contain.text",result[4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        cy.get(':nth-child(7) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
        .should("contain.text",result[5].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
       
      });
      
    });
  
  
    //it("Select KASARANI sub-county and validate its attribute", function () {
    //  cy.get("#subCounty").click({ force: true });
     // cy.xpath('//*[@id="subCounty"]/input').click({
     //   force: true,
       // multiple: true,
      //});
      //selects KASARANI
      //cy.get(':nth-child(4) > :nth-child(1) > .form-group > #county').should('include.text', 'Kasarani');
  
      it("Select DAGORETTI NORTH sub-county and validate model", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
        //selects KASARANI
      
      
        //cy.get(':nth-child(4) > :nth-child(1) > .form-group > #sub-county').should('include.text', 'Kasarani');
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[1]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI NORTH");

      cy.sqlServer(
        query +`and Subcounty='Dagoretti North' group by Gender order by Gender asc`
      ).then((result) => {
        cy.log(result[1][1]);
        cy.get(':nth-child(6) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
        .should("contain.text",result[1][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        cy.get(':nth-child(6) > :nth-child(3) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
        .should("contain.text",result[0][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        
      });
      cy.sqlServer(
        query2 +`and Subcounty='Dagoretti North'`
      ).then((result) => {
        cy.log(result);
        cy.get(':nth-child(6) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
        .should("contain.text",result[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        cy.get(':nth-child(7) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
        .should("contain.text",result[3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        cy.get(':nth-child(7) > :nth-child(3) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
        .should("contain.text",result[4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        cy.get(':nth-child(7) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
        .should("contain.text",result[5].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
       
      });
      //remove KASARANI
      //cy.xpath('//*[@id="sub-county"]/a/i').click({force:true,multiple:true})
      // cy.get('#sub-county > a').type("Kasarani")
      // asserting the option selected
      // .should("have.text", "Kasarani");
    });

    it("Select Coptic Hospital (Ngong Road) and validate its model", function () {
        cy.get("#facility").click({ force: true });
       
        cy.xpath('//*[@id="facility"]/input').click({ force: true, multiple: true });
    
        //selects USAID Fahari ya Jamii
        //cy.get('.visible > :nth-child(5) > .text').click({
          //force:true,
         // multiple:true
        //});
         cy.xpath('//*[@id="facility"]/div[2]/div[1]/span').click({
         force: true,
         multiple: true,
         });
         cy.sqlServer(
          query +`and FacilityName='Coptic Hospital (Ngong Road)' group by Gender order by Gender asc`
        ).then((result) => {
          cy.log(result[1][1]);
          cy.get(':nth-child(6) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
          .should("contain.text",result[1][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
          cy.get(':nth-child(6) > :nth-child(3) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
          .should("contain.text",result[0][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
          
        });
        cy.sqlServer(
          query2 +`and FacilityName='Coptic Hospital (Ngong Road)' `
        ).then((result) => {
          cy.log(result);
          cy.get(':nth-child(6) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
          .should("contain.text",result[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
          cy.get(':nth-child(7) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
          .should("contain.text",result[3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
          cy.get(':nth-child(7) > :nth-child(3) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
          .should("contain.text",result[4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
          cy.get(':nth-child(7) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
          .should("contain.text",result[5].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
         
        });
        
    
       
  
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
      cy.xpath('//*[@id="facility"]/a/i').click({
        force: true,
        multiple: true,
      });
      
      
    });
    it("Select CIHEB CONNECT partner and validate its model", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
      
       cy.xpath('//*[@id="partner"]/div[2]/div[5]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB CONNECT' );


      cy.sqlServer(
        query +`and  CTPartner='CIHEB CONNECT' group by Gender order by Gender asc`
      ).then((result) => {
        cy.log(result[1][1]);
        cy.get(':nth-child(6) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
        .should("contain.text",result[1][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        cy.get(':nth-child(6) > :nth-child(3) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
        .should("contain.text",result[0][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        
      });
      cy.sqlServer(
        query2 +`and CTPartner='CIHEB CONNECT' `
      ).then((result) => {
        cy.log(result);
        cy.get(':nth-child(6) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
        .should("contain.text",result[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        cy.get(':nth-child(7) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
        .should("contain.text",result[3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        cy.get(':nth-child(7) > :nth-child(3) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
        .should("contain.text",result[4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        cy.get(':nth-child(7) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
        .should("contain.text",result[5].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
       
      });
  
      //remove USAID Fahari ya Jamii
      //cy.xpath('//*[@id="facility"]/a/i').click({force:true,multiple:true})
  
      // cy.get('#partner > a').type("USAID Fahari ya Jamii")
      // asserting the option selected
      // .should("have.text", "USAID Fahari ya Jamii");
    });
  
    it("Select CDC agency and validate its model", function () {
      cy.xpath('//*[@id="partner"]/a/i').click({
        force: true,
        multiple: true,
      });
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      
      cy.xpath('//*[@id="agency"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
     cy.sqlServer(
      query +`and  CTAgency='CDC' group by Gender order by Gender asc`
    ).then((result) => {
      cy.log(result[1][1]);
      cy.get(':nth-child(6) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
      .should("contain.text",result[1][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      cy.get(':nth-child(6) > :nth-child(3) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
      .should("contain.text",result[0][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      
    });
    cy.sqlServer(
      query2 +`and CTAgency='CDC' `
    ).then((result) => {
      cy.log(result);
      cy.get(':nth-child(6) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
      .should("contain.text",result[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      cy.get(':nth-child(7) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
      .should("contain.text",result[3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      cy.get(':nth-child(7) > :nth-child(3) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
      .should("contain.text",result[4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      cy.get(':nth-child(7) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
      .should("contain.text",result[5].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
     
    });

  
});
  
    it("Select Female gender and validate its model", function () {
      cy.xpath('//*[@id="agency"]/a/i').click({
        force: true,
        multiple: true,
      });
        cy.get("#gender").click({ force: true });
    
        cy.xpath('//*[@id="gender"]/input').click({ force: true, multiple: true });
    
        //selects CDC
        cy.xpath('//*[@id="gender"]/div[2]/div[2]').click({
          force: true,
          multiple: true,
        });
    
        cy.xpath('//*[@id="gender"]/a').eq(1).should("have.text", "Female");



       
        cy.sqlServer(
          query2 +`and Gender='FEMALE' `
        ).then((result) => {
          cy.log(result);
          cy.get(':nth-child(6) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
          .should("contain.text",result[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
          cy.get(':nth-child(6) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
          .should("contain.text",result[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
          cy.get(':nth-child(6) > :nth-child(3) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
          .should("contain.text",result[2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
          cy.get(':nth-child(7) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
          .should("contain.text",result[3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
          cy.get(':nth-child(7) > :nth-child(3) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
          .should("contain.text",result[4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
          cy.get(':nth-child(7) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
          .should("contain.text",result[5].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
         
        });
    
    });

    it("Select 20-24 age group and validate model", function () {
      cy.xpath('//*[@id="gender"]/a/i').click({
        force: true,
        multiple: true,
      });
        cy.get("#datimAgeGroup").click({ force: true });
    
        cy.xpath('//*[@id="datimAgeGroup"]/input').click({
          force: true,
          multiple: true,
        });

       
    
        //selects CDC
    
        cy.xpath('//*[@id="datimAgeGroup"]/div[2]/div[6]').click({
          force: true,
    
          multiple: true,
        });
    
        cy.xpath('//*[@id="datimAgeGroup"]/a')
          .eq(1)
          .should("have.text", "20 to 24");

          cy.sqlServer(
            query2 +`and AgeGroup in ('20 to 24') `
          ).then((result) => {
            cy.log(result);
            cy.get(':nth-child(6) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
            .should("contain.text",result[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
            cy.get(':nth-child(6) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
            .should("contain.text",result[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
            cy.get(':nth-child(6) > :nth-child(3) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
            .should("contain.text",result[2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
            cy.get(':nth-child(7) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
            .should("contain.text",result[3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
            cy.get(':nth-child(7) > :nth-child(3) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
            .should("contain.text",result[4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
            cy.get(':nth-child(7) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text')
            .should("contain.text",result[5].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
           
          });
    
        //remove 20-24
    
        //cy.xpath('//*[@id="datimAgeGroup"]/a/i').click({force:true,multiple:true})
    
        // cy.get('#datimAgeGroup > a').type(20-24)
    
        // asserting the option selected
    
        // .should("have.text", 20-24);
      });
  })