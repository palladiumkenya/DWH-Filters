describe("DWHCT", function () {
    // test case
    it("Select NAIROBI county and validate its attribute", function () {
      cy.visit("https://dwh.nascop.org/#/hiv-testing/linkage");
      
      cy.get("#county").click({ force: true });
  
      cy.xpath('//*[@id="county"]/input').click({ force: true, multiple: true });
  
      //selects NAIROBI
      cy.xpath('//*[@id="county"]/div[2]/div[29]/span').click({
        force: true,
        multiple: true,
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
  
      it("Select WESTLANDS sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
        //selects KISUMU CENTRAL
      
      
        //cy.get(':nth-child(4) > :nth-child(1) > .form-group > #sub-county').should('include.text', 'Kasarani');
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[18]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "WESTLANDS");
      //remove KASARANI
      //cy.xpath('//*[@id="sub-county"]/a/i').click({force:true,multiple:true})
      // cy.get('#sub-county > a').type("Kasarani")
      // asserting the option selected
      // .should("have.text", "Kasarani");
    });
  
    it("Select Westlands Health Centre facility and validate its attribute", function () {
        cy.get("#facility").click({ force: true });
       
        cy.xpath('//*[@id="facility"]/input').click({ force: true, multiple: true });

        cy.xpath('//*[@id="facility"]/div[2]/div[12]/span').click({
       force: true,
       multiple: true,
       });


      cy.xpath('//*[@id="facility"]/a').should('include.text','Westlands Health Centre' );
  
      //remove USAID Fahari ya Jamii
      //cy.xpath('//*[@id="facility"]/a/i').click({force:true,multiple:true})
  
      // cy.get('#partner > a').type("USAID Fahari ya Jamii")
      // asserting the option selected
      // .should("have.text", "USAID Fahari ya Jamii");
    });

       
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects CIHEB CONNECT
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[3]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB CONNECT' );
  
      //remove USAID Fahari ya Jamii
      //cy.xpath('//*[@id="facility"]/a/i').click({force:true,multiple:true})
  
      // cy.get('#partner > a').type("USAID Fahari ya Jamii")
      // asserting the option selected
      // .should("have.text", "USAID Fahari ya Jamii");
    });
  
    it("Select NO AGENCY agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div/span').click({
        force: true,
        multiple: true,
    })
        cy.get(':nth-child(4) > :nth-child(6) > .form-group > .field > .ui > input').then(elem=>{
   
            elem.val('Jun 2022 - Jun 2022')
    
          })
     });

    // it("Select Female gender and validate its attribute", function () {
       // cy.get("#gender").click({ force: true });
    
       // cy.xpath('//*[@id="gender"]/input').click({ force: true, multiple: true });
    
        //selects CDC
        //cy.xpath('//*[@id="gender"]/div[2]/div[2]/span').click({
         // force: true,
         // multiple: true,
        //});
    
        //cy.xpath('//*[@id="gender"]/a').eq(1).should("have.text", "Female");
    
        //remove Female
        //cy.xpath('//*[@id="gender"]/a/i').click({force:true,multiple:true})
    
        // cy.get('#gender > a').type("Female")
        // asserting the option selected
        // .should("have.text", "Female");
    //  });
    
     // it("Select 15-19 age group and validate its attribute", function () {
       // cy.get("#datimAgeGroup").click({ force: true });
    
        //cy.xpath('//*[@id="datimAgeGroup"]/input').click({
          //force: true,
        //  multiple: true,
        //});
    
        //selects CDC
    
        //cy.xpath('//*[@id="datimAgeGroup"]/div[2]/div[5]/span').click({
         // force: true,
         // force: true,
    
         // multiple: true,
       // });
    
        //cy.xpath('//*[@id="datimAgeGroup"]/a')
          //.eq(1)
          //.should("have.text", "15 to 19");
    
        //remove 20-24
    
        //cy.xpath('//*[@id="datimAgeGroup"]/a/i').click({force:true,multiple:true})
    
        // cy.get('#datimAgeGroup > a').type(20-24)
    
        // asserting the option selected
    
        // .should("have.text", 20-24);
      //});
   
  })