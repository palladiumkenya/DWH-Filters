describe("DWHTest", function () {
  // test case
  it("Test Case2", function () {
    cy.visit("https://data.kenyahmis.org:9000/#/");

    // checking by values
    cy.get('input[type="checkbox"]').check([
      "Manual Tester",
      "Automation Tester",
    ]);
    // selecting a value from static dropdown
    cy.get('select[name="County"]')
      .select("Nairobi")
      // asserting the option selected
      .should("have.text", "Nairobi");
  });
});
