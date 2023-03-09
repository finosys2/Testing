import { Login } from '../Login.cy.js';
describe('Bank', () => {
    it('Bank CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();
        View();
        Edit();
        Download();
        //Delete();
    })
})
export function Save() {
    var bank = "BOA" + new Date().getMilliseconds();
    //cy.visit('http://localhost:1750/Financials/Setup/Bank')
    cy.visit('http://40.81.28.195:1550/Financials/Setup/Bank')
    cy.wait(2000);
    cy.get('.MuiContainer-root > .MuiFab-root').click()
    cy.wait(2000);
    cy.get('#mui-17').type(bank)
    cy.wait(2000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInput-root > #BankName').type('Bank of Alfalah')
    cy.wait(2000);
    cy.get(':nth-child(3) > .css-1p5q5e5-MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    cy.wait(2000);
    cy.get('#CurName-undefined-option-1').click()
    cy.wait(2000);
    // cy.get('#CurName').type('USD')
    // cy.wait(2000);
    cy.get(':nth-child(5) > .css-1p5q5e5-MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    cy.wait(2000);
    cy.get('#Account-undefined-option-2').click()
    cy.wait(2000);
    // cy.get('#AccountCodeDecription').type('Cash')
    // cy.wait(2000);
    cy.get(':nth-child(7) > :nth-child(1) > .MuiFormControl-root > .MuiInput-root > #AccNo').type('PKR08SCBL1245548963229')
    cy.wait(2000);
    cy.get(':nth-child(8) > :nth-child(1) > .MuiFormControl-root > .MuiInput-root > #AccNo').type('13i254605982442')
    cy.wait(2000);
    cy.get(':nth-child(9) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #AccNo').type('xyzabc')
    cy.wait(2000);
    cy.visit('#alert-dialog-slide-description > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(10) > div > label > span.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.Mui-checked.MuiCheckbox-root.MuiCheckbox-colorPrimary.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input').click()
    cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(6000);
    cy.get('.MuiContainer-root > .MuiFab-root').click()
    cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > #alert-dialog-slide-title > .MuiButtonBase-root').click()
    cy.wait(2000);
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
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInput-root > #BankName').clear()
    cy.wait(2000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInput-root > #BankName').type('Bank of America')
    cy.wait(2000);
    cy.get(':nth-child(3) > .css-1p5q5e5-MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    cy.wait(2000);
    cy.get('#CurName-undefined-option-1').click()
    cy.wait(2000);
    cy.get(':nth-child(5) > .css-1p5q5e5-MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    cy.wait(2000);
    cy.get('#Account-undefined-option-3').click()
    cy.wait(2000);
    cy.get(':nth-child(8) > :nth-child(1) > .MuiFormControl-root > .MuiInput-root > #AccNo').clear()
    cy.wait(2000);
    cy.get(':nth-child(8) > :nth-child(1) > .MuiFormControl-root > .MuiInput-root > #AccNo').type('3452178989010')
    cy.wait(2000);
   // cy.get('#alert-dialog-slide-description > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(9) > div > label > span.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.Mui-checked.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input').click()
 //   cy.get('#alert-dialog-slide-description > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(9) > div > label > span.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.Mui-checked.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input').click()
    //cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(2000);
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
    cy.wait(2000);
}