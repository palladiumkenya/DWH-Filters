describe("AdverseEvents", function () {
    // test case
    it("Select NAIROBI county and validate its attribute", function () {
      cy.visit("https://dwh.nascop.org/#/hiv-treatment/adverseEvent/adults");
      cy.get("#county").click({ force: true });
  
      cy.xpath('//*[@id="county"]/input').click({ force: true, multiple: true });
  
      //selects NAIROBI
      cy.xpath('//*[@id="county"]/div[2]/div[29]/span').click({
        force: true,
        multiple: true,
      });
       
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
  
      
    });

});