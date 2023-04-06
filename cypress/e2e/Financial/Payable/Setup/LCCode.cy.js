import { Login } from "../../../Login.cy";

describe("LC Code", () => { 
    it('LC Code CRUD', () => {
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
    var LCCode = 'LCRIMSHA' + new Date().getMilliseconds();
cy.visit('http://40.81.28.195:1550/Financials/Setup/LCCodes')
cy.wait(1000);
cy.get('.MuiContainer-root > .MuiFab-root').click()
cy.wait(1000);
cy.get('.MuiGrid-container > :nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #LCCode').type(LCCode)
cy.wait(1000);
cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #LCDesc').type('LCCode Rimsha')
cy.wait(1000);
cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root').type('Alfalah')
cy.wait(1000);
cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #VendorName').type('Rafaykhan')
cy.wait(1000);
cy.get(':nth-child(5) > :nth-child(1) > .MuiFormControl-root').type('Habib')
cy.wait(1000);
cy.get('.MuiStack-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
cy.wait(1000);
cy.get(':nth-child(5) > :nth-child(6)').click()
cy.wait(1000);
cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
cy.wait(1000);
}
export function View() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Edit() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #LCDesc').clear()
    cy.wait(1000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #LCDesc').type('LCCode-Rimsha Edited')
    cy.wait(1000);
    cy.get(':nth-child(4) > :nth-child(1) > .MuiFormControl-root').clear()
    cy.wait(1000);
    cy.get(':nth-child(4) > :nth-child(1) > .MuiFormControl-root').type('Rimshayousuf')
    cy.wait(1000);
    cy.get(':nth-child(5) > :nth-child(1) > .MuiFormControl-root').clear()
    cy.wait(1000);
    cy.get(':nth-child(5) > :nth-child(1) > .MuiFormControl-root').type('Meezan')
    cy.wait(1000);
    cy.get('#alert-dialog-slide-description > div > div > div:nth-child(2) > div > div > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-4.css-gj1fbr-MuiGrid-root > div > label > span.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiCheckbox-root.MuiCheckbox-colorPrimary.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input').click()
    cy.wait(1000);
    cy.get('.MuiStack-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.MuiIconButton-edgeStart').click()
    cy.wait(1000);
    cy.get('.MuiDayPicker-monthContainer > :nth-child(5) > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(1000);
}
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
    cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #LCCode').type('LC31')
    cy.wait(1000);
    cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #LCCode').clear()
    cy.wait(1000);
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #LCDesc').type('Rimsha')
    cy.wait(1000);
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #LCDesc').clear()
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
    cy.wait(1000);
}
