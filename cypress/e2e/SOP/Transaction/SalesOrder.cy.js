import { Login } from "../../Login.cy";

describe("Sale Order", () => {
    it("Sale Order CRUD", () => {
        Login();
        Save();  
    });
});

export function Save() {
    //cy.visit('https://apps.finosys-sbs.com/Sales/Transaction/SalesOrder')
    cy.visit('https://apps.finosys-sbs.com/Sales/Transaction/SalesOrder')
    cy.wait(1000);
    cy.fixture('SalesOrder.json').then((payload) => {
        const Description = payload.validData.Description;
        const Freight_Cur = payload.validData.Freight_Cur;
        const Discount_Cur = payload.validData.Discount_Cur;
        const Packing_Quantity = payload.validData.Packing_Quantity;
        const Quantity = payload.validData.Quantity;
    
    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    //Customer lookup
    cy.get('.MuiGrid-grid-xs-true > :nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#SalesQuote-cardInfo-option-0').click({force: true})
    cy.wait(1000);
    //location lookup
    cy.get('.MuiGrid-container > :nth-child(2) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#SalesQuote-cardInfo-option-0').click({force: true})
    cy.wait(1000);
    cy.get('#Sales-CardInfo-Description').type(Description)
    cy.wait(1000);
    cy.get('#Sales-CardInfo-Discount').type(Discount_Cur)
    cy.wait(1000);
    cy.get('#Sales-CardInfo-Freight').type(Freight_Cur)
    cy.wait(1000);
    //QuoteNo lookup
    cy.get('[style="color: inherit; width: 10%; max-width: 10%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit; text-align: center;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#QTransNo-QTransNo-option-1').click({force: true})
    cy.wait(1000);
    //Item lookup
    cy.get('[style="color: inherit; width: 25%; max-width: 25%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit; text-align: center;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#itemCode-paymentEntry-option-0').click({force: true})
    cy.wait(1000);
    cy.get('#mui-136').type(Packing_Quantity)
    cy.wait(1000);
    cy.get('#mui-137').type(Quantity)
    cy.wait(1000);
    //save button
    cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(1000);
    //back button
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()

})
}