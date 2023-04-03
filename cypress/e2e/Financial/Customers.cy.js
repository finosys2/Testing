import { Login } from '../Login.cy.js';

describe('Customers', () => {
    it('Customers CRUD', () => {
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
    cy.fixture('CareOf').then((payload) => {
        const { CustomerCode } = payload.Header;
        const { Customer } = payload.Header;
        const { Alias } = payload.Header;
        const { NTN } = payload.Header;

        cy.visit('http://40.81.28.195:1550/Financials/Setup/Customers')
        cy.wait(2000);
        cy.get('.MuiContainer-root > .MuiFab-root').click()
        cy.wait(1000);
        cy.get('#CustomerCode').type(CustomerCode)
        cy.wait(1000);
        cy.get('#Customer').type(Customer)
        cy.wait(1000);
        cy.get('#Alias').type(Alias)
        cy.wait(1000);
        cy.get('#mui-29').type(NTN)
        cy.wait(1000);
        cy.get(':nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
        cy.wait(1000);
        cy.get('#Profile-undefined-option-1').click()
        cy.wait(1000);
        cy.get(':nth-child(2) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
        cy.wait(1000);
        cy.get('#PayTerm-PayTerm-option-1').click()
        cy.wait(1000);
        cy.get(':nth-child(3) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
        cy.wait(1000);
        cy.get('#ShipM-ShipM-option-1').click()
        cy.wait(1000);
        cy.get(':nth-child(4) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
        cy.wait(1000);
        cy.get('#CollectorDesc-undefined-option-0').click()
        cy.wait(1000);
        cy.get(':nth-child(6) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
        cy.wait(1000);
        cy.get('#orderBooker-undefined-option-0').click()
        cy.wait(1000);
        cy.get(':nth-child(10) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
        cy.wait(1000);
        cy.get('#CurName-CurName-option-5').click()
        cy.wait(1000);
        cy.get('#mui-30').type('1312')
        cy.wait(1000);
        cy.get(':nth-child(17) > div > .MuiFormControlLabel-root').click()
        cy.wait(1000);
        cy.get(':nth-child(18) > div > .MuiFormControlLabel-root').click()
        cy.wait(1000);
        cy.get('.MuiBox-root > div > .MuiFormControlLabel-root > .MuiTypography-root').click()
        cy.wait(1000);
        cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
        cy.wait(1000);
    })
}
export function Edit() {
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(2000);
    cy.get('#Customer').clear()
    cy.wait(1000);
    cy.get('#Customer').type('customer')
    cy.wait(1000);
    cy.get('#Alias').clear()
    cy.wait(1000);
    cy.get('#Alias').type('alias')
    cy.wait(1000);
    cy.get(':nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    cy.wait(1000);
    cy.get('#Profile-undefined-option-2').click()
    cy.wait(1000);
    cy.get(':nth-child(3) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    cy.wait(1000);
    cy.get('#ShipM-ShipM-option-1').click()
    cy.wait(1000);
    cy.get(':nth-child(4) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    cy.wait(1000);
    cy.get('#CollectorDesc-undefined-option-0').click()
    cy.wait(1000);
    cy.get(':nth-child(10) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    cy.wait(1000);
    cy.get('#CurName-CurName-option-5').click()
    cy.wait(1000);
    cy.get(':nth-child(17) > div > .MuiFormControlLabel-root').click()
    cy.wait(1000);
    cy.get('.MuiBox-root > div > .MuiFormControlLabel-root > .MuiTypography-root').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function View() {
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(1)').click()
    cy.wait(2000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
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
export function Search() {
    cy.get('#CustomerCode').type('00')
    cy.wait(1000);
    cy.get('#Customer').type('ABC')
    cy.wait(1000);
    cy.get('#CustomerCode').clear()
    cy.wait(1000);
    cy.get('#Customer').clear()
    cy.wait(1000);
}

