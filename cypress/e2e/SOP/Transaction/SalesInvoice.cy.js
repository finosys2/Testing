import { Login } from "../../Login.cy";

describe("Sales Invoice", () => {
    it("Sales Invoice CRUD", () => {
        Login();
        Save(); 
        View();
        Edit();
        Download();
        Search();
        Print();
        Delete();
        Post();
    });
});

export function Save() {
    cy.visit('https://apps.finosys-sbs.com/Sales/Transaction/SalesInvoice');
    cy.wait(1000);
    cy.fixture('SalesInvoice.json').then((payload) => {
            const Description = payload.validData.Description;
            const Freight_Cur = payload.validData.Freight_Cur;
            const Discount_Cur = payload.validData.Discount_Cur;
            const Packing_Quantity = payload.validData.Packing_Quantity;
            const Quantity = payload.validData.Quantity;
            const Price = payload.validData.Price;

    cy.get('[aria-label="Add New"]').click();  
    cy.wait(1000); 
    //Customer lookup
    cy.get('.MuiGrid-grid-xs-true > :nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#SalesInvoice-cardInfo-option-0').click({force: true});
    cy.wait(1000);
    //location lookup
    cy.get('.MuiGrid-container > :nth-child(2) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#SalesInvoice-cardInfo-option-1').click({force: true});
    cy.wait(1000);
    cy.get('#Sales-CardInfo-Discount').type(Discount_Cur);
    cy.wait(1000);
    cy.get('#Sales-CardInfo-Freight').type(Freight_Cur);
    cy.wait(1000);
    cy.get('#Sales-CardInfo-Description').type(Description);
    cy.wait(1000);
    //Dispatch No lookup
    // cy.get('[style="color: inherit; width: 10%; max-width: 10%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit; text-align: center;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    // .click().get('#QTransNo-QTransNo-option-1').click({force: true});
    // cy.wait(1000);
    //Item lookup
    cy.get('[style="color: inherit; width: 25%; max-width: 25%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit; text-align: center;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#itemCode-paymentEntry-option-0').click({force: true});
    cy.wait(1000);
    cy.get('#mui-152').clear();
    cy.get('#mui-152').type(Packing_Quantity);
    cy.wait(1000);
    cy.get('#mui-153').clear();
    cy.get('#mui-153').type(Quantity);
    cy.wait(1000);
    cy.get('#mui-154').clear();
    cy.get('#mui-154').type(Price);
    cy.wait(1000);
    //save button
    cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click();
    cy.wait(1000);
    //back button
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click();   
})
}
export function View() {
    
}
export function Edit() {
    cy.fixture('SalesInvoice.json').then((payload) => {
        const Description = payload.validData.Description;
        const Freight_Cur = payload.validData.Freight_Cur;
        const Discount_Cur = payload.validData.Discount_Cur;

    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click();
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click();
    cy.wait(1000);
    cy.get('#Sales-CardInfo-Discount').clear();
    cy.get('#Sales-CardInfo-Discount').type(Discount_Cur);
    cy.wait(1000);
    cy.get('#Sales-CardInfo-Freight').clear();
    cy.get('#Sales-CardInfo-Freight').type(Freight_Cur);
    cy.wait(1000);
    y.get('#Sales-CardInfo-Description').clear();
    cy.get('#Sales-CardInfo-Description').type(Description);
    cy.wait(1000);
    //save button
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click();

})}
export function Download() {
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root')
    .click();
    cy.wait(1000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="0"]')
    .click();
    cy.wait(1000);
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root')
    .click();
    cy.wait(1000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="-1"]')
    .click();
}
export function Search() {
    cy.get('#TransNo').type('SI-000011')
    cy.wait(1000);
    cy.get('#TransNo').clear()
    cy.get('#Customer').type('Test Customer')
    cy.wait(1000);
    cy.get('#Customer').clear()
}
export function Print() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click();
    cy.wait(1000);
    cy.get('.MuiList-root > :nth-child(4)').click();
}
export function Delete() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click();
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click();
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click();
    cy.wait(1000);
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click();
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click();
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click();

}
export function Post() {
    cy.get('[index="3"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click();
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click();
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click();
    cy.wait(1000);
    cy.get('[index="3"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click();
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click();
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click();
}