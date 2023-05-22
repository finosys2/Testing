import { Login } from "../../../Login.cy";

describe('Vendor Categories ', () => {
    it('Vendor Categories CRUD', () => {
        // cy.visit('http://localhost:1750')  
        Login();
        Save(); 
        View();  
        Edit();
        Download();
        Search();
        Delete();
    })
})
export function Save() {
    cy.visit('http://40.81.28.195:1110/Financials/Setup/VendorCategories')
    //cy.visit('http://localhost:1750/Financials/Setup/VendorCategories')
    cy.wait(1000);
    cy.fixture('VendorCategory.json').then((payload) => {
        const VendorCategoryCode = payload.validData.VendorCategoryCode
        const VendorCategoryDesc = payload.validData.VendorCategoryDesc

    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get('#VendorCategories-VendCategoryCode').type(VendorCategoryCode)
    cy.wait(1000);
    cy.get('#VendorCategories-VendCategoryDesc').type(VendorCategoryDesc)
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(7000);
    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(1)').click()
    cy.wait(1000);
})
}
export function View() {

    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButton-root').click()
    cy.wait(6000);
}
export function Edit() {
    cy.fixture('VendorCategory.json').then((payload) => {
        console.log({payload: payload.validData})
        const VendCategoryDesc1 = payload.validData.VendCategoryDesc1
    cy.get('[index="2"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #VendCategoryDesc')
    .clear()
    cy.wait(1000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #VendCategoryDesc')
    .type(VendCategoryDesc1)
    cy.wait(1000);
    cy.get('#alert-dialog-slide-description > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(3) > div > label > span.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.Mui-checked.MuiCheckbox-root.MuiCheckbox-colorPrimary.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(7000);
})}
export function Download() {
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(1000);
}
export function Search() {
    cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #VendCategoryCode').type('00')
    cy.wait(1000);
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #VendCategoryDesc').type('Vendor')
    cy.wait(1000);
    cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #VendCategoryCode').clear()
    cy.wait(1000);
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #VendCategoryDesc').clear()
    cy.wait(1000);
}
export function Delete() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
}