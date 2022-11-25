describe("DWHCT", function () {
  // test case
  it("Select NAIROBI county and validate its attribute", function () {
    cy.visit("https://dwh.nascop.org/#/hiv-treatment/ovc/distributionOfOvcClients");
    cy.get("#county").click({ force: true });

    cy.xpath('//*[@id="county"]/input').click({ force: true, multiple: true });

    //selects NAIROBI
    cy.xpath('//*[@id="county"]/div[2]/div[25]/span').click({
      force: true,
      multiple: true,
    });

    cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
  });

    it("Select DAGORETTI NORTH sub-county and validate its attribute", function () {
      cy.get("#subCounty").click({ force: true });
    
      cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
  
   
    cy.xpath('//*[@id="subCounty"]/div[2]/div[1]/span').click({
      force: true,
      multiple: true,
   });
    cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI NORTH");
  });

  it("Select Riruta Health Centre facility and validate its attribute", function () {
      cy.get("#facility").click({ force: true });
     
      cy.xpath('//*[@id="facility"]/input').click({ force: true, multiple: true });
  
       cy.xpath('//*[@id="facility"]/div[2]/div[6]/span').click({
       force: true,
       multiple: true,
       });
  
  
      cy.xpath('//*[@id="facility"]/a').should('include.text','Riruta Health Centre' );

  });
  it("Select CIHEB CONNECT partner and validate its attribute", function () {
    cy.get("#partner").click({ force: true });
   
    cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
     cy.xpath('//*[@id="partner"]/div[2]/div[2]/span').click({
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
   cy.xpath('//*[@id="agency"]/a').should('include.text','AHF' );
 
});

  it("Select Female gender and validate its attribute", function () {
      cy.get("#gender").click({ force: true });
  
      cy.xpath('//*[@id="gender"]/input').click({ force: true, multiple: true });
  
      //selects CDC
      cy.xpath('//*[@id="gender"]/div[2]/div[2]').click({
        force: true,
        multiple: true,
      });
  
      cy.xpath('//*[@id="gender"]/a').eq(1).should("have.text", "Female");
  
  });

  it("Select 20-24 age group and validate its attribute", function () {
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
  
     
    });

    
})