import { Login } from '../../Login.cy.js';

describe('Vendors', () => {
    it('Vendors CRUD', () => {
        Login();
        Save();
        View();
        Edit(); 
        Download();
        Delete();
       
    })
})
export function Save() {

    // save btn kam nhi kr rha
    // islie baqi operation chk krne k lie back ka btn use kia hai is func me
    var VendorCode = "208" + new Date().getMilliseconds() 
    cy.visit('http://40.81.28.195:1550/Financials/Setup/Vendors')
    cy.wait(1000);
    cy.get('.MuiContainer-root > .MuiFab-root').click()
    cy.wait(1000);
    cy.get('#VendorCode').type(VendorCode)
    cy.wait(1000);
    cy.get(':nth-child(2) > :nth-child(1) > .MuiFormControl-root').type('Vendor')
    cy.wait(1000);
    cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root').type(78002111)
    cy.wait(1000);
    cy.get(':nth-child(4) > :nth-child(1) > .MuiFormControl-root').type('7893829832328')
    cy.wait(1000);
    cy.get('.MuiGrid-grid-md-8 > .MuiBox-root > .MuiPaper-root > :nth-child(1) > .MuiCardContent-root > .MuiGrid-container > :nth-child(1)').click()
    cy.wait(1000);
    cy.get('#VendProfileDesc-VendProfileDesc-option-1').click()
    cy.wait(1000);
    cy.get(':nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    cy.wait(1000);
    cy.get('#CurDesc-CurDesc-option-2').click()
    cy.wait(1000);
    cy.get(':nth-child(7) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    cy.wait(1000);
    cy.get('#AccPurAcctCode-AccPurAcctCode-option-3').click()
    cy.wait(1000);
    cy.get(':nth-child(13) > div > .MuiFormControlLabel-root > .MuiTypography-root').click()
    cy.wait(1000);
    cy.get('.MuiBox-root > div > .MuiFormControlLabel-root > .MuiTypography-root').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get(':nth-child(12) > .NumberFormat > .MuiFormControl-root').clear()
    cy.wait(1000);
    cy.get(':nth-child(12) > .NumberFormat > .MuiFormControl-root').type('100000')
    cy.wait(1000);
    cy.get(':nth-child(13) > div > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
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
// export function Clear() {
//     var VendorCode = "208" + new Date().getMilliseconds() 
//     cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
//     cy.wait(1000);
//     cy.get('.MuiContainer-root > .MuiFab-root').click()
//     cy.wait(1000);
//     cy.get('#VendorCode').type(VendorCode)
//     cy.wait(1000);
//     cy.get(':nth-child(2) > :nth-child(1) > .MuiFormControl-root').type('Vendor')
//     cy.wait(1000);
//     cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root').type(78002111)
//     cy.wait(1000);
//     cy.get(':nth-child(4) > :nth-child(1) > .MuiFormControl-root').type('7893829832328')
//     cy.wait(1000);
//     cy.get(':nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
//     cy.wait(1000);
//     cy.get('#VendProfileDesc-VendProfileDesc-option-0').click()
//     cy.wait(1000);
//     cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
//     cy.wait(1000);
// }

export function Edit() {
    
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('#Vendor').clear()
    cy.wait(1000);
    cy.get('#Vendor').type('testing vendor')
    cy.wait(1000);
    cy.get(':nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    cy.wait(1000);
    cy.get('#VendProfileDesc-VendProfileDesc-option-1').click()
    cy.wait(1000);
    cy.get(':nth-child(7) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    cy.wait(1000);
    cy.get('#AccPurAcctCode-AccPurAcctCode-option-3').click()
    cy.wait(1000);
    cy.wait(1000);
    cy.get('.MuiBox-root > div > .MuiFormControlLabel-root > .MuiTypography-root').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function View() {
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(1)').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
}

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

export function Delete() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
}