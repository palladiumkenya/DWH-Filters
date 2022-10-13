describe("DWHCT", function () {
    // test case
    it("Select NAIROBI county and validate its attribute", function () {
      cy.visit("https://dwh.nascop.org/#/reporting-rates/ct");
      cy.get("#county").click({ force: true });
  
      cy.xpath('//*[@id="county"]/input').click({ force: true, multiple: true });
  
      //selects NAIROBI
      cy.xpath('//*[@id="county"]/div[2]/div[26]/span').click({
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
  
      it("Select KASARANI sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
        //selects KASARANI
      
      
        //cy.get(':nth-child(4) > :nth-child(1) > .form-group > #sub-county').should('include.text', 'Kasarani');
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[10]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "KASARANI");
      //remove KASARANI
      //cy.xpath('//*[@id="sub-county"]/a/i').click({force:true,multiple:true})
      // cy.get('#sub-county > a').type("Kasarani")
      // asserting the option selected
      // .should("have.text", "Kasarani");
    });
  
  
    it("Select USAID Fahari ya Jamii partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[4]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','USAID Fahari ya Jamii' );
  
      //remove USAID Fahari ya Jamii
      //cy.xpath('//*[@id="facility"]/a/i').click({force:true,multiple:true})
  
      // cy.get('#partner > a').type("USAID Fahari ya Jamii")
      // asserting the option selected
      // .should("have.text", "USAID Fahari ya Jamii");
    });
  
    it("Select AHF agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[1]/span').click({
        force: true,
        multiple: true,
     });

     it("Select 'period' and validate its attribute", function () {
        cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').should('include.text', 'Jun2022');
    
    })
     // cy.get(':nth-child(4) > :nth-child(4) > .form-group > #agency').should('include.text','AHF');
  
      //remove AHF
      //cy.xpath('//*[@id="agency"]/a/i').click({force:true,multiple:true})
  
      // cy.get('#agency > a').type("AHF")
      // asserting the option selected
      // .should("have.text", "AHF");
    });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })