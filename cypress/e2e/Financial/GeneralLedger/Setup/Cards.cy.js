// import { Login } from "../../../Login.cy.js";

// describe('Cards', () => {
//     it('Cards CRUD', () => {
//         // cy.visit('http://localhost:1750')
//         Login();
//         Save();
//         View();
//         Edit();
//         Download();
//         Delete();
//     })
// })
export function Save() {
    var cardCode = "88990" + new Date().getMilliseconds() 
    cy.visit('http://localhost:1750/Financials/Setup/Cards')
    cy.wait(2000);
    cy.get('.MuiContainer-root > .MuiFab-root').click()
    cy.wait(2000);
    cy.get('.MuiGrid-container > :nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInput-root > #CardCode').type(cardCode)
    cy.wait(2000);
    cy.get(':nth-child(2) > :nth-child(1) > .MuiFormControl-root').click()
    cy.wait(2000);
    cy.get('[data-value="Employee"]').click()
    cy.wait(2000);
    cy.get('#phone1').type('0234567890')
    cy.wait(2000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInput-root > #CardName').type('Test Employee')
    cy.wait(2000);
    cy.get('#Address').type('Test Address #01')
    cy.wait(2000);
    cy.get('#Phone2').type('02345695920')
    cy.wait(2000);
    cy.get('#City').type('karchi')
    cy.wait(2000);
    cy.get('#PostCode').type('70500')
    cy.wait(2000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInput-root > #Email').type('test@gmail.com')
    cy.wait(2000);
    cy.get('#Country').type('Pakistan')
    cy.wait(2000);
    cy.get('#alert-dialog-slide-description > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(11) > div > label > span.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.Mui-checked.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input').click()
    cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(7000);
    cy.get('.MuiContainer-root > .MuiFab-root').click()
    cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(1)').click()
    cy.wait(2000);

}
export function View() {
    cy.get('[index="4"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButton-root').click()
    cy.wait(2000);
}
export function Edit() {
    cy.get('[index="4"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(2000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInput-root > #CardName').clear()
    cy.wait(2000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInput-root > #CardName').type('Employee Rimsha')
    cy.wait(2000);
    cy.get('#Address').clear()
    cy.wait(2000);
    cy.get('#Address').type('R-120 xyz area')
    cy.wait(2000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInput-root > #Email').clear()
    cy.wait(2000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInput-root > #Email').type('rimsha@gmail.com')
    cy.wait(2000);
    cy.get('#alert-dialog-slide-description > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(12) > div > label > span.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.Mui-checked.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input').click()
    cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(7000);
}
export function Download() {
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1)').click()
    cy.wait(2000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(2000);
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1)').click()
    cy.wait(2000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(2000);
}
export function Delete() {
    cy.get('[index="4"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(2000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(2000);
    cy.get('[index="4"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(2000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(7000);
}
