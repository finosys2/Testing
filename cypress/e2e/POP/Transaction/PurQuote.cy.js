import { Login } from "../../Login.cy.js"

describe('Purchase Quote', () => {
    it('Purchase Quote CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();
        View();
        Edit();
        Download();
        ConvertToPO();
        Search();
        Delete();
        Post();
    })
})

export function Save() {
     //cy.visit('http://40.81.28.195:1110/Purchases/Transaction/PurchaseQuote')
     cy.visit('https://apps.finosys-sbs.com/Purchases/Transaction/PurchaseQuote')
     cy.wait(2000);
    cy.fixture('PurchaseQuote.json').then((payload) => {
        const Description = payload.validData.Description;
        const Freight_Cur = payload.validData.Freight_Cur;
        const Packing_Quantity = payload.validData.Packing_Quantity;
        const Quantity = payload.validData.Quantity;
        const Price = payload.validData.Price;

        cy.get('[aria-label="Add New"]').click()
        cy.wait(1000);
        cy.get('.MuiGrid-grid-xs-true > :nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
            .click()
        cy.get('#Requisition-cardInfo-option-0').click({ force: true })
        cy.wait(1000);
        cy.get('.MuiGrid-container > :nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
            .click()
        cy.get('#Requisition-cardInfo-option-2').click({ force: true })
        cy.wait(1000);
        cy.get('#Description').type(Description)
        cy.wait(1000);
        cy.get('#mui-15').clear()
        cy.get('#mui-15').type(Freight_Cur)
        cy.wait(1000);
        cy.get('[style="color: inherit; width: 25%; max-width: 25%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit; text-align: center;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
            .click().get('#itemCode-paymentEntry-option-0').click({ force: true })
        cy.wait(1000);
        cy.get('#mui-18').clear()
        cy.get('#mui-18').type(Packing_Quantity)
        cy.wait(1000);
        cy.get('#mui-19').clear()
        cy.get('#mui-19').type(Quantity)
        cy.wait(1000);
        cy.get('#mui-20').clear()
        cy.get('#mui-20').type(Price)
        cy.wait(1000);
        //save
        cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
        cy.wait(1000);
        //back
        cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
        cy.wait(1000);
    })
}
export function View() {
    
    cy.get('[index="2"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Edit() {
    cy.fixture('PurchaseQuote.json').then((payload) => {
        const Description = payload.validData.Description;
        const Freight_Cur = payload.validData.Freight_Cur;

        cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
        cy.wait(1000);
        cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
        cy.wait(1000);
        cy.get('#Description').clear()
        cy.get('#Description').type(Description)
        cy.wait(1000);
        cy.get('#mui-15').clear()
        cy.get('#mui-15').type(Freight_Cur)
        cy.wait(1000);
        cy.get('.MuiGrid-container > :nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
            .click().get('#Requisition-cardInfo-option-1').click({ force: true })
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
export function ConvertToPO() {
    cy.get('[index="2"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="2"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()

}
export function Search() {
    cy.get('#TransNo').type('PQ-000003')
    cy.wait(1000);
    cy.get('#TransNo').clear()
    cy.get('#Location').type('Location 1')
    cy.wait(1000);
    cy.get('#Location').clear()
}
export function Delete() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="2"]').click()
    cy.wait(1000);
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="2"]').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
}
export function Post() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
}
