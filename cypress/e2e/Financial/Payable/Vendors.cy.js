import { Login } from "../../Login.cy";

describe('Vendors ', () => {  
    it('Vendors CRUD', () => {  
        // cy.visit('http://localhost:1750')  
        Login();  
        Save(); 
        // View();  
        // Edit();   
        // Download(); 
        // Search();  
        // Delete();  
    })  
})
// export function Save(){
// var VendorCode = '000' + new Date().getMilliseconds();
// cy.visit('http://40.81.28.195:1550/Financials/Setup/Vendors')
// cy.wait(2000);
// cy.get('.MuiContainer-root > .MuiFab-root').click()
// cy.wait(2000);
// cy.get('#VendorCode').type(VendorCode)
// cy.wait(1000);
// cy.get('#Vendor').type('abc company')
// cy.wait(1000);
// cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root').type('04703688')
// cy.wait(1000);
// cy.get(':nth-child(4) > :nth-child(1) > .MuiFormControl-root').type('2582018500192')
// cy.wait(1000);
// cy.get('.MuiGrid-grid-md-8 > .MuiBox-root > .MuiPaper-root > :nth-child(1) > .MuiCardContent-root > .MuiGrid-container > :nth-child(1)').click()
// cy.wait(1000);
// // cy.get(':nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
// // cy.wait(1000);
// cy.get('#VendProfileDesc-VendProfileDesc-option-1').click()
// cy.wait(1000);
// cy.get(':nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
// cy.wait(1000);
// cy.get('#CurDesc-CurDesc-option-0').click()
// cy.wait(1000);
// cy.get(':nth-child(7) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
// cy.wait(1000);
// cy.get('#AccPurAcctCode-AccPurAcctCode-option-1').click()
// cy.wait(1000);
// //Add click 
// cy.get('.MTableToolbar-title-10 > div > .MuiButtonBase-root').click()
// cy.wait(1000);
// cy.get('#mui-194').type('03492493832')
// cy.wait(1000);
// cy.get('#mui-195').type('03333303555')
// cy.wait(1000);
// cy.get('#mui-196').type('xyz plot-D38')
// cy.wait(1000);
// cy.get('#mui-197').type('xyz city')
// cy.wait(1000);
// cy.get('#mui-198').type('xyz country')
// cy.wait(1000);
// cy.get('#mui-199').type('xyz state')
// cy.wait(1000);
// cy.get('#mui-200').type('rimsha@gmail.com')
// cy.wait(1000);
// cy.get('#mui-201').type('www.xyz.com')
// cy.wait(1000);
// cy.get('[value="false"] > div > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
// cy.wait(1000);
// cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
// cy.wait(7000);
// cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
// cy.wait(1000);
// }
export function Save(){
    var VendorCode = '000' + new Date().getMilliseconds();
    cy.visit('http://40.81.28.195:1550/Financials/Setup/Vendors')
    cy.wait(2000);
    cy.get('.MuiContainer-root > .MuiFab-root').click()
    cy.wait(2000);
    cy.get('#VendorCode').type(VendorCode)
    cy.wait(1000);
    cy.get('#Vendor').type('abc company')
    cy.wait(1000);
    cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root').type('04703688')
    cy.wait(1000);
    cy.get(':nth-child(4) > :nth-child(1) > .MuiFormControl-root').type('2582018500192')
    cy.wait(1000);
    cy.get('.MuiGrid-grid-md-8 > .MuiBox-root > .MuiPaper-root > :nth-child(1) > .MuiCardContent-root > .MuiGrid-container > :nth-child(1)').click()
    cy.wait(1000);
    cy.get(':nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    cy.wait(1000);
    cy.get('#VendProfileDesc-VendProfileDesc-option-1').click()
    cy.wait(1000);
    cy.get(':nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    cy.wait(1000);
    cy.get('#CurDesc-CurDesc-option-0').click()
    cy.wait(1000);
    cy.get(':nth-child(7) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    cy.wait(1000);
    cy.get('#AccPurAcctCode-AccPurAcctCode-option-1').click()
    cy.wait(1000);
    //Add click 
    cy.get('.MTableToolbar-title-10 > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#mui-194').type('03492493832')
    cy.wait(1000);
    cy.get('#mui-195').type('03333303555')
    cy.wait(1000);
    cy.get('#mui-196').type('xyz plot-D38')
    cy.wait(1000);
    cy.get('#mui-197').type('xyz city')
    cy.wait(1000);
    cy.get('#mui-198').type('xyz country')
    cy.wait(1000);
    cy.get('#mui-199').type('xyz state')
    cy.wait(1000);
    cy.get('#mui-200').type('rimsha@gmail.com')
    cy.wait(1000);
    cy.get('#mui-201').type('www.xyz.com')
    cy.wait(1000);
    cy.get('[value="false"] > div > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(7000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
    }
    
export function View(){
    cy.get('[index="6"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Edit(){
    cy.get('[index="6"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('#Vendor').clear()
    cy.get('#Vendor').type('rimsha xyz')
    cy.wait(1000);
    cy.get('.MuiGrid-grid-md-8 > .MuiBox-root > .MuiPaper-root > :nth-child(1) > .MuiCardContent-root > .MuiGrid-container > :nth-child(1)').click()
    cy.wait(1000);
    cy.get('#VendProfileDesc-VendProfileDesc-option-0').click()
    cy.wait(1000);
    cy.get(':nth-child(13) > div > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('.MuiBox-root > div > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('[value="true"] > div > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);

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
export function Search(){
    cy.visit('http://40.81.28.195:1550/Financials/Setup/Vendors')
cy.wait(2000);
    cy.get('#VendorCode').type('00')
    cy.wait(2000);
    cy.get('#VendorCode').clear()
    cy.wait(1000);
    cy.get('#Vendor').type('test')
    cy.wait(2000);
    cy.get('#Vendor').clear()
    cy.wait(1000);
}
export function Delete(){
    cy.get('[index="6"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="6"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
}


