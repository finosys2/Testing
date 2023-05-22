import { Login } from '../../../Login.cy.js';

describe('Customer Receipt', () => {
    it('Customer Receipt CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();
        Edit();
        View();
        Print();
        Download();
        Post();
        Delete();
    })
})
export function Save() {
    cy.visit('http://40.81.28.195:1110/Financials/Transaction/CustomerReceipt')
    cy.wait(2000);
    cy.fixture('CustomerReceipt.json').then((payload) => {
        const Description = payload.validData.Description;
        const Ref = payload.validData.Ref;
        const Pay = payload.validData.Pay;
        cy.get('[aria-label="Add New"]').click()
        cy.wait(1000);
        cy.get('.MuiGrid-grid-xs-true > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
        .click().get('#Invoice-cardInfo-option-0').click({force: true})
        cy.wait(1000);
        cy.get(':nth-child(3) > .MuiGrid-container > :nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
        .click().get('#Invoice-cardInfo-option-1').click({force: true})
        cy.wait(1000);
        cy.get(':nth-child(2) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
        .click().get('#Invoice-cardInfo-option-2').click({force: true})
        cy.wait(1000);
        cy.get('#CustRec-CardCont-RecDesc').type(Description)
        cy.wait(1000);
        cy.get(':nth-child(3) > .MuiGrid-container > :nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
            .get('#Invoice-cardInfo-option-2').click({force: true})
        cy.wait(1000);
        cy.get(':nth-child(2) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
            .get('#Invoice-cardInfo-option-3').click({force: true})
        cy.wait(1000);
        cy.get('#CustRec-CardCont-CheckDocNo').type(Ref)
        cy.wait(1000);
        cy.get(':nth-child(6) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
            .get('#Invoice-cardInfo-option-2').click({force: true})
        cy.wait(1000);
        cy.get('#CustRec-CardCont-SubTotal').clear()
        cy.get('#CustRec-CardCont-SubTotal').type(Pay)
        cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
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
    cy.fixture('CustomerReceipt.json').then((payload) => {
        const Description = payload.validData.Description;
        cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
        cy.wait(2000);
        cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
        cy.wait(2000);
        cy.get('#CustRec-CardCont-RecDesc').clear()
        cy.get('#CustRec-CardCont-RecDesc').type(Description)
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
export function Print() {
    cy.get('[index="3"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('.MuiList-root > :nth-child(5)').click()
    cy.wait(2000);
}
export function Post() {
    cy.get('[index="3"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('.MuiList-root > :nth-child(4)').click()
    cy.wait(2000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
}
export function Delete() {
    cy.get('[index="3"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(2000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(2000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
}
