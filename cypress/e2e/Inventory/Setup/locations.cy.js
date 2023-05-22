import { Login} from "../../Login.cy.js"

describe('Locations', () => {
    it('Locations CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();       
        Edit();
        Delete();
        Download();
    })
})

export function Save() {
    //cy.visit('http://40.81.28.195:1110/Inventory/Setup/Locations')
    cy.visit('https://apps.finosys-sbs.com/Inventory/Setup/Locations')
    cy.wait(2000);
    cy.fixture('Locations.json').then((payload) => {
        console.log({ payload: payload.validData })
        const LocationCode = payload.validData.LocationCode
        const Location = payload.validData.Location
        const ContactPerson = payload.validData.ContactPerson
        const Designation = payload.validData.Designation
        const Email = payload.validData.Email
        const Country = payload.validData.Country
        const City = payload.validData.City
        const Province = payload.validData.Province
        const Address1 = payload.validData.Address1
        const Address2 = payload.validData.Address2
        const Address3 = payload.validData.Address3
        const FaxNo = payload.validData.FaxNo

    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get('#LocationsModule-LocationCode').type(LocationCode)
    cy.wait(1000);
    cy.get('#LocationsModule-Location').type(Location)
    cy.wait(1000);
    cy.get('#LocationsModule-ContactPerson').type(ContactPerson)
    cy.wait(1000);
    cy.get('#LocationsModule-Designation').type(Designation)
    cy.wait(1000);
    cy.get('#LocationsModule-Email').type(Email)
    cy.wait(1000);
    cy.get('#LocationsModule-Address1').type(Address1)
    cy.wait(1000);
    cy.get('#LocationsModule-Address2').type(Address2)
    cy.wait(1000);
    cy.get('#LocationsModule-Address3').type(Address3)
    cy.wait(1000);
    cy.get('#LocationsModule-City').type(City)
    cy.wait(1000);
    cy.get('#LocationsModule-Province').type(Province)
    cy.wait(1000);
    cy.get('#LocationsModule-Country').type(Country)
    cy.wait(1000);
    cy.get('#LocationsModule-PhoneNo').type(ContactPerson)
    cy.wait(1000);
    cy.get('#LocationsModule-FaxNo').type(FaxNo)
    cy.wait(1000);
    cy.get('#LocationsModule-MobileNo').type(ContactPerson)
    cy.wait(1000);
     //save button
    cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(1000);
    //back button
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
})}
export function Edit() {
    cy.fixture('Locations.json').then((payload) => {
        console.log({ payload: payload.validData })
        const Location = payload.validData.Location
        const ContactPerson = payload.validData.ContactPerson
        const Designation = payload.validData.Designation
        const Email = payload.validData.Email
        const Address1 = payload.validData.Address1

    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('#LocationsModule-Location').clear()
    cy.get('#LocationsModule-Location').type(Location)
    cy.wait(1000);
    cy.get('#LocationsModule-ContactPerson').clear()
    cy.get('#LocationsModule-ContactPerson').type(ContactPerson)
    cy.wait(1000);
    cy.get('#LocationsModule-Designation').clear()
    cy.get('#LocationsModule-Designation').type(Designation)
    cy.wait(1000);
    cy.get('#LocationsModule-Email').clear()
    cy.get('#LocationsModule-Email').type(Email)
    cy.wait(1000);
    cy.get('#LocationsModule-Address1').clear()
    cy.get('#LocationsModule-Address1').type(Address1)
    cy.wait(1000);
    cy.get('#LocationsModule-PhoneNo').clear()
    cy.get('#LocationsModule-PhoneNo').type(ContactPerson)
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
})}
export function Delete() {
    cy.get('[index="2"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
    cy.get('[index="2"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
}
export function Download() {
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(2000);
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(2000);
}