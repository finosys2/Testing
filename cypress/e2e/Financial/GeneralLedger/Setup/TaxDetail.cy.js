import { Login } from "../../../Login.cy";

describe('TaxDetail', () => {
    it('TaxDetail CRUD', () => {
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
    cy.visit('http://40.81.28.195:1110/Financials/Setup/TaxDetail')
    //cy.visit('http://192.168.19.97:1750/Financials/Setup/TaxDetail')
    cy.wait(1000);
    cy.fixture('TaxDetail.json').then((payload) => {
        console.log({payload: payload.validData})
        const TaxDetailCode  = payload.validData.TaxDetailCode
        const TaxDetail = payload.validData.TaxDetail
        const TaxRate = payload.validData.TaxRate

    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get('#TaxDetail-TaxDetailCode').type(TaxDetailCode, { force: true }).blur()
    cy.get('#TaxDetail-TaxDetail-1').type(TaxDetail, { force: true }).blur()
    cy.wait(1000);
    cy.get('.MuiAutocomplete-root > .MuiFormControl-root').click()
    .get('#Account-undefined-option-4').click({ force: true })
    cy.wait(1000);
    cy.get('#TaxDetail-TaxType').click().get('[data-value="Sales"]')
    .click({ force: true })
    cy.wait(1000);
    cy.get('#TaxDetail-TaxRate').type(TaxRate)
    cy.wait(1000);
    cy.get('#alert-dialog-slide-description > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(6) > div > label > span.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.Mui-checked.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(7000);
    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(1)').click()
    cy.wait(1000);
})
}
export function View() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButton-root').click()
    cy.wait(1000);
}
export function Edit() {
    cy.fixture('TaxDetail.json').then((payload) => {
        console.log({payload: payload.validData})
        const TaxDetail = payload.validData.TaxDetail
        const TaxRate = payload.validData.TaxRate
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('#TaxDetail-TaxDetail-1').clear()
    cy.get('#TaxDetail-TaxDetail-1').type(TaxDetail)
    cy.wait(1000);
    cy.get('.MuiAutocomplete-root > .MuiFormControl-root').click()
    .get('#Account-undefined-option-0').click({ force: true })
    cy.wait(1000);
    cy.get(':nth-child(4) > :nth-child(1) > .MuiFormControl-root').click()
    .get('[data-value="All"]').click({ force: true })
    cy.wait(1000);
    cy.get('#TaxDetail-TaxRate').clear()
    cy.get('#TaxDetail-TaxRate').type(TaxRate)
    cy.wait(1000);
    cy.get('#alert-dialog-slide-description > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(6) > div > label > span.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(7000);
})
}
export function Download() {
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(1000);
    // cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    // cy.wait(4000);
    // cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
    // cy.wait(1000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(4000);
}
export function Search(){
    cy.get('#TaxDetailCode').type('00')
    cy.wait(1000);
    cy.get('#TaxDetail').type('Sales')
    cy.wait(1000);
    cy.get('#TaxDetailCode').clear()
    cy.get('#TaxDetail').clear()
}
export function Delete() {
    cy.visit('http://40.81.28.195:1110/Financials/Setup/TaxDetail')
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
    cy.wait(1000);

}
