/// <reference types="cypress"> />

describe('Menu 4all Tests', () => {

    it('Validar acesso a pagina Home', () => {
        cy.visit('http://www.4alltests.com.br') 

    } )


    it('Validar acesso a pagina Ferramentas (Radar Ferramentas 2023)', () => {
        cy.visit('http://www.4alltests.com.br') 

        cy.get('#nav > :nth-child(1) > :nth-child(2) > :nth-child(1)').click()

        cy.get('body > ul > li:nth-child(1) > a').click()
    } )         

    it('Validar acesso a pagina Ferramentas (Ferramentas 4AllTests)', () => {
        cy.visit('http://www.4alltests.com.br') 

      
         cy.get('#nav > :nth-child(1) > :nth-child(2) > :nth-child(1)').click()

        cy.get('body > ul > li:nth-child(4) > a').click()

        cy.get('body > ul > li.opener > ul > li:nth-child(1) > a').click()
        
    })          

    it('Validar acesso a pagina Eventos', () => {
        cy.visit('http://www.4alltests.com.br') 
    
        cy.get('#nav > :nth-child(1) > :nth-child(3) > a').click()
    } )

    it('Validar acesso a pagina Vagas', () => {
        cy.visit('http://www.4alltests.com.br') 
    
        cy.get('#nav > :nth-child(1) > :nth-child(4) > a').click()
    } )

    it('Validar acesso a pagina Comunidades', () => {
        cy.visit('http://www.4alltests.com.br') 
    
        cy.get(':nth-child(1) > :nth-child(5) > a').click()
    } )

    it('Validar acesso a pagina Cursos', () => {
        cy.visit('http://www.4alltests.com.br') 
    
        cy.get(':nth-child(1) > :nth-child(6) > a').click()
    } )

    it('Validar acesso a pagina Referências', () => {
        cy.visit('http://www.4alltests.com.br') 
    
        cy.get(':nth-child(1) > :nth-child(7) > a').click()
    } )

    it('Validar acesso a pagina Blog', () => {
        cy.visit('http://www.4alltests.com.br') 
    
        cy.get(':nth-child(1) > :nth-child(8) > a').click()
    } )

   
})
  