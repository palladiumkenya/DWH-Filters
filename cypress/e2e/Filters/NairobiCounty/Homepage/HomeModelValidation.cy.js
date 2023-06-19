describe("Model Validation of the Home Page", function(){
    const dwnascop_url = "https://dwh.nascop.org/#/";
    it("Select SIAYA county and validate the model ", function () {
        cy.visit(dwnascop_url);
        cy.wait(2000);
        cy.get("#county").click({ force: true });
    
        cy.xpath('//*[@id="county"]/input').click({ force: true, multiple: true });

        cy.xpath('//*[@id="county"]/div[2]/div[37]/span').click({
            force: true,
            multiple: true,
          });
    })
      it("Validate the Current on ART from the model", function () {
        //cy.visit(dwnascop_url);
        cy.sqlServer(
          `select SUM(f.[ISTxCurr]) from Linelist_FACTART f where f.ISTxCurr >0 and County='SIAYA'`
        ).then((result) => {
          cy.log(result);
          
          cy.get(':nth-child(5) > :nth-child(1) > .primary-card > .primary-card-body > .primary-card-body-text')
          .should('have.text',result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
         /* cy.xpath(
            '//*[@id="root"]/div/div[2]/main/div[2]/div/div[5]/div[1]/div/div/p'
          ).should("have.text", result); */
        }); 
        //.should("eq", "1089199");
      });
    
      it("Validate the Eligible of VL from the model", function () {
        cy.sqlServer(
          `select  SUM([Eligible4VL]) from Linelist_FACTART where ISTxCurr > 0 and County='SIAYA'`
        ).then((result) => {
          cy.log(result);
          cy.get(':nth-child(2) > .primary-card > .primary-card-body > .primary-card-body-text')
          .should("have.text",result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
          /*cy.xpath(
            '//*[@id="root"]/div/div[2]/main/div[2]/div/div[5]/div[2]/div/div/p'
          ).should("have.text", result); */
        });
        //.should("eq", "1089199");
      });
    
      it("Validate the VALID viralload from the model", function () {
        cy.sqlServer(`select   SUM([Last12MonthVL]) from Linelist_FACTART where   ISTxCurr > 0 and  County='SIAYA'`).then(
          (result) => {
            cy.log(result);
            cy.get(':nth-child(3) > .primary-card > .primary-card-body > .primary-card-body-text')
            .should("have.text", result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
          
            /*cy.xpath(
              '//*[@id="root"]/div/div[2]/main/div[2]/div/div[5]/div[3]/div/div/p'
            ).should("have.text", result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')); */
          }
        );
        //.should("eq", "1089199");
      });
    
    
    
    
    
      it("Validate the VALID virally suppressed from the model", function () {
        cy.sqlServer(`select  SUM([Last12MVLSup]) from Linelist_FACTART where   ISTxCurr > 0 and  County='SIAYA'`).then(
          (result) => {
            cy.log(result);
           
            cy.get(':nth-child(4) > .primary-card > .primary-card-body > .primary-card-body-text')
            .should("have.text", result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
          
            /*cy.xpath(
              '//*[@id="root"]/div/div[2]/main/div[2]/div/div[5]/div[3]/div/div/p'
            ).should("have.text", result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')); */
          }
        );
        //.should("eq", "1089199");
      });
    
    
      it("Validate the Adults on ART from the model",function(){
        cy.sqlServer(`select SUM(f.[ISTxCurr]) from Linelist_FACTART f where f.ISTxCurr >0 and f.[age] >= 15 and County='SIAYA'`).then(
          (result) => {
            cy.log(result);
           
            cy.get(':nth-child(1) > .col > .primary-card > .primary-card-body > .primary-card-body-text')
            .should("have.text", result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
          
            
          }
        );
      })
    
      it("Validate the Children on ART from the model",function(){
        cy.sqlServer(`select SUM(f.[ISTxCurr]) from Linelist_FACTART f where f.ISTxCurr >0 and f.[age] < 15 and County='SIAYA'`).then(
          (result) => {
            cy.log(result);
           
            cy.get(':nth-child(2) > .col > .primary-card > .primary-card-body > .primary-card-body-text')
            .should("have.text", result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
          
            
          }
        );
      })
    
      it("Validate the Adolescents on ART from the model",function(){
        cy.sqlServer(`select SUM(f.[ISTxCurr]) from Linelist_FACTART f where f.ISTxCurr >0 and f.[age] between 10 and 19 and County='SIAYA'`).then(
          (result) => {
            cy.log(result);
           
            cy.get(':nth-child(3) > .col > .primary-card > .primary-card-body > .primary-card-body-text')
            .should("have.text", result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
          
            
          }
        );
      })

      it("Select BONDO sub-county and validate the model ", function () {
        cy.get("#subCounty").click({ force: true });
    
        cy.xpath('//*[@id="subCounty"]/input').click({
          force: true,
    
          multiple: true,
        });
    
        //selects KASARANI
    
        cy.xpath('//*[@id="subCounty"]/div[2]/div[2]/span').click({
          force: true,
    
          multiple: true,
        });
    
     
    
      
      });

      it("Validate the Current on ART from the model based on the SubCounty(Bondo)", function () {
        //cy.visit(dwnascop_url);
        cy.sqlServer(
          `select SUM(f.[ISTxCurr]) from Linelist_FACTART f where f.ISTxCurr >0 and Subcounty='BONDO'`
        ).then((result) => {
          cy.log(result);
          
          cy.get(':nth-child(5) > :nth-child(1) > .primary-card > .primary-card-body > .primary-card-body-text')
          .should('have.text',result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
         /* cy.xpath(
            '//*[@id="root"]/div/div[2]/main/div[2]/div/div[5]/div[1]/div/div/p'
          ).should("have.text", result); */
        }); 
        //.should("eq", "1089199");
      });
    
      it("Validate the Eligible of VL from the model based on the SubCounty(Bondo)", function () {
        cy.sqlServer(
          `select  SUM([Eligible4VL]) from Linelist_FACTART where ISTxCurr > 1 and Subcounty='BONDO'`
        ).then((result) => {
          cy.log(result);
          cy.get(':nth-child(2) > .primary-card > .primary-card-body > .primary-card-body-text')
          .should("have.text",result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
          /*cy.xpath(
            '//*[@id="root"]/div/div[2]/main/div[2]/div/div[5]/div[2]/div/div/p'
          ).should("have.text", result); */
        });
        //.should("eq", "1089199");
      });
    
      it("Validate the VALID viralload from the model based on SubCounty(BONDO)", function () {
        cy.sqlServer(`select   SUM([Last12MonthVL]) from Linelist_FACTART where   ISTxCurr > 0 where  Subcounty='BONDO'`).then(
          (result) => {
            cy.log(result);
            cy.get(':nth-child(3) > .primary-card > .primary-card-body > .primary-card-body-text')
            .should("have.text", result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
          
            /*cy.xpath(
              '//*[@id="root"]/div/div[2]/main/div[2]/div/div[5]/div[3]/div/div/p'
            ).should("have.text", result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')); */
          }
        );
        //.should("eq", "1089199");
      });
    
    
    
    
    
      it("Validate the VALID virally suppressed from the model based on SubCounty(Bondo)", function () {
        cy.sqlServer(`select  SUM([Last12MVLSup]) from Linelist_FACTART where   ISTxCurr > 0 and  Subcounty='BONDO'`).then(
          (result) => {
            cy.log(result);
           
            cy.get(':nth-child(4) > .primary-card > .primary-card-body > .primary-card-body-text')
            .should("have.text", result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
          
            /*cy.xpath(
              '//*[@id="root"]/div/div[2]/main/div[2]/div/div[5]/div[3]/div/div/p'
            ).should("have.text", result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')); */
          }
        );
        //.should("eq", "1089199");
      });
    
    
      it("Validate the Adults on ART from the model based on SubCounty(Bondo)",function(){
        cy.sqlServer(`select SUM(f.[ISTxCurr]) from Linelist_FACTART f where f.ISTxCurr >0 and f.[age] >= 15  and Subcounty='BONDO'`).then(
          (result) => {
            cy.log(result);
           
            cy.get(':nth-child(1) > .col > .primary-card > .primary-card-body > .primary-card-body-text')
            .should("have.text", result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
          
            
          }
        );
      })
    
      it("Validate the Children on ART from the model based on SubCounty(Bondo)",function(){
        cy.sqlServer(`select SUM(f.[ISTxCurr]) from Linelist_FACTART f where f.ISTxCurr >0 and f.[age] < 15 and Subcounty='BONDO'`).then(
          (result) => {
            cy.log(result);
           
            cy.get(':nth-child(2) > .col > .primary-card > .primary-card-body > .primary-card-body-text')
            .should("have.text", result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
          
            
          }
        );
      })
    
      it("Validate the Adolescents on ART from the model based on SubCounty(Bondo)",function(){
        cy.sqlServer(`select SUM(f.[ISTxCurr]) from Linelist_FACTART f where f.ISTxCurr >0 and f.[age] between 10 and 19 and Subcounty='BONDO'`).then(
          (result) => {
            cy.log(result);
           
            cy.get(':nth-child(3) > .col > .primary-card > .primary-card-body > .primary-card-body-text')
            .should("have.text", result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
          
            
          }
        );
      })

})