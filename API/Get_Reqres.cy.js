/// <reference types="cypress"> />

describe('Get Reqres', () => {

    it('Validar LIST USERS retornando 200', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Validar body retornando no LIST USERS', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2',
            failOnStatusCode: false
        }).then((response) => {
            let retorno = response.body
            cy.log(JSON.stringify(retorno, null, 2))
        })
    })

    it('Validar SINGLE USERS retornando 200', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Validar body retornando no SINGLE USERS', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2',
            failOnStatusCode: false
        }).then((response) => {
            let retorno = response.body
            cy.log(JSON.stringify(retorno, null, 2))
        })
    })

    it('Validar SINGLE USERS sem informar id retornando 400', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
        })
    })

    it('Validar LIST USERS sem informar nenhuma pagina retornando 400', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
        })
    })

    it('Validar SINGLE USER NOT FOUND retornando 404', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/23',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404)
        })
    })
})