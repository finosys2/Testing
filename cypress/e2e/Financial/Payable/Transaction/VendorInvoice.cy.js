import { Login } from "../../../Login.cy";

describe('VendorInvoice', () => {
    it('VendorInvoice CRUD', () => {
        Login();
        Save();
        View();
        Edit();
        Download();
        print();
        Post();
        Delete();
    })
})
export function Save() {
cy.visit('http://40.81.28.195:1110/Financials/Transaction/VendorInvoice')
cy.wait(1000);
cy.fixture('VendorInvoice.json').then((payload) => {

})
cy.get('[aria-label="Add New"]').click()
cy.wait(1000);
}
export function View() {

}
export function Edit() {

}
export function Download() {

}
export function print() {

}
export function Post() {

}
export function Delete() {

}
