import { Login } from '../../../Login.cy.js';

describe('Customer Invoice', () => {
    it('Customer Invoice CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();
        View();       
        Edit();
        Download();
        Post();
        Delete();    
    })
})
export function Save() {
    cy.visit('http://40.81.28.195:1110/Financials/Transaction/CustomerInvoice')
    //cy.visit('https://apps.finosys-sbs.com/Financials/Transaction/CustomerReceipt')
    cy.wait(2000);
    cy.fixture('CustomerInvoice.json').then((payload) => {
        const  Description  = payload.validData.Description;
        const  Ref  = payload.validData.Ref;
        const  Discount  = payload.validData.Discount;
        const  Freight  = payload.validData.Freight;
        const  Quantity  = payload.validData.Quantity;
        const  UnitPrice  = payload.validData.UnitPrice;
        const  Desc  = payload.validData.Desc;
    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get('.MuiGrid-grid-xs-true > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#Invoice-cardInfo-option-0').click({ force: true})
    cy.wait(1000);
    // cy.get('#CustInv-CardCont-VenRefNo').type(Description, { force: true }).blur()
    // cy.wait(1000);
    cy.get('#CustInv-CardCont-VenRefNo').type(Ref, { force: true }).blur()
    cy.wait(1000);
    cy.get('#CustInv-CardCont-Discount').clear()
    cy.get('#CustInv-CardCont-Discount').type(Discount, { force: true }).blur()
    cy.wait(1000);
    cy.get(':nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#Invoice-cardInfo-option-1').click({ force: true})
    cy.wait(1000);
    cy.get('#CustInv-CardCont-Freight').clear()
    cy.get('#CustInv-CardCont-Freight').type(Freight, { force: true }).blur()
    cy.wait(1000);
    cy.get(':nth-child(3) > .MuiGrid-container > :nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#Invoice-cardInfo-option-1').click({ force: true})
    cy.wait(1000);
    cy.get('#CustInv-CardCont-SaleDesc').type(Desc, { force: true }).blur()
    cy.wait(1000);
    //Code lookup
    cy.get('[style="color: inherit; width: 25%; max-width: 25%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit; text-align: center;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#aactCode-paymentEntry-option-4').click({ force: true})
    cy.wait(1000);
    cy.get('#CustInv-DetailCont-Quantity').clear()
    cy.get('#CustInv-DetailCont-Quantity').type(Quantity, { force: true }).blur()
    cy.wait(1000);
    cy.get('#CustInv-DetailCont-UnitPrice').clear()
    cy.get('#CustInv-DetailCont-UnitPrice').type(UnitPrice, { force: true })
    .blur()
    cy.wait(1000);
    // cy.get('[style="color: inherit; width: 10%; max-width: 10%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit; text-align: center;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    // .click().get('#aactCode-paymentEntry-option-0').click({ force: true})
    // cy.wait(1000);
    // cy.get('#CustInv-DetailCont-LineDescription').type(Description).blur()
    // cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root')
    .click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
    })
}

export function View() {
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(1)').click()
    cy.wait(2000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Edit() {
    cy.fixture('CustomerInvoice.json').then((payload) => {
        const Desc = payload.validData.Desc;
        const Quantity = payload.validData.Quantity;
        const UnitPrice = payload.validData.UnitPrice;
        const Freight = payload.validData.Freight;
    
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(2000);
    cy.get(':nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#Invoice-cardInfo-option-1').click({ force: true})
    cy.wait(1000);
    cy.get('#CustInv-CardCont-Freight').clear()
    cy.get('#CustInv-CardCont-Freight').type(Freight, { force: true }).blur()
    cy.wait(1000);
    cy.get('#CustInv-DetailCont-Quantity').clear()
    cy.get('#CustInv-DetailCont-Quantity').type(Quantity, { force: true }).blur()
    cy.wait(1000);
    cy.get('#CustInv-DetailCont-UnitPrice').clear()
    cy.get('#CustInv-DetailCont-UnitPrice').type(UnitPrice, { force: true })
    .blur()
    cy.wait(1000);
    cy.get('#CustInv-DetailCont-LineDescription').clear()
    cy.get('#CustInv-DetailCont-LineDescription').type(Desc, { force: true }).blur()
    cy.wait(1000);
    cy.get(':nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
    cy.wait(1000);
    cy.get('#Invoice-cardInfo-option-2').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
    })
}

export function Download() {
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(2000);
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(2000);
}

export function Post() {
    cy.get('[index="3"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(4)').click()
    cy.wait(2000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(4)').click()
    cy.wait(2000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
}
export function Delete() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(2000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(2000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
}
