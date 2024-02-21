describe('validar Login de usuários', () => {

  beforeEach(() => {
    cy.visit('https://client.stg.growthstation.app/login');
  })
  
  
  
  
  it('Validar acesso a página do Playbook', () => {
    cy.get('.gap-2:nth-child(1) > .w-full').click();
    cy.get('.gap-2:nth-child(1) > .w-full').type(Cypress.env('user1'));
    cy.get('.flex:nth-child(2) > .w-full').click();
    cy.get('.flex:nth-child(2) > .w-full').type(Cypress.env('password1'));
    cy.get('.bg-orange-500').click();
    cy.wait(5000);
    cy.contains('Materiais').should('be.visible');
    cy.contains('Conteúdos').click();
    cy.contains('Playbook').click();
    cy.contains('Introdução').should('be.visible');    

  })
})

/*describe('Validar busca por conteúdo existente', () => {
  it('passes', () => {
    cy.visit('https://client.stg.growthstation.app/login');
    cy.get('.gap-2:nth-child(1) > .w-full').click();
    cy.get('.gap-2:nth-child(1) > .w-full').type(Cypress.env('user1'));
    cy.get('.flex:nth-child(2) > .w-full').click();
    cy.get('.flex:nth-child(2) > .w-full').type(Cypress.env('password1'));
    cy.get('.bg-orange-500').click();
    cy.wait(5000);
    cy.get('.whitespace-nowrap').type('sdr');
    cy.contains('Descrição de vaga de SDR/BDR').should('be.visible');

  })
})*/









 