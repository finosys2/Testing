
export function Login() {

  //cy.visit('http://localhost:1750/login')
  cy.visit('https://apps.finosys-sbs.com/login')
  //cy.visit('http://40.81.28.195:1110/login')
  cy.get('#outlined-adornment-email-login').type('admin')
  cy.get('#outlined-adornment-password-login').type('Asdqwe123')
  cy.get('.MuiButton-root').click()
 

//cy.get('.MuiChip-root').click()
//cy.get('#root > div > header > div > div.MuiBox-root.css-x5zaxz > div').click()
cy.wait(1000)

}