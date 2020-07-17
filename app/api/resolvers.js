const database = require('../config/database');
module.exports = {
    Query: {
        async getUser(_, { id }){
            return await database('users').where({ id });
        },
        async getUsers(_, { offset, limit }){
            return await database('users')
        }   
    },
    Mutation: {
        async createUser(_, { input }){
            const result = await database('users').insert({ 
                nome: input.nome,
                email: input.email,
                password: input.password
            
            });
            const UsId = result[0];
            return await database('users').where({id: UsId}).first();
        }
    }
}