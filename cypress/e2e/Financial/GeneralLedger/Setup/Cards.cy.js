import { Login } from "../../../Login.cy.js";

describe('Cards', () => {
    it('Cards CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();
        View();
        Edit();
        Download();
        Search();
        Delete();
    })
})
export function Save() {
    //cy.visit('http://localhost:1750/Financials/Setup/Cards')
    cy.visit('http://192.168.19.97:1750/Financials/Setup/Cards')
    cy.wait(1000);
    cy.fixture('Cards.json').then((payload) => {
        console.log({payload: payload.validData})
        const CardCode  = payload.validData.CardCode
        const Phone1  = payload.validData.Phone1
        const CardName = payload.validData.CardName
        const Address = payload.validData.Address
        const Phone2 = payload.validData.Phone2
        const City = payload.validData.City
        const PostCode = payload.validData.PostCode
        const Email = payload.validData.Email
        const Country = payload.validData.Country

    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get('.MuiGrid-container > :nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInput-root > #CardCode')
    .type(CardCode, {force: true}).blur()
    cy.wait(1000);
    cy.get(':nth-child(2) > :nth-child(1) > .MuiFormControl-root')
    .click().get('[data-value="Employee"]').click({force: true})
    cy.wait(1000);
    cy.get('#phone1').type(Phone1, {force: true}).blur()
    cy.wait(1000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInput-root > #CardName')
    .type(CardName, {force: true}).blur()
    cy.wait(1000);
    cy.get('#Address').type(Address, {force: true}).blur()
    cy.wait(1000);
    cy.get('#Phone2').type(Phone2, {force: true}).blur()
    cy.wait(1000);
    cy.get('#City').type(City, {force: true}).blur()
    cy.wait(1000);
    cy.get('#PostCode').type(PostCode, {force: true}).blur()
    cy.wait(1000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInput-root > #Email')
    .type(Email, {force: true}).blur()
    cy.wait(1000);
    cy.get('#Country').type(Country, {force: true}).blur()
    cy.wait(1000);
    cy.get('#alert-dialog-slide-description > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(11) > div > label > span.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.Mui-checked.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(7000);
    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(1)').click()
    cy.wait(1000);

})}
export function View() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButton-root').click()
    cy.wait(1000);
}
export function Edit() {
    cy.fixture('Cards.json').then((payload) => {
        console.log({payload: payload.validData})
        const CardName = payload.validData.CardName
        const Address = payload.validData.Address
        const Email = payload.validData.Email
        const Country = payload.validData.Country

    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInput-root > #CardName').clear()
    cy.wait(1000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInput-root > #CardName')
    .type(CardName)
    cy.wait(1000);
    cy.get('#Address').clear()
    cy.wait(1000);
    cy.get('#Address').type(Address)
    cy.wait(1000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInput-root > #Email').clear()
    cy.wait(1000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInput-root > #Email')
    .type(Email)
    cy.wait(1000);
    cy.get('#Country').clear()
    cy.wait(1000);
    cy.get('#Country').type(Country)
    cy.wait(1000);
    cy.get('#alert-dialog-slide-description > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(12) > div > label > span.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.Mui-checked.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(7000);
})}
export function Download() {
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1)').click()
    cy.wait(1000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1)').click()
    cy.wait(1000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(1000);
}
export function Search() {
    cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #CardCode')
    .type('00')
    cy.wait(1000);
    
}
export function Delete() {
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
    cy.wait(7000);
}
