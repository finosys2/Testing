import { Login } from "../../../Login.cy";

describe('Currency', () => {  
    it('Currency CRUD', () => {  
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
//var currCode = "004" + new Date().getMilliseconds();
cy.visit('http://40.81.28.195:1110/Financials/Setup/Currencies')
cy.wait(1000);
cy.fixture('Currency.json').then((payload) => {
    console.log({payload: payload.validData})
        const CurCode = payload.validData.CurCode
        const CurName = payload.validData.CurName
        const CurSymbol = payload.validData.CurSymbol
        const CurDecName = payload.validData.CurDecName

cy.get('[aria-label="Add New"]').click()
cy.wait(1000);
cy.get('#CurrencyList-CurCode').type(CurCode)
cy.wait(1000);
cy.get('#CurrencyList-CurName').type(CurName)
cy.wait(1000);
cy.get('#CurrencyList-CurSymbol').type(CurSymbol)
cy.wait(1000);
cy.get('#CurrencyList-CurDecName').type(CurDecName)
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
    cy.get('[index="2"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    // cy.get('#simple-menu > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1xbokmk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper > ul > li:nth-child(1)').click()
    // cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButton-root').click()
    cy.wait(1000);
}
export function Edit(){
    cy.get('[index="2"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('#CurrencyList-CurName').clear()
    cy.get('#CurrencyList-CurName').type('dollar currency')
    cy.wait(1000);
    cy.get('#CurrencyList-CurSymbol').clear()
    cy.get('#CurrencyList-CurSymbol').type('$')
    cy.wait(1000);
    cy.get('#CurrencyList-CurDecName').clear()
    cy.get('#CurrencyList-CurDecName').type('cent')
    cy.wait(1000);
    //exchange rate btn
    cy.get('.MuiGrid-container > :nth-child(5) > .MuiButtonBase-root').click()
    cy.wait(1000);
    //Add btn
    cy.get('.MTableToolbar-title-9 > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    // cy.get('[value="0"] > .NumberFormat > .MuiFormControl-root > .MuiInputBase-root > #CurrencyList-ExchRate')
    // .clear()
    // cy.get('[value="0"] > .NumberFormat > .MuiFormControl-root > .MuiInputBase-root > #CurrencyList-ExchRate')
    // .type('5000')
    // cy.wait(1000);
    //save btn
    cy.get(':nth-child(10) > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(1000);

}
export function Download(){
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1)').click()
    cy.wait(1000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1)').click()
    cy.wait(1000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(1000);
}
export function Delete(){
    cy.get('[index="2"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="2"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiCardActions-root > .MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
}
