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
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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


  describe("DWHCT1", function () {
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
  
      it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
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
    });
  
  
    it("Select Aids Healthcare Foundation partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','Aids Healthcare Foundation' );
  
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
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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


  describe("DWHCT2", function () {
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
  
      it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
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
    });
  
  
    it("Select Aids Healthcare Foundation partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','Aids Healthcare Foundation' );
  
      //remove USAID Fahari ya Jamii
      //cy.xpath('//*[@id="facility"]/a/i').click({force:true,multiple:true})
  
      // cy.get('#partner > a').type("USAID Fahari ya Jamii")
      // asserting the option selected
      // .should("have.text", "USAID Fahari ya Jamii");
    });
  
    it("Select CDC agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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

  describe("DWHCT3", function () {
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
  
      it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
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
    });
  
  
    it("Select Aids Healthcare Foundation partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','Aids Healthcare Foundation' );
  
      //remove USAID Fahari ya Jamii
      //cy.xpath('//*[@id="facility"]/a/i').click({force:true,multiple:true})
  
      // cy.get('#partner > a').type("USAID Fahari ya Jamii")
      // asserting the option selected
      // .should("have.text", "USAID Fahari ya Jamii");
    });
  
    it("Select DOD agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[3]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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

  describe("DWHCT4", function () {
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
  
      it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
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
    });
  
  
    it("Select Aids Healthcare Foundation partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','Aids Healthcare Foundation' );
  
      //remove USAID Fahari ya Jamii
      //cy.xpath('//*[@id="facility"]/a/i').click({force:true,multiple:true})
  
      // cy.get('#partner > a').type("USAID Fahari ya Jamii")
      // asserting the option selected
      // .should("have.text", "USAID Fahari ya Jamii");
    });
  
    it("Select Italian cooperation/PEPFAR agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[5]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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

  describe("DWHCT4", function () {
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
  
      it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
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
    });
  
  
    it("Select Aids Healthcare Foundation partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','Aids Healthcare Foundation' );
  
      //remove USAID Fahari ya Jamii
      //cy.xpath('//*[@id="facility"]/a/i').click({force:true,multiple:true})
  
      // cy.get('#partner > a').type("USAID Fahari ya Jamii")
      // asserting the option selected
      // .should("have.text", "USAID Fahari ya Jamii");
    });
  
    it("Select USAID agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[7]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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

  describe("DWHCT5", function () {
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
  
      it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
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
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[2]/span').click({
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
  
    it("Select AHF agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[1]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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


  describe("DWHCT6", function () {
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
  
      it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
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
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[2]/span').click({
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
  
    it("Select CDC agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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

  describe("DWHCT7", function () {
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
  
      it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
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
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[2]/span').click({
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
  
    it("Select DOD agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[3]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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

  describe("DWHCT8", function () {
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
  
      it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
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
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[2]/span').click({
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
  
    it("Select Global Fund agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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

  describe("DWHCT9", function () {
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
  
      it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
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
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[2]/span').click({
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
  
    it("Select Italian cooperation/PEPFAR agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[5]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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
  
  describe("DWHCT10", function () {
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
  
      it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
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
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[2]/span').click({
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
  
    it("Select USAID agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[7]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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

  describe("DWHCT11", function () {
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
  
      it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
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
    });
  
  
    it("Select Coptic Hospitals partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[3]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','Coptic Hospitals' );
  
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
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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

  describe("DWHCT12", function () {
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
  
      it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
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
    });
  
  
    it("Select Coptic Hospitals partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[3]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','Coptic Hospitals' );
  
      //remove USAID Fahari ya Jamii
      //cy.xpath('//*[@id="facility"]/a/i').click({force:true,multiple:true})
  
      // cy.get('#partner > a').type("USAID Fahari ya Jamii")
      // asserting the option selected
      // .should("have.text", "USAID Fahari ya Jamii");
    });
  
    it("Select CDC agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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

  describe("DWHCT13", function () {
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
  
      it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
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
    });
  
  
    it("Select Coptic Hospitals partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[3]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','Coptic Hospitals' );
  
      //remove USAID Fahari ya Jamii
      //cy.xpath('//*[@id="facility"]/a/i').click({force:true,multiple:true})
  
      // cy.get('#partner > a').type("USAID Fahari ya Jamii")
      // asserting the option selected
      // .should("have.text", "USAID Fahari ya Jamii");
    });
  
    it("Select DOD agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[3]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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

  describe("DWHCT14", function () {
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
  
      it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
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
    });
  
  
    it("Select Coptic Hospitals partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[3]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','Coptic Hospitals' );
  
      //remove USAID Fahari ya Jamii
      //cy.xpath('//*[@id="facility"]/a/i').click({force:true,multiple:true})
  
      // cy.get('#partner > a').type("USAID Fahari ya Jamii")
      // asserting the option selected
      // .should("have.text", "USAID Fahari ya Jamii");
    });
  
    it("Select Global Fund agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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

  describe("DWHCT15", function () {
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
  
      it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
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
    });
  
  
    it("Select Coptic Hospitals partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[3]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','Coptic Hospitals' );
  
      //remove USAID Fahari ya Jamii
      //cy.xpath('//*[@id="facility"]/a/i').click({force:true,multiple:true})
  
      // cy.get('#partner > a').type("USAID Fahari ya Jamii")
      // asserting the option selected
      // .should("have.text", "USAID Fahari ya Jamii");
    });
  
    it("Select Italian cooperation/PEPFAR agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[5]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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

  describe("DWHCT16", function () {
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
  
      it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
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
    });
  
  
    it("Select Coptic Hospitals partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[3]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','Coptic Hospitals' );
  
      //remove USAID Fahari ya Jamii
      //cy.xpath('//*[@id="facility"]/a/i').click({force:true,multiple:true})
  
      // cy.get('#partner > a').type("USAID Fahari ya Jamii")
      // asserting the option selected
      // .should("have.text", "USAID Fahari ya Jamii");
    });
  
    it("Select USAID agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[7]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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

  describe("DWHCT17", function () {
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
  
      it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
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
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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

  describe("DWHCT18", function () {
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
  
      it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
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
  
    it("Select CDC agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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

  describe("DWHCT19", function () {
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
  
      it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
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
  
    it("Select DOD agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[3]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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

  describe("DWHCT20", function () {
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
  
      it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
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
  
    it("Select Global Fund agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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

  describe("DWHCT21", function () {
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
  
      it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
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
  
    it("Select Italian cooperation/PEPFAR agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[5]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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

  describe("DWHCT22", function () {
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
  
      it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
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
  
    it("Select USAID agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[7]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })
  

  describe("DWHCT23", function () {
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
  
      it("Select DAGORETTI SOUTH sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
        //selects KASARANI
      
      
        //cy.get(':nth-child(4) > :nth-child(1) > .form-group > #sub-county').should('include.text', 'Kasarani');
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI SOUTH");
      //remove KASARANI
      //cy.xpath('//*[@id="sub-county"]/a/i').click({force:true,multiple:true})
      // cy.get('#sub-county > a').type("Kasarani")
      // asserting the option selected
      // .should("have.text", "Kasarani");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
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
  
    it("Select AHF agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[1]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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

  describe("DWHCT24", function () {
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
  
      it("Select DAGORETTI SOUTH sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
        //selects KASARANI
      
      
        //cy.get(':nth-child(4) > :nth-child(1) > .form-group > #sub-county').should('include.text', 'Kasarani');
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI SOUTH");
      //remove KASARANI
      //cy.xpath('//*[@id="sub-county"]/a/i').click({force:true,multiple:true})
      // cy.get('#sub-county > a').type("Kasarani")
      // asserting the option selected
      // .should("have.text", "Kasarani");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
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
  
    it("Select CDC agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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

  describe("DWHCT25", function () {
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
  
      it("Select DAGORETTI SOUTH sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
        //selects KASARANI
      
      
        //cy.get(':nth-child(4) > :nth-child(1) > .form-group > #sub-county').should('include.text', 'Kasarani');
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI SOUTH");
      //remove KASARANI
      //cy.xpath('//*[@id="sub-county"]/a/i').click({force:true,multiple:true})
      // cy.get('#sub-county > a').type("Kasarani")
      // asserting the option selected
      // .should("have.text", "Kasarani");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
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
  
    it("Select DOD agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[3]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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

  describe("DWHCT26", function () {
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
  
      it("Select DAGORETTI SOUTH sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
        //selects KASARANI
      
      
        //cy.get(':nth-child(4) > :nth-child(1) > .form-group > #sub-county').should('include.text', 'Kasarani');
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI SOUTH");
      //remove KASARANI
      //cy.xpath('//*[@id="sub-county"]/a/i').click({force:true,multiple:true})
      // cy.get('#sub-county > a').type("Kasarani")
      // asserting the option selected
      // .should("have.text", "Kasarani");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects USAID Fahari ya Jamii
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
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
  
    it("Select Global Fund agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  

    // it("Select 'period' and validate its attribute", function () {
        //cy.get("#period").click({ force: true });

        //cy.xpath('//*[@id="period"]/input').click({ force: true, multiple: true });

        //selects period
        //cy.xpath('//*[@id="period"]/div[3]/div[5]/span').click({
        //force: true,
       // multiple: true,
   // });

   //cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
    //elem.val('Jun 2022 - Jun 2022')

  //})
    
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

  describe("DWHCT27", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
  
    });
  
      it("Select DAGORETTI SOUTH sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI SOUTH");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB CONNECT' );
  
    });
  
    it("Select Italian cooperation/PEPFAR agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[5]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
  
    
    })
     
    });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT28", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
  
    });
  
  
      it("Select DAGORETTI SOUTH sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI SOUTH");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB CONNECT' );
  
    });
  
    it("Select USAID agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      cy.xpath('//*[@id="agency"]/div[2]/div[7]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
    
    });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT29", function () {
    // test case
    it("Select NAIROBI county and validate its attribute", function () {
      cy.visit("https://dwh.nascop.org/#/reporting-rates/ct");
      cy.get("#county").click({ force: true });
  
      cy.xpath('//*[@id="county"]/input').click({ force: true, multiple: true });
  
      cy.xpath('//*[@id="county"]/div[2]/div[26]/span').click({
        force: true,
        multiple: true,
      });
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
  
    });
  
  
      it("Select DAGORETTI SOUTH sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI SOUTH");
    });
  
  
    it("Select COGRI partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });

       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','COGRI' );
    });
  
    it("Select AHF agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[1]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    })
    
    });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT30", function () {
    // test case
    it("Select NAIROBI county and validate its attribute", function () {
      cy.visit("https://dwh.nascop.org/#/reporting-rates/ct");
      cy.get("#county").click({ force: true });
  
      cy.xpath('//*[@id="county"]/input').click({ force: true, multiple: true });
  
      cy.xpath('//*[@id="county"]/div[2]/div[26]/span').click({
        force: true,
        multiple: true,
      });
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
  
    });
  
  
      it("Select DAGORETTI SOUTH sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI SOUTH");
    });
  
  
    it("Select COGRI partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });

       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','COGRI' );
    });
  
    it("Select CDC agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    })
    
    });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })


  describe("DWHCT31", function () {
    // test case
    it("Select NAIROBI county and validate its attribute", function () {
      cy.visit("https://dwh.nascop.org/#/reporting-rates/ct");
      cy.get("#county").click({ force: true });
  
      cy.xpath('//*[@id="county"]/input').click({ force: true, multiple: true });
  
      cy.xpath('//*[@id="county"]/div[2]/div[26]/span').click({
        force: true,
        multiple: true,
      });
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
  
    });
  
  
      it("Select DAGORETTI SOUTH sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI SOUTH");
    });
  
  
    it("Select COGRI partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });

       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','COGRI' );
    });
  
    it("Select DOD agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[3]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    })
    
    });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT32", function () {
    // test case
    it("Select NAIROBI county and validate its attribute", function () {
      cy.visit("https://dwh.nascop.org/#/reporting-rates/ct");
      cy.get("#county").click({ force: true });
  
      cy.xpath('//*[@id="county"]/input').click({ force: true, multiple: true });
  
      cy.xpath('//*[@id="county"]/div[2]/div[26]/span').click({
        force: true,
        multiple: true,
      });
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
  
    });
  
  
      it("Select DAGORETTI SOUTH sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI SOUTH");
    });
  
  
    it("Select COGRI partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });

       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','COGRI' );
    });
  
    it("Select Global Fund agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      cy.xpath('//*[@id="agency"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    })
    
    });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT33", function () {
    // test case
    it("Select NAIROBI county and validate its attribute", function () {
      cy.visit("https://dwh.nascop.org/#/reporting-rates/ct");
      cy.get("#county").click({ force: true });
  
      cy.xpath('//*[@id="county"]/input').click({ force: true, multiple: true });
  
      cy.xpath('//*[@id="county"]/div[2]/div[26]/span').click({
        force: true,
        multiple: true,
      });
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
  
    });
  
  
      it("Select DAGORETTI SOUTH sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI SOUTH");
    });
  
  
    it("Select COGRI partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });

       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','COGRI' );
    });
  
    it("Select Italian cooperation/PEPFAR agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[5]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    })
    
    });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })


  describe("DWHCT34", function () {
    // test case
    it("Select NAIROBI county and validate its attribute", function () {
      cy.visit("https://dwh.nascop.org/#/reporting-rates/ct");
      cy.get("#county").click({ force: true });
  
      cy.xpath('//*[@id="county"]/input').click({ force: true, multiple: true });
  
      cy.xpath('//*[@id="county"]/div[2]/div[26]/span').click({
        force: true,
        multiple: true,
      });
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
  
    });
  
  
      it("Select DAGORETTI SOUTH sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI SOUTH");
    });
  
  
    it("Select COGRI partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });

       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','COGRI' );
    });
  
    it("Select USAID agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[7]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    })
    
    });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })


  describe("DWHCT35", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select DAGORETTI SOUTH sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI NORTH");
    });
  
  
    it("Select USAID Fahari ya Jamii partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[3]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','USAID Fahari ya Jamii' );
  
    });
  
    it("Select AHF agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[1]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT35", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select DAGORETTI SOUTH sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI NORTH");
    });
  
  
    it("Select USAID Fahari ya Jamii partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[3]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','USAID Fahari ya Jamii' );
  
    });
  
    it("Select AHF agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[1]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT36", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select DAGORETTI SOUTH sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI NORTH");
    });
  
  
    it("Select USAID Fahari ya Jamii partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[3]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','USAID Fahari ya Jamii' );
  
    });
  
    it("Select CDC agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT37", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select DAGORETTI SOUTH sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI NORTH");
    });
  
  
    it("Select USAID Fahari ya Jamii partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[3]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','USAID Fahari ya Jamii' );
  
    });
  
    it("Select DOD agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[3]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT38", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select DAGORETTI SOUTH sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI NORTH");
    });
  
  
    it("Select USAID Fahari ya Jamii partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[3]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','USAID Fahari ya Jamii' );
  
    });
  
    it("Select Global Fund agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT39", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select DAGORETTI SOUTH sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI NORTH");
    });
  
  
    it("Select USAID Fahari ya Jamii partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[3]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','USAID Fahari ya Jamii' );
  
    });
  
    it("Select Italian cooperation/PEPFAR agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[5]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT40", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select DAGORETTI SOUTH sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI NORTH");
    });
  
  
    it("Select USAID Fahari ya Jamii partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[3]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','USAID Fahari ya Jamii' );
  
    });
  
    it("Select USAID agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[7]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT41", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[3]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB CONNECT' );
  
    });
  
    it("Select AHF agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[1]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })


  describe("DWHCT42", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[3]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB CONNECT' );
  
    });
  
    it("Select AHF agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[1]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })


  describe("DWHCT43", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[3]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB CONNECT' );
  
    });
  
    it("Select CDC agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT44", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[3]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB CONNECT' );
  
    });
  
    it("Select DOD agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[3]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT45", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[3]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB CONNECT' );
  
    });
  
    it("Select Global Fund agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT46", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[3]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB CONNECT' );
  
    });
  
    it("Select Italian cooperation/PEPFAR agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[5]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT47", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[3]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB CONNECT' );
  
    });
  
    it("Select USAID agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[7]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })


  describe("DWHCT48", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI CENTRAL sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EEMBAKASI CENTRAL");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB CONNECT' );
  
    });
  
    it("Select AHF agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[1]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })


  describe("DWHCT49", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI CENTRAL sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EEMBAKASI CENTRAL");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB CONNECT' );
  
    });
  
    it("Select CDC agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT50", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI CENTRAL sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI CENTRAL");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB CONNECT' );
  
    });
  
    it("Select DOD agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[3]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })


  describe("DWHCT51", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI CENTRAL sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI CENTRAL");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB CONNECT' );
  
    });
  
    it("Select Global Fund agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })


  describe("DWHCT52", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI CENTRAL sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI CENTRAL");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB CONNECT' );
  
    });
  
    it("Select Italian cooperation/PEPFAR agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[5]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT53", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI CENTRAL sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI CENTRAL");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB CONNECT' );
  
    });
  
    it("Select USAID agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[7]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT54", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI CENTRAL sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI CENTRAL");
    });
  
  
    it("Select Faith-Based Sites in the Eastern Slums of Nairobi partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[2]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','Faith-Based Sites in the Eastern Slums of Nairobi' );
  
    });
  
    it("Select AHF agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[1]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })
  
  describe("DWHCT55", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI CENTRAL sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI CENTRAL");
    });
  
  
    it("Select Faith-Based Sites in the Eastern Slums of Nairobi partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[2]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','Faith-Based Sites in the Eastern Slums of Nairobi' );
  
    });
  
    it("Select CDC agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT56", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI CENTRAL sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI CENTRAL");
    });
  
  
    it("Select Faith-Based Sites in the Eastern Slums of Nairobi partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[2]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB Faith-Based Sites in the Eastern Slums of Nairobi' );
  
    });
  
    it("Select DOD agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[3]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT57", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI CENTRAL sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI CENTRAL");
    });
  
  
    it("Select Faith-Based Sites in the Eastern Slums of Nairobi partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[2]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','Faith-Based Sites in the Eastern Slums of Nairobi' );
  
    });
  
    it("Select Global Fund agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT58", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI CENTRAL sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI CENTRAL");
    });
  
  
    it("Select Faith-Based Sites in the Eastern Slums of Nairobi partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[2]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','Faith-Based Sites in the Eastern Slums of Nairobi' );
  
    });
  
    it("Select Italian cooperation/PEPFAR agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[5]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })


  describe("DWHCT59", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI CENTRAL sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI CENTRAL");
    });
  
  
    it("Select Faith-Based Sites in the Eastern Slums of Nairobi partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[2]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','Faith-Based Sites in the Eastern Slums of Nairobi' );
  
    });
  
    it("Select USAID agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[7]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })


  describe("DWHCT60", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI CENTRAL sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI CENTRAL");
    });
  
  
    it("Select USAID Fahari ya Jamii partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[3]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','USAID Fahari ya Jamii' );
  
    });
  
    it("Select AHF agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[1]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT61", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI CENTRAL sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI CENTRAL");
    });
  
  
    it("Select USAID Fahari ya Jamii partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[3]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','USAID Fahari ya Jamii' );
  
    });
  
    it("Select CDC agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT62", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI CENTRAL sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI CENTRAL");
    });
  
  
    it("Select USAID Fahari ya Jamii partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[3]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','USAID Fahari ya Jamii' );
  
    });
  
    it("Select DOD agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[3]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT63", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI CENTRAL sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI CENTRAL");
    });
  
  
    it("Select USAID Fahari ya Jamii partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[3]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','USAID Fahari ya Jamii' );
  
    });
  
    it("Select Global Fund agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT64", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI CENTRAL sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI CENTRAL");
    });
  
  
    it("Select USAID Fahari ya Jamii partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[3]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','USAID Fahari ya Jamii' );
  
    });
  
    it("Select Italian cooperation/PEPFAR agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[5]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT65", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI CENTRAL sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI CENTRAL");
    });
  
  
    it("Select USAID Fahari ya Jamii partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[3]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','USAID Fahari ya Jamii' );
  
    });
  
    it("Select USAID agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[7]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT66", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI EAST sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[5]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI EAST");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB CONNECT' );
  
    });
  
    it("Select AHF agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[1]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT67", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI EAST sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[5]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI EAST");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB CONNECT' );
  
    });
  
    it("Select CDC agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[2]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT68", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI EAST sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[5]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI EAST");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB CONNECT' );
  
    });
  
    it("Select DOD agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[3]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT69", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI EAST sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[5]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI EAST");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB CONNECT' );
  
    });
  
    it("Select Global Fund agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[4]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  describe("DWHCT70", function () {
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
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
    });
  
      it("Select EMBAKASI EAST sub-county and validate its attribute", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
    
     
      cy.xpath('//*[@id="subCounty"]/div[2]/div[5]/span').click({
        force: true,
        multiple: true,
     });
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "EMBAKASI EAST");
    });
  
  
    it("Select CIHEB CONNECT partner and validate its attribute", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB CONNECT' );
  
    });
  
    it("Select Italian cooperation/PEPFAR agency and validate its attribute", function () {
      cy.get("#agency").click({ force: true });
     
      cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });
  
      //selects ahf
      cy.xpath('//*[@id="agency"]/div[2]/div[5]/span').click({
        force: true,
        multiple: true,
     });
     cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
   
      elem.val('Jun 2022 - Jun 2022')
    
    })
  });
  
    it("Input the reporting rate period", function(){
     // cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').click({force:true});
      cy.get(':nth-child(4) > :nth-child(5) > .form-group > .field > .ui > input').then(elem=>{
        elem.val('Jun 2022 - Jun 2022')
      })
      
    })
    
    
  })

  

