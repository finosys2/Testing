import { Login} from "../../Login.cy.js"

describe('Locations', () => {
    it('Locations CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();       
        Edit();
        View();
        Delete();
        Download();
    })
})

export function Save() {
    cy.visit('http://40.81.28.195:1110/Inventory/Setup/Locations')
    cy.wait(2000);
    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get('#LocationsModule-LocationCode').type(43)
    cy.wait(1000);
    cy.get('#LocationsModule-Location').type("Location")
    cy.wait(1000);
    cy.get('#LocationsModule-ContactPerson').type("Contact")
    cy.wait(1000);
    cy.get('#LocationsModule-Designation').type("Designation")
    cy.wait(1000);
    cy.get('#LocationsModule-Email').type("erumr3@gmail.com")
    cy.wait(1000);
    cy.get('#LocationsModule-Address1').type("Address1")
    cy.wait(1000);
    cy.get('#LocationsModule-Address2').type("Address2")
    cy.wait(1000);
    cy.get('#LocationsModule-Address3').type("Address3")
    cy.wait(1000);
    cy.get('#LocationsModule-City').type("City")
    cy.wait(1000);
    cy.get('#LocationsModule-Province').type("Province")
    cy.wait(1000);
    cy.get('#LocationsModule-Country').type("country")
    cy.wait(1000);
    cy.get('#LocationsModule-PhoneNo').type("123456789")
    cy.wait(1000);
    cy.get('#LocationsModule-FaxNo').type("1234567")
    cy.wait(1000);
    cy.get('#LocationsModule-MobileNo').type("123456789")
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function View() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Edit() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('#LocationsModule-ContactPerson').clear()
    cy.get('#LocationsModule-ContactPerson').type("Contact")
    cy.wait(1000);
    cy.get('#LocationsModule-Designation').clear()
    cy.get('#LocationsModule-Designation').type("Designation")
    cy.wait(1000);
    cy.get('#LocationsModule-Email').clear()
    cy.get('#LocationsModule-Email').type("erumr3@gmail.com")
    cy.wait(1000);
    cy.get('#LocationsModule-Address1').clear()
    cy.get('#LocationsModule-Address1').type("Address1")
    cy.wait(1000);
    cy.get('#LocationsModule-PhoneNo').clear()
    cy.get('#LocationsModule-PhoneNo').type("123456789")
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2)').click()
    cy.wait(1000);
}
export function Delete() {
    cy.get('[index="5"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
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