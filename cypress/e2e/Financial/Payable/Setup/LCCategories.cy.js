
import { Login } from "../../../Login.cy";

describe('LCCategories', () => {  
    it('LCCategories CRUD', () => {  
        // cy.visit('http://localhost:1750')  
        Login();  
        Save(); 
        // View();  
        // Edit();   
        // Download();   
        // Delete();  
    })  
})
export function Save(){
cy.visit('http://40.81.28.195:1550/Financials/Setup/LCCatetories')
cy.wait(2000);
}
export function View(){

}
export function Edit(){

}
export function Download(){

}
export function Post(){

}
export function Print(){

}
export function Delete(){

}
