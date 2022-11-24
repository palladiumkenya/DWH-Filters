

describe("DWHCT", function () {
  let linkageByCountySql = 'SELECT ' +
  'County AS County, ' +
  'SUM(CASE WHEN Positive IS NULL THEN 0 ELSE Positive END) positive, ' +
  'SUM(CASE WHEN Linked IS NULL THEN 0 ELSE Linked END) linked, ' +
  '((SUM(CASE WHEN Linked IS NULL THEN 0 ELSE Linked END)/SUM(positive))*100) AS linkage ' +
  'FROM fact_htsuptake ' +
  'WHERE County IS NOT NULL AND positive > 0 ';
  let year='2022';
  let month='10';
  let linkageBySexSql = 'SELECT Gender gender, ' +
            'SUM(Tested) tested, ' +
            'SUM(CASE WHEN positive IS NULL THEN 0 ELSE positive END) positive, ' +
            '((SUM(CASE WHEN positive IS NULL THEN 0 ELSE positive END)/SUM(Tested))*100) AS positivity, ' +
            'SUM(CASE WHEN linked IS NULL THEN 0 ELSE linked END) linked, ' +
            '((SUM(CASE WHEN linked IS NULL THEN 0 ELSE linked END)/SUM(positive))*100) AS linkage ' +
            'FROM fact_hts_agegender WHERE positive > 0 '

    // test case
    it("Select NAIROBI county and validate its model", function () {
     
      cy.visit("https://dwh.nascop.org/#/hiv-testing/linkage");
      
      cy.get("#county").click({ force: true });
  
      cy.xpath('//*[@id="county"]/input').click({ force: true, multiple: true });
  
      //selects NAIROBI
      cy.xpath('//*[@id="county"]/div[2]/div[29]/span').click({
        force: true,
        multiple: true,
      });
       
      let county='NAIROBI'
      let query=  `${linkageByCountySql} and County in("NAIROBI") and year in (${year}) and month in (${month})`;
  
      cy.xpath('//*[@id="county"]/a').eq(1).should('have.text','NAIROBI');
      cy.task("queryDb",query).then((res)=>{
        cy.log(res);
        cy.get(':nth-child(1) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').
        should("have.text",res[0].positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') );

        cy.get(':nth-child(2) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').
        should("have.text",res[0].linked.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      });
    let query2=`${linkageBySexSql} and County in ("NAIROBI") and year in (${year}) and month in (${month}) group by gender`
      cy.task("queryDb",query2).then((res)=>{
        cy.log(res);
        cy.get(':nth-child(3) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').
        should("have.text",res[0].positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        cy.get('.overall-rates-figure').should('have.text',res[0].linked.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        cy.get(':nth-child(1) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').
        should("have.text",res[1].positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        cy.get(':nth-child(2) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').
        should("have.text",res[1].linked.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      })
    });
    it("Select DAGORETTI sub-county and validate model ", function () {
        cy.get("#subCounty").click({ force: true });
      
        cy.xpath('//*[@id="subCounty"]/input').click({force: true,multiple: true,});
        //selects KISUMU CENTRAL
      
      
        //cy.get(':nth-child(4) > :nth-child(1) > .form-group > #sub-county').should('include.text', 'Kasarani');
    
      cy.xpath('//*[@id="subCounty"]/div[2]/div[1]/span').click({
        force:true,
        multiple:true,
      })
    
      cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI NORTH");
      let query=  `${linkageByCountySql} and County in("NAIROBI") and SubCounty in ('DAGORETTI NORTH') and year in (${year}) and month in (${month})`;
  
    
      cy.task("queryDb",query).then((res)=>{
        cy.log(res);
        cy.get(':nth-child(1) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').
        should("have.text",res[0].positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') );

        cy.get(':nth-child(2) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').
        should("have.text",res[0].linked.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      });
    let query2=`${linkageBySexSql} and County in ("NAIROBI") and SubCounty in ('DAGORETTI NORTH')and year in (${year}) and month in (${month}) group by gender order by gender asc`
      cy.task("queryDb",query2).then((res)=>{
        cy.log(res);
        cy.get(':nth-child(3) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').
        should("have.text",res[0].positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        cy.get('.overall-rates-figure').should('have.text',res[0].linked.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        cy.get(':nth-child(1) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').
        should("have.text",res[1].positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        cy.get(':nth-child(2) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').
        should("have.text",res[1].linked.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      })
    });
  
    it("Select Riruta Health Centre facility and validate Model ", function () {
        cy.get("#facility").click({ force: true });
       
        cy.xpath('//*[@id="facility"]/input').click({ force: true, multiple: true });
        cy.xpath('//*[@id="facility"]/div[2]/div[6]/span').click({
          force:true,
          multiple:true,
        })
        cy.xpath('//*[@id="subCounty"]/a').eq(1).should("have.text", "DAGORETTI NORTH");
      let query=  `${linkageByCountySql} and County in("NAIROBI") and SubCounty in ('DAGORETTI NORTH')  and FacilityName  in ('Riruta Health Centre') and year in (${year}) and month in (${month})`;
  
    
      cy.task("queryDb",query).then((res)=>{
        cy.log(res);
        cy.get(':nth-child(1) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').
        should("have.text",res[0].positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') );

        cy.get(':nth-child(2) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').
        should("have.text",res[0].linked.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      });
    let query2=`${linkageBySexSql} and County in ("NAIROBI") and SubCounty in ('DAGORETTI NORTH')and year in (${year})  and month in (${month}) and FacilityName  in ('Riruta Health Centre') group by gender order by gender asc`
      cy.task("queryDb",query2).then((res)=>{
        cy.log(res);
        cy.get(':nth-child(3) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').
        should("have.text",res[0].positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        cy.get('.overall-rates-figure').should('have.text',res[0].linked.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        cy.get(':nth-child(1) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').
        should("have.text",res[1].positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        cy.get(':nth-child(2) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').
        should("have.text",res[1].linked.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      })
       
    });

       
    it("Select CIHEB CONNECT partner and validate Model", function () {
      cy.get("#partner").click({ force: true });
     
      cy.xpath('//*[@id="partner"]/input').click({ force: true, multiple: true });
  
      //selects CIHEB CONNECT
      //cy.get('.visible > :nth-child(5) > .text').click({
        //force:true,
       // multiple:true
      //});
       cy.xpath('//*[@id="partner"]/div[2]/div[1]/span').click({
       force: true,
       multiple: true,
       });
       let query=  `${linkageByCountySql} and County in("NAIROBI") and SubCounty in ('DAGORETTI NORTH')  and FacilityName  in ('Riruta Health Centre') and CTPartner in ('CIHEB CONNECT') and year in (${year}) and month in (${month})`;
  
    
       cy.task("queryDb",query).then((res)=>{
         cy.log(res);
         cy.get(':nth-child(1) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').
         should("have.text",res[0].positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') );
 
         cy.get(':nth-child(2) > :nth-child(1) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').
         should("have.text",res[0].linked.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
       });
     let query2=`${linkageBySexSql} and County in ("NAIROBI") and SubCounty in ('DAGORETTI NORTH')and year in (${year})  and month in (${month})  and CTPartner in ('CIHEB CONNECT') and FacilityName  in ('Riruta Health Centre') group by gender order by gender asc`
       cy.task("queryDb",query2).then((res)=>{
         cy.log(res);
         cy.get(':nth-child(3) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').
         should("have.text",res[0].positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
         cy.get('.overall-rates-figure').should('have.text',res[0].linked.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
         cy.get(':nth-child(1) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').
         should("have.text",res[1].positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
         cy.get(':nth-child(2) > :nth-child(2) > .card-uploads-consistency-rates > .align-items-center > .col-12 > .expected-uploads-text').
         should("have.text",res[1].linked.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
       })
  
  
      cy.xpath('//*[@id="partner"]/a').should('include.text','CIHEB CONNECT' );
  

    });
  
   

   
   
    })