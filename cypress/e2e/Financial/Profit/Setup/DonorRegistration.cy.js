import { Login } from '../../../Login.cy.js';

describe('Donor Registration', () => {
    it('Donor Registration CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();       
        Edit();
        View();
        Delete();
        Download();
        Search();
    })
})

export function Save() {
    cy.fixture('DonorReg').then((payload) => {
        const DonorCode = payload.validData.DonorCode;
        const DonorName = payload.validData.DonorName;
        const Cnic = payload.validData.Cnic;
        const NTN = payload.validData.NTN;
        const Email = payload.validData.Email;
        const Address = payload.validData.Address;
        const City = payload.validData.City;
        const Country = payload.validData.Country;
        const Phone1 = payload.validData.Phone1;
        const Phone2 = payload.validData.Phone2;
        cy.visit('http://40.81.28.195:1550/Financials/Setup/DonorRegistration')
        cy.wait(2000);
        cy.get('.MuiContainer-root > .MuiFab-root').click()
        cy.wait(1000);
        cy.get('#mui-77').type(DonorCode, { force: true })
        cy.wait(1000);
        cy.get('#mui-78').click()
        cy.wait(1000);
        cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
        cy.wait(1000);
        cy.get('#DonorName').type(DonorName, { force: true })
        cy.wait(1000);
        cy.get(':nth-child(4) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click().get('#Parent-undefined-option-0').click()
        cy.wait(1000);
        cy.get(':nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click().get('#CareOf-undefined-option-0').click()
        cy.wait(1000);
        cy.get('#mui-79').type(Cnic, { force: true })
        cy.wait(1000);
        cy.get('#mui-80').type(NTN, { force: true })
        cy.wait(1000);
        cy.get('#Email').type(Email, { force: true })
        cy.wait(1000);
        cy.get('#Address').type(Address, { force: true })
        cy.wait(1000);
        cy.get('#City').type(City, { force: true })
        cy.wait(1000);
        cy.get('#Country').type(Country, { force: true })
        cy.wait(1000);
        cy.get('#mui-81').type(Phone1, { force: true })
        cy.wait(1000);
        cy.get('#mui-82').type(Phone2, { force: true })
        cy.wait(1000);
        cy.get('.MuiFormControlLabel-root > .MuiTypography-root').click()
        cy.wait(1000);
        cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
        cy.wait(1000);
    })
}

export function Edit() {
    cy.fixture('DonorReg').then((payload) => {
        const DonorName = payload.validData.DonorName;
        const Cnic = payload.validData.Cnic;
        const Email = payload.validData.Email;
        cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
        cy.wait(2000);
        cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
        cy.wait(2000);
        cy.get('#mui-90').click()
        cy.wait(1000);
        cy.get('.MuiPaper-root > .MuiList-root > .Mui-selected').click()
        cy.wait(1000);
        cy.get('#DonorName').clear()
        cy.wait(1000);
        cy.get('#DonorName').type(DonorName, { force: true })
        cy.wait(1000);
        cy.get(':nth-child(4) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
        cy.wait(1000);
        cy.get(':nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click().get('#CareOf-undefined-option-1').click()
        cy.wait(1000);
        cy.get('#mui-91').clear()
        cy.wait(1000);
        cy.get('#mui-91').type(Cnic, { force: true })
        cy.wait(1000);
        cy.get('#Email').clear()
        cy.wait(1000);
        cy.get('#Email').type(Email, { force: true })
        cy.wait(1000);
        cy.get('.MuiFormControlLabel-root > .MuiTypography-root').click()
        cy.wait(1000);
        cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click
        cy.wait(1000);
    })
}

export function View() {
    cy.visit('http://40.81.28.195:1550/Financials/Setup/DonorRegistration')
    cy.wait(2000);
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(1)').click()
    cy.wait(2000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
}

export function Delete() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(2000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(2000);
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
export function Search() {
    cy.get('#DonorCode').type('4447')
    cy.wait(1000);
    cy.get('#DonorName').type('donor')
    cy.wait(1000);
    cy.get('#DonorCode').clear()
    cy.wait(1000);
    cy.get('#DonorName').clear()
    cy.wait(1000);
}