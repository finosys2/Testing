import { Login } from "../Login.cy";
describe('Jobs', () => {
    it('Jobs CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();
        // Download();
        // View();
        // Edit();
        // Delete();
    })
})
export function Save() {
    var jobCode = "00091" + new Date().getMilliseconds();
    cy.visit('http://localhost:1750/Financials/Setup/Jobs')
    cy.wait(2000);
    cy.get('.MuiGrid-root > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('.MuiInput-root > #JobCode').type(jobCode)
    cy.wait(2000);
    cy.get('.MuiInput-root > #JobDesc').type('job test desc')
    cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(7000);
    cy.get('.MuiGrid-root > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(1)').click()
    cy.wait(2000);

}
export function View() {

}
export function Edit() {

}
export function Delete() {

}