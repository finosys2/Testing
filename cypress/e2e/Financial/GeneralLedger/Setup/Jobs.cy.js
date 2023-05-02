import { Login } from "../../../Login.cy";

describe('Jobs', () => {
    it('Jobs CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();
        View();
        Edit();
        AddChild();
        Search();
        Delete();
    })
})
export function Save() {
    cy.visit('http://localhost:1750/Financials/Setup/Jobs')
    cy.visit('http://192.168.19.97:1750/Financials/Setup/Jobs')
    cy.wait(1000);
    cy.fixture('Jobs.json').then((payload) => {
        console.log({payload: payload.validData})
        const JobCode  = payload.validData.JobCode
        const JobDesc  = payload.validData.JobDesc
    cy.get('.MuiGrid-root > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #JobCode')
    .type(JobCode)
    cy.wait(1000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #JobDesc')
    .type(JobDesc)
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(7000);
    cy.get('.MuiGrid-root > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(1)').click()
    cy.wait(1000);

})}
export function View() {
    cy.get('[index="1"] > [style="width: 1%; padding: 0px 5px; box-sizing: border-box;"] > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Edit() {
    cy.fixture('Jobs.json').then((payload) => {
        console.log({payload: payload.validData})
        const JobDesc  = payload.validData.JobDesc
    cy.get('[index="1"] > [style="width: 1%; padding: 0px 5px; box-sizing: border-box;"] > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #JobDesc')
    .type(JobDesc)
})}
export function AddChild() {
    cy.fixture('Jobs.json').then((payload) => {
        console.log({payload: payload.validData})
        const JobCode1  = payload.validData.JobCode1
        const JobDesc1  = payload.validData.JobDesc1
    cy.get('[index="1"] > [style="width: 1%; padding: 0px 5px; box-sizing: border-box;"] > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #JobCode')
    .type(JobCode1)
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #JobDesc')
    .type(JobDesc1)
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(1000);
})}
export function Search() {
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #JobCode')
    .type('090')
    cy.wait(1000);
    cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #JobDesc')
    .type('job')
    cy.wait(1000);
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #JobCode').clear()
    cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #JobDesc').clear()
}
export function Delete() {
    cy.get('[index="1"] > [style="width: 1%; padding: 0px 5px; box-sizing: border-box;"] > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.MuiList-root > :nth-child(4)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="1"] > [style="width: 1%; padding: 0px 5px; box-sizing: border-box;"] > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.MuiList-root > :nth-child(4)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
}