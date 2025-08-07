const request = require('supertest');
const {expect} = require('chai')
require('dotenv').config()
const {obterToken} = require('../helpers/autenticacao')
const postTranferencia = require('../fixtures/postTransferencia.json')

describe('Tranferências', () => {
    describe('POST /transferencias', () => {
        let token

        beforeEach(async () => {
            token = await obterToken('julio.lima', '123456')
        })

        it ('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de R$ 10,00', async () =>{ 
            const bodyTransferencia = { ...postTranferencia}
            
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencia)

            expect(resposta.status).to.equal(201);

        })

        it ('Deve retornar falha com 422 quando o valor da transferência for abaixo de R$ 10,00', async () =>{   
            const bodyTransferencia = { ...postTranferencia}
            bodyTransferencia.valor = 7
            
            const resposta = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencia)

            expect(resposta.status).to.equal(422);
        })
    })
})