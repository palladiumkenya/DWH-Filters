describe("DWHTest", function () {
  // test case
  it("Select NAIROBI county and validate its attribute", function () {
    cy.visit("https://dwh.nascop.org/#/");
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


  it("Select KASARANI sub-county and validate its attribute", function () {

    cy.get("#subCounty").click({ force: true });



    cy.xpath('//*[@id="subCounty"]/input').click({

      force: true,

      multiple: true,

    });



    //selects KASARANI



    cy.xpath('//*[@id="subCounty"]/div[2]/div[9]/span').click({

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


  it("Select Kasarani Health Centre facility and validate its attribute", function () {
    cy.get("#facility").click({ force: true });
   
    cy.xpath('//*[@id="facility"]/input').click({ force: true, multiple: true });

    //selects Kasarani Health Centre
    cy.xpath('//*[@id="facility"]/div[2]/div[3]/span').click({
      force: true,
      multiple: true,
    });


    cy.xpath('//*[@id="facility"]/a').eq(1).should('have.text','Kasarani Health Centre');

    //remove Kasarani Health Centre
    //cy.xpath('//*[@id="facility"]/a/i').click({force:true,multiple:true})

    // cy.get('#facility > a').type("Kasarani Health Centre")
    // asserting the option selected
    // .should("have.text", "Kasarani Health Centre");
  });

  it("Select USAID Fahari ya Jamii partner and validate its attribute", function () {
    cy.get("#partner").click({ force: true });
   
    cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });

    //selects USAID Fahari ya Jamii
    cy.xpath('//*[@id="partner"]/div[2]/div[3]/span').click({
      force: true,
      multiple: true,
    });


    cy.xpath('//*[@id="partner"]/a').eq(1).should('have.text','USAID Fahari ya Jamii');

    //remove USAID Fahari ya Jamii
    //cy.xpath('//*[@id="facility"]/a/i').click({force:true,multiple:true})

    // cy.get('#partner > a').type("USAID Fahari ya Jamii")
    // asserting the option selected
    // .should("have.text", "USAID Fahari ya Jamii");
  });

  it("Select AHF agency and validate its attribute", function () {
    cy.get("#agency").click({ force: true });
   
    cy.xpath('//*[@id="agency"]/input').click({ force: true, multiple: true });

    //selects CDC
    cy.xpath('//*[@id="agency"]/div[2]/div[1]').click({
      force: true,
      multiple: true,
    });


    cy.xpath('//*[@id="agency"]/a').eq(1).should('have.text','AHF');

    //remove AHF
    //cy.xpath('//*[@id="agency"]/a/i').click({force:true,multiple:true})

    // cy.get('#agency > a').type("AHF")
    // asserting the option selected
    // .should("have.text", "AHF");
  });

  it("Select Female gender and validate its attribute", function () {
    cy.get("#gender").click({ force: true });
   
    cy.xpath('//*[@id="gender"]/input').click({ force: true, multiple: true });

    //selects CDC
    cy.xpath('//*[@id="gender"]/div[2]/div[2]').click({
      force: true,
      multiple: true,
    });


    cy.xpath('//*[@id="gender"]/a').eq(1).should('have.text','Female');

    //remove Female
    //cy.xpath('//*[@id="gender"]/a/i').click({force:true,multiple:true})

    // cy.get('#gender > a').type("Female")
    // asserting the option selected
    // .should("have.text", "Female");
  });

  it("Select 20-24 age group and validate its attribute", function () {



    cy.get("#datimAgeGroup").click({ force: true });



   



    cy.xpath('//*[@id="datimAgeGroup"]/input').click({ force: true, multiple: true });





    //selects CDC



    cy.xpath('//*[@id="datimAgeGroup"]/div[2]/div[6]').click({



      force: true,



      multiple: true,



    });






    cy.xpath('//*[@id="datimAgeGroup"]/a').eq(1).should('have.text','20 to 24');





    //remove 20-24



    //cy.xpath('//*[@id="datimAgeGroup"]/a/i').click({force:true,multiple:true})





    // cy.get('#datimAgeGroup > a').type(20-24)



    // asserting the option selected



    // .should("have.text", 20-24);

});
});

