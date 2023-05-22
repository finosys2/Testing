import { Login } from "../../Login.cy";

describe("Purchase Return", () => {
    it("Purchase Return CRUD", () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();
        View();
        Edit();
        Download();
        Delete();
    }); 
});

export function Save() {

}
export function View() {

}
export function Edit() {

}
export function Download() {

}
export function Delete() {
    
}