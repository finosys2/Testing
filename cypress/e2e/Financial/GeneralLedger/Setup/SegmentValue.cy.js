import { Login } from "../../../Login.cy";

describe('Segment Values', () => {
    it('Segment Values CRUD', () => {
        Login();
        Save();
        View();
        Edit();
        addChild();
        Post();
        Delete();
    })
})
export function Save() {
    cy.visit('http://40.81.28.195:1110/Financials/Setup/SegmentValues')
    cy.wait(1000);
    cy.fixture('SegmentValue.json').then((payload) => {
        console.log({payload: payload.validData})
        const VSCode = payload.validData.VSCode
        const VSDesc = payload.validData.VSDesc
    cy.get('.MuiGrid-root > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#Segments-VSCode').type(VSCode)
    cy.wait(1000);
    cy.get('#Segments-VSDesc').type(VSDesc)
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)')
    .click()
    cy.wait(1000);
})
}
export function View() {
    cy.get('[index="4"] > [style="width: 1%; padding: 0px 5px; box-sizing: border-box;"] > div > .MuiButtonBase-root')
    .click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButtonBase-root')
    .click()
    cy.wait(1000);
}
export function Edit() {
    cy.visit('http://40.81.28.195:1110/Financials/Setup/SegmentValues')
    cy.wait(1000);
    cy.fixture('SegmentValue.json').then((payload) => {
        console.log({payload: payload.validData})
        const VSDescEdit  = payload.validData.VSDescEdit
    cy.get('[index="4"] > [style="width: 1%; padding: 0px 5px; box-sizing: border-box;"] > div > .MuiButtonBase-root')
    .click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('#Segments-VSDesc').clear()
    cy.get('#Segments-VSDesc').type(VSDescEdit)
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)')
    .click()

})
}
export function addChild() {
    cy.fixture('SegmentValue.json').then((payload) => {
        console.log({payload: payload.validData})
        const VSCode = payload.validData.VSCode
        const VSDesc = payload.validData.VSDesc
    cy.get('[index="4"] > [style="width: 1%; padding: 0px 5px; box-sizing: border-box;"] > div > .MuiButtonBase-root')
    .click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('#Segments-VSCode').type(VSCode)
    cy.wait(1000);
    cy.get('#Segments-VSDesc').type(VSDesc)
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)')
    .click()
    cy.wait(1000);

})
}
export function Post() {
    //cancel post
cy.get('[index="4"] > [style="width: 1%; padding: 0px 5px; box-sizing: border-box;"] > div > .MuiButtonBase-root')
.click()    
cy.wait(1000);
cy.get('.MuiList-root > :nth-child(5)').click()
cy.wait(1000);
cy.get('.MuiButton-outlined').click()
cy.wait(1000);
//accept post
cy.get('[index="4"] > [style="width: 1%; padding: 0px 5px; box-sizing: border-box;"] > div > .MuiButtonBase-root')
.click()    
cy.wait(1000);
cy.get('.MuiList-root > :nth-child(5)').click()
cy.wait(1000);
cy.get('.MuiGrid-root > .MuiButton-contained').click()
cy.wait(1000);
}
export function Delete() {
cy.get('[index="4"] > [style="width: 1%; padding: 0px 5px; box-sizing: border-box;"] > div > .MuiButtonBase-root')
.click()    
cy.wait(1000);
cy.get('.MuiList-root > :nth-child(4)').click()
cy.wait(1000);
cy.get('.MuiButton-outlined').click()
cy.wait(1000);
cy.get('[index="4"] > [style="width: 1%; padding: 0px 5px; box-sizing: border-box;"] > div > .MuiButtonBase-root')
.click()    
cy.wait(1000);
cy.get('.MuiList-root > :nth-child(4)').click()
cy.wait(1000);
cy.get('.MuiGrid-root > .MuiButton-contained').click()
cy.wait(1000);
}