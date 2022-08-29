describe("DWHTest", function () {
  // test case
  it("Select NAIROBI county and validate its attribute", function () {
    cy.visit("https://data.kenyahmis.org:9000/#/");
    cy.get("#county").click({ force: true });

    cy.xpath('//*[@id="county"]/input').click({ force: true, multiple: true });

    //selects NAIROBI
    cy.xpath('//*[@id="county"]/div[2]/div[25]/span').click({
      force: true,
      multiple: true,
    });


    cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');

    //remove Nairobi
    //cy.xpath('//*[@id="county"]/a/i').click({force:true,multiple:true})

    // cy.get('#county > a').type("Nairobi")
    // asserting the option selected
    // .should("have.text", "Nairobi");
  });
});
