import { Login } from "../../Login.cy";

describe("Sale Quotation", () => {
  it("Sale Quotation CRUD", () => {
    // cy.visit('http://localhost:1750')
    Login();
    Save();
    View();
    Edit();
    Download();
    Search();
    Post();
    Delete();
  });
});
export function Save() {
  //cy.visit('http://40.81.28.195:1110/Sales/Transaction/SalesQuotation')
  cy.visit('https://apps.finosys-sbs.com/Sales/Transaction/SalesQuotation')
  cy.wait(1000);
  cy.fixture('SalesQuotation.json').then((payload) => {
    console.log({ payload: payload.validData })
    const Discount_Cur = payload.validData.Discount_Cur
    const Freight_Cur = payload.validData.Freight_Cur
    const Description = payload.validData.Description
    const Packing_Quantity = payload.validData.Packing_Quantity
    const Quantity = payload.validData.Quantity
    const Price = payload.validData.Price
    
   cy.get('[aria-label="Add New"]').click()
   cy.wait(1000);
    //Customer lookup
   cy.get('.MuiGrid-grid-xs-true > :nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
      .click().get('#SalesQuote-cardInfo-option-0').click({ force: true })
    cy.wait(1000);
    //location lookup
    cy.get('.MuiGrid-container > :nth-child(2) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
      .click().get('#SalesQuote-cardInfo-option-1').click({ force: true })
    cy.wait(1000);
    cy.get('#Sales-CardInfo-Discount').type(Discount_Cur)
    cy.wait(1000);
    cy.get('#Sales-CardInfo-Freight').type(Freight_Cur)
    cy.wait(1000);
    cy.get('#Sales-CardInfo-Description').type(Description)
    cy.wait(1000);
    //Item lookup
    cy.get('[style="color: inherit; width: 25%; max-width: 25%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit; text-align: center;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
      .click().get('#itemCode-paymentEntry-option-2').click({ force: true })
    cy.wait(1000);
    cy.get('#mui-144').type(Packing_Quantity)
    cy.wait(1000);
    cy.get('#mui-145').type(Quantity)
    cy.wait(1000);
    cy.get('#mui-146').type(Price)
    cy.wait(1000);
    //save button
    cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(1000);
    //back button
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
  })
}
export function View() {
  cy.get('[index="7"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
  cy.wait(1000);
  cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root').click()
  cy.wait(1000);
  cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
  cy.wait(1000);
}
export function Edit() {
  cy.fixture('SalesQuotation.json').then((payload) => {
    console.log({ payload: payload.validData })
    const Discount_Cur = payload.validData.Discount_Cur
    const Freight_Cur = payload.validData.Freight_Cur
    const Description = payload.validData.Description

cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
cy.wait(1000);
cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
cy.wait(1000);
cy.get('#Sales-CardInfo-Discount').clear()
cy.get('#Sales-CardInfo-Discount').type(Discount_Cur)
cy.wait(1000);
cy.get('#Sales-CardInfo-Freight').clear()
cy.get('#Sales-CardInfo-Freight').type(Freight_Cur)
cy.wait(1000);
cy.get('#Sales-CardInfo-Description').clear()
cy.get('#Sales-CardInfo-Description').type(Description)
cy.wait(1000);
//save button
cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
cy.wait(1000);
})}
export function Download() {
  cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
  cy.wait(1000);
  cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="0"]')
  .click()
  cy.wait(1000);
  cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
  cy.wait(1000);
  cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="-1"]')
  .click()
}
export function Search() {
  cy.get('#TransNo').type('SQ-000013')
  cy.wait(1000);
  cy.get('#TransNo').clear()
  cy.get('#Customer').type('Test Customer')
  cy.wait(1000);
  cy.get('#Customer').clear()
}
export function Post() {
  cy.get('[index="6"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
  cy.wait(1000);
  cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
  cy.wait(1000);
  cy.get('.MuiButton-outlined').click()
  cy.wait(1000);
  cy.get('[index="6"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
  cy.wait(1000);
  cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
  cy.wait(1000);
  cy.get('.MuiGrid-root > .MuiButton-contained').click()
  cy.wait(1000);
}
export function Delete() {
  cy.get('[index="3"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
  cy.wait(1000);
  cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
  cy.wait(1000);
  cy.get('.MuiButton-outlined').click()
  cy.wait(1000);
  cy.get('[index="3"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
  cy.wait(1000);
  cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
  cy.wait(1000);
  cy.get('.MuiGrid-root > .MuiButton-contained').click()
  cy.wait(1000);
}