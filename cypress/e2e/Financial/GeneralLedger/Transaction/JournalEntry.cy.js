import { Login } from "../../../Login.cy";

describe('Journal Entry', () => {
    it('Journal Entry CRUD', () => {
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