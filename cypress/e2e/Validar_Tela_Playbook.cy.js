describe('validar tela do Playbook', () => {

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

  it('Validar busca por conteúdo existente', () => {
    cy.visit('https://client.stg.growthstation.app/login');
    cy.get('.gap-2:nth-child(1) > .w-full').click();
    cy.get('.gap-2:nth-child(1) > .w-full').type(Cypress.env('user1'));
    cy.get('.flex:nth-child(2) > .w-full').click();
    cy.get('.flex:nth-child(2) > .w-full').type(Cypress.env('password1'));
    cy.get('.bg-orange-500').click();
    cy.wait(3000);
    cy.contains('Materiais').should('be.visible');
    cy.contains('Conteúdos').click();
    cy.contains('Playbook').click();
    cy.contains('Introdução').should('be.visible'); 
    cy.get('.whitespace-nowrap').type('sdr');    
    cy.contains('5.2.1. Como funciona o nosso plano de onboarding de SDR').click();

  })


  it('Validar editar texto no playbook', () => {
    cy.get('.gap-2:nth-child(1) > .w-full').click();
    cy.get('.gap-2:nth-child(1) > .w-full').type(Cypress.env('user1'));
    cy.get('.flex:nth-child(2) > .w-full').click();
    cy.get('.flex:nth-child(2) > .w-full').type(Cypress.env('password1'));
    cy.get('.bg-orange-500').click();
    cy.wait(3000);
    cy.contains('Materiais').should('be.visible');
    cy.contains('Conteúdos').click();
    cy.contains('Playbook').click();
    cy.contains('Introdução').should('be.visible');
    cy.get('button[class*="p-3"]').click()
    cy.contains('vindx').type(' teste do teste');
    cy.get('button[class*="p-3"]').click()
  })


  it('Validar busca por conteúdo inexistente', () => {
    cy.visit('https://client.stg.growthstation.app/login');
    cy.get('.gap-2:nth-child(1) > .w-full').click();
    cy.get('.gap-2:nth-child(1) > .w-full').type(Cypress.env('user1'));
    cy.get('.flex:nth-child(2) > .w-full').click();
    cy.get('.flex:nth-child(2) > .w-full').type(Cypress.env('password1'));
    cy.get('.bg-orange-500').click();
    cy.wait(3000);
    cy.contains('Materiais').should('be.visible');
    cy.contains('Conteúdos').click();
    cy.contains('Playbook').click();
    cy.contains('Introdução').should('be.visible'); 
    cy.get('.whitespace-nowrap').type('asasdasd');    
    
  })

})
