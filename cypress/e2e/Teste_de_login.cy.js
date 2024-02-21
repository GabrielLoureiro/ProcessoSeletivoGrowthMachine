describe('validar Login de usuários', () => {

  beforeEach(() => {
    cy.visit('https://client.stg.growthstation.app/login');
  })
  
  
  it('Validar login de usuário correto', () => {    
    cy.get('.gap-2:nth-child(1) > .w-full').click();
    cy.get('.gap-2:nth-child(1) > .w-full').type(Cypress.env('user1'));
    cy.get('.flex:nth-child(2) > .w-full').click();
    cy.get('.flex:nth-child(2) > .w-full').type(Cypress.env('password1'));
    cy.get('.bg-orange-500').click();
  })


  it('Validar login com campo senha em branco', () => {    
    cy.get('.gap-2:nth-child(1) > .w-full').click();
    cy.get('.gap-2:nth-child(1) > .w-full').type(Cypress.env('user1'));
    cy.get('.flex:nth-child(2) > .w-full').click().blur();
    cy.get('.bg-orange-500').click();    
    cy.contains('*E-mail ou senha inválidos').should('be.visible');
    
  })


  it('Validar login com senha errada', () => {    
    cy.get('.gap-2:nth-child(1) > .w-full').click();
    cy.get('.gap-2:nth-child(1) > .w-full').type(Cypress.env('user1'));
    cy.get('.flex:nth-child(2) > .w-full').click();
    cy.get('.flex:nth-child(2) > .w-full').type(Cypress.env('error_password1'));;
    cy.get('.bg-orange-500').click();    
    cy.contains('*E-mail ou senha inválidos').should('be.visible');
    
  })


  it('Validar login com e-mail errado', () => {    
    cy.get('.gap-2:nth-child(1) > .w-full').click();
    cy.get('.gap-2:nth-child(1) > .w-full').type(Cypress.env('error1'));
    cy.get('.flex:nth-child(2) > .w-full').click();
    cy.get('.flex:nth-child(2) > .w-full').type(Cypress.env('password1'));
    cy.get('.bg-orange-500').click();
    cy.contains('*E-mail ou senha inválidos').should('be.visible');
  })

  it('Validar link de recuperação de senha', () => {    
    cy.contains('Esqueceu a senha?').click();
    cy.contains('Recuperar Senha').should('be.visible');
  })



})




