// import { Login } from "../Login.cy";

// describe('TaxDetail', () => {
//     it('TaxDetail CRUD', () => {
//         //cy.visit('http://localhost:1750')
    
//         Save();
//         View();
//         Edit();
//         Download();
//         Delete();
//         // Clear();
//         // Search();
//     })
// })
export function Save() {
    var num = "001" + new Date().getMilliseconds() + "234890"
    //cy.visit('http://localhost:1750/Financials/Setup/TaxDetail')
    cy.visit('http://40.81.28.195:1550/Financials/Setup/TaxDetail')
    cy.wait(2000);
    cy.get('.MuiContainer-root > .MuiFab-root').click()
    cy.wait(2000);
    cy.get('#mui-17').type(num)
    cy.wait(2000);
    cy.get('#mui-18').type('Sales Tax')
    cy.wait(2000);
    cy.get('.MuiAutocomplete-root > .MuiFormControl-root').click()
    cy.wait(2000);
    cy.get('#Account-undefined-option-4').click()
    cy.wait(2000);
    cy.get(':nth-child(4) > :nth-child(1) > .MuiFormControl-root').click()
    cy.wait(2000);
    cy.get('[data-value="Sales"]').click()
    cy.wait(2000);
    cy.get('#mui-20').type('53')
    cy.wait(2000);
    cy.get('#alert-dialog-slide-description > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(6) > div > label > span.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.Mui-checked.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input').click()
    cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(7000);
    cy.get('.MuiContainer-root > .MuiFab-root').click()
    cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(1)').click()
    cy.wait(2000);
}

export function View() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButton-root').click()
    cy.wait(2000);
}

export function Edit() {
    cy.visit('http://40.81.28.195:1550/Financials/Setup/TaxDetail')

    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(2000);
    cy.get('#mui-18').clear()
    cy.wait(2000);
    cy.get('#mui-18').type('Other Tax')
    cy.get('.MuiAutocomplete-root > .MuiFormControl-root').click()
    cy.wait(2000);
    cy.get('#Account-undefined-option-0').click()
    cy.wait(2000);
    cy.get(':nth-child(4) > :nth-child(1) > .MuiFormControl-root').click()
    cy.wait(2000);
    cy.get('[data-value="All"]').click()
    cy.wait(2000);
    cy.get('#mui-20').clear()
    cy.wait(2000);
    cy.get('#mui-20').type('101')
    cy.wait(2000);
    cy.get('#alert-dialog-slide-description > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(6) > div > label > span.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input').click()
    cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(7000);
}
export function Download() {
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(4000);
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(4000);
}
export function Delete() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(2000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(2000);
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(2000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(2000);

}
