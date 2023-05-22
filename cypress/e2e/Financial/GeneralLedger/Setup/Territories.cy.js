import { Login } from "../../../Login.cy";

describe('Territories', () => { 
    it('Territories CRUD', () => {  
        // cy.visit('http://localhost:1750')  
        Login();  
        Save(); 
        View();  
        Edit();   
        Download();   
        Delete();  
    })  
})
export function Save(){
cy.visit('http://40.81.28.195:1110/Financials/Setup/Territories')
cy.wait(1000);
cy.fixture('territories.json').then((payload) => {
    console.log({payload: payload.validData})
    const CustTerCode = payload.validData.CustTerCode
    const CustTer = payload.validData.CustTer
cy.get('[aria-label="Add New"]').click()
cy.wait(1000);
cy.get('#CustomerTerritory-CustTerCode').type(CustTerCode)
cy.wait(1000);
cy.get('#CustomerTerritory-CustTer').type(CustTer)
cy.wait(1000);
cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
cy.wait(7000);
cy.get('[aria-label="Add New"]').click()
cy.wait(1000);
cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(1)').click()
cy.wait(1000);
})
}
export function View(){
    cy.get('[index="4"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Edit(){
    cy.fixture('territories.json').then((payload) => {
        console.log({payload: payload.validData})
        const CustTer1 = payload.validData.CustTer1
    cy.get('[index="4"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)')
    .click()
    cy.wait(1000);
    cy.get('#CustomerTerritory-CustTer').clear()
    cy.get('#CustomerTerritory-CustTer').type(CustTer1)
    cy.wait(1000);
    cy.get('#alert-dialog-slide-description > div > div > div:nth-child(2) > div > div > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-4.css-gj1fbr-MuiGrid-root > div > label > span.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.Mui-checked.MuiCheckbox-root.MuiCheckbox-colorPrimary.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(7000);
})
}
export function Download(){
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(1000);
}
export function Delete(){
    cy.get('[index="4"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="4"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
}