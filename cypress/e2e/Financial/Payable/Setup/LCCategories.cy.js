import { Login } from "../../../Login.cy";

describe('LCCategories', () => {  
    it('LCCategories CRUD', () => {  
        Login();  
        Save(); 
        View();  
        Edit();   
        Download();   
        Delete();  
    })  
})
export function Save(){
//cy.visit('http://40.81.28.195:1550/Financials/Setup/LCCatetories')
cy.visit('http://40.81.28.195:1110/Financials/Setup/LCCatetories')
cy.wait(1000);
cy.fixture('LCCategories.json').then((payload) => {
    const CatCode = payload.validData.CatCode
    const CatDesc = payload.validData.CatDesc

cy.get('[aria-label="Add New"]').click()
cy.wait(1000);
cy.get('#LCCatetories-CatCode').type(CatCode)
cy.wait(1000);
cy.get('#LCCatetories-CatDesc').type(CatDesc)
cy.wait(1000);
cy.get('.MuiAutocomplete-root > .MuiFormControl-root')
.click().get('#AcctDesc-AcctDesc-option-5').click({force: true})
cy.wait(1000);
cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)')
.click()
cy.wait(1000);
})}
export function View(){
cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
cy.wait(1000);
cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
cy.wait(1000);
cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButtonBase-root')
.click()
cy.wait(1000);
}
export function Edit(){
    cy.fixture('LCCategories.json').then((payload) => {
        const CatDesc = payload.validData.CatDesc
cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root')
.click()
cy.wait(1000);
cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
cy.wait(1000);
cy.get('#LCCatetories-CatDesc').clear()
cy.get('#LCCatetories-CatDesc').type(CatDesc)
cy.wait(1000);
cy.get('.MuiAutocomplete-root > .MuiFormControl-root')
.click().get('#AcctDesc-AcctDesc-option-6').click({force: true})
cy.wait(1000);
//active
cy.get('#alert-dialog-slide-description > div > div > div:nth-child(2) > div > div > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-4.css-gj1fbr-MuiGrid-root > div > label > span.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.Mui-checked.MuiCheckbox-root.MuiCheckbox-colorPrimary.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input')
.click()
//Save btn
cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)')
.click()
})}
export function Download(){
cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
cy.wait(1000);
cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root')
.click()
cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
cy.wait(1000);
}
export function Delete(){
cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root')
.click()
cy.wait(1000);
cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
cy.wait(1000);
cy.get('.MuiButton-outlined').click()
cy.wait(1000);
cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root')
.click()
cy.wait(1000);
cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
cy.wait(1000);
cy.get('.MuiGrid-root > .MuiButton-contained').click()
cy.wait(1000);
}
