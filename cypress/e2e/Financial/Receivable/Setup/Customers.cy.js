import { Login } from '../../../Login.cy.js';

describe('Customers', () => {
    it('Customers CRUD', () => {
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
    cy.visit('http://40.81.28.195:1110/Financials/Setup/Customers')
    cy.wait(2000);
    cy.fixture('Customers.json').then((payload) => {
        const CustomerCode = payload.validData.CustomerCode;
        const Customer = payload.validData.Customer;
        const Alias = payload.validData.Alias;
        const NTN = payload.validData.NTN;
        const CreditLimit = payload.validData.CreditLimit;
        const FinChInterestRate = payload.validData.FinChInterestRate;
        const MinInvValforFinCh = payload.validData.MinInvValforFinCh;

        cy.get('[aria-label="Add New"]').click()
        cy.wait(1000);
        cy.get('#Customers-CustomerCode').type(CustomerCode)
        cy.wait(1000);
        cy.get('#Customers-Customer').type(Customer)
        cy.wait(1000);
        cy.get('#Customers-Alias').type(Alias)
        cy.wait(1000);
        cy.get('#Customers-NTNNo').type(NTN)
        cy.wait(1000);
        cy.get(':nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
            .click().get('#Profile-undefined-option-1').click({ force: true })
        cy.wait(1000);
        cy.get(':nth-child(2) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
            .click().get('#PayTerm-PayTerm-option-1').click({ force: true })
        cy.wait(1000);
        cy.get(':nth-child(3) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
            .click().get('#ShipM-ShipM-option-1').click({ force: true })
        cy.wait(1000);
        cy.get(':nth-child(4) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
            .click().get('#CollectorDesc-undefined-option-0').click({ force: true })
        cy.wait(1000);
        cy.get(':nth-child(6) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
            .click().get('#orderBooker-undefined-option-0').click({ force: true })
        cy.wait(1000);
        cy.get(':nth-child(10) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
            .click().get('#CurName-CurName-option-5').click({ force: true })
        cy.wait(1000);
        cy.get('#Customers-CreditLimit').clear()
        cy.get('#Customers-CreditLimit').type(CreditLimit)
        cy.wait(1000);
        //changeInterest
        // cy.get('#root > div > main > div > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-2.css-mhc70k-MuiGrid-root > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4.css-1lj5egr-MuiGrid-root > div > div > div > div > div:nth-child(1) > div > div > label > span.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiCheckbox-root.MuiCheckbox-colorPrimary.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root')
        // .click()
        // cy.wait(1000);
        // cy.get('#Customers-FinChInterestRate').clear()
        // cy.get('#Customers-FinChInterestRate').type(FinChInterestRate)
        // cy.wait(1000);
        // cy.get('#Customers-MinInvValforFinCh').clear()
        // cy.get('#Customers-MinInvValforFinCh').type(MinInvValforFinCh)
        // cy.wait(1000);
        //Add btn
        // cy.get('.MTableToolbar-title-10 > div > .MuiButtonBase-root').click()
        // cy.wait(1000);
        cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
        cy.wait(1000);
        cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
        cy.wait(1000);
    })
}
export function View() {
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(1)').click()
    cy.wait(2000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Edit() {
    cy.fixture('Customers.json').then((payload) => {
        const Customer = payload.validData.Customer;
        const Alias = payload.validData.Alias;
        cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
        cy.wait(2000);
        cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
        cy.wait(2000);
        cy.get('#Customers-Customer').clear()
        cy.get('#Customers-Customer').type(Customer)
        cy.wait(1000);
        cy.get('#Customers-Alias').clear()
        cy.get('#Customers-Alias').type(Alias)
        cy.wait(1000);
        cy.get(':nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
            .click().get('#Profile-undefined-option-2').click({ force: true })
        cy.wait(1000);
        cy.get(':nth-child(3) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
            .click().get('#ShipM-ShipM-option-1').click({ force: true })
        cy.wait(1000);
        cy.get(':nth-child(4) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
            .click().get('#CollectorDesc-undefined-option-0').click({ force: true })
        cy.wait(1000);
        cy.get(':nth-child(10) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
            .click().get('#CurName-CurName-option-5').click({ force: true })
        cy.wait(1000);
        cy.get(':nth-child(17) > div > .MuiFormControlLabel-root').click()
        cy.wait(1000);
        cy.get('.MuiBox-root > div > .MuiFormControlLabel-root > .MuiTypography-root').click()
        cy.wait(1000);
        cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
        cy.wait(1000);
    })
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
    cy.get('#CustomerCode').type('00')
    cy.wait(1000);
    cy.get('#Customer').type('ABC')
    cy.wait(1000);
    cy.get('#CustomerCode').clear()
    cy.wait(1000);
    cy.get('#Customer').clear()
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

