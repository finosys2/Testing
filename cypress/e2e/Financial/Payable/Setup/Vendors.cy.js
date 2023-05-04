import { Login } from "../../../Login.cy";

describe('Vendors ', () => {  
    it('Vendors CRUD', () => {  
       
        Login();  
        Save(); 
        View();  
        Edit();   
        Download(); 
        Search();  
        Delete();  
    })  
})
export function Save(){
    //cy.visit('http://40.81.28.195:1550/Financials/Setup/Vendors')
    cy.visit('http://40.81.28.195:1110/Financials/Setup/Vendors')
    cy.wait(1000);
    cy.fixture('Vendors.json').then((payload) => {
        const VendorCode = payload.validData.VendorCode
        const Vendor = payload.validData.Vendor
        const NTNNo = payload.validData.NTNNo
        const STRegNo = payload.validData.STRegNo
        const ContactPerson = payload.validData.ContactPerson
        const PhoneNo = payload.validData.PhoneNo
        const Address = payload.validData.Address
        const City = payload.validData.City
        const Country = payload.validData.Country
        const PostCode = payload.validData.PostCode
        const Email = payload.validData.Email
        const Web = payload.validData.Web

    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get('#VendorCode').type(VendorCode)
    cy.wait(1000);
    cy.get('#Vendor').type(Vendor)
    cy.wait(1000);
    cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root').type(NTNNo)
    cy.wait(1000);
    cy.get(':nth-child(4) > :nth-child(1) > .MuiFormControl-root').type(STRegNo)
    cy.wait(1000);
    cy.get('.MuiGrid-grid-md-8 > .MuiBox-root > .MuiPaper-root > :nth-child(1) > .MuiCardContent-root > .MuiGrid-container > :nth-child(1)')
    .click()
    // cy.wait(1000);
    // cy.get(':nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
    // .click().get('#VendProfileDesc-VendProfileDesc-option-0').click({force: true})
    //cy.get(':nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    cy.get('#VendProfileDesc-VendProfileDesc-option-0').click({force: true})
    cy.wait(1000);
    cy.get(':nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
    .click().get('#CurDesc-CurDesc-option-0').click({force: true})
    cy.wait(1000);
    cy.get(':nth-child(7) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
    .click().get('#AccPurAcctCode-AccPurAcctCode-option-1').click({force: true})
    cy.wait(1000);
    //Add click 
    cy.get('.MTableToolbar-title-10 > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(1)').type(ContactPerson)
    cy.wait(1000);
    cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(2)').type(PhoneNo)
    cy.wait(1000);
    cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(3)').type(Address)
    cy.wait(1000);
    cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(4)').type(City)
    cy.wait(1000);
    cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(5)').type(Country)
    cy.wait(1000);
    cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(6)').type(PostCode)
    cy.wait(1000);
    cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(7)').type(Email)
    cy.wait(1000);
    cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(8)').type(Web)
    cy.wait(1000);
    cy.get('[value="false"] > div > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(7000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
})}
    
export function View(){
    cy.get('[index="6"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
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
cy.wait(1000);
    cy.get('#VendorCode').type('00')
    cy.wait(1000);
    cy.get('#VendorCode').clear()
    cy.wait(1000);
    cy.get('#Vendor').type('test')
    cy.wait(1000);
    cy.get('#Vendor').clear()
    cy.wait(1000);
}
export function Delete(){
    cy.get('[index="6"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="6"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
}