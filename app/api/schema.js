const resolvers = require ('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const Attributes = {
    User: `
        id: ID
        nome: String!
        email: String!
        password: String!
    `
}

const typeDefs = `
    type User {
        ${Attributes.User}
    }
    type Query {
        getUser(id: ID!): User
        getUsers: [User]
    }
    input UserInput {
        ${Attributes.User}
    }
    type Mutation {
        createUser(input: UserInput): User
    }
`

module.exports = makeExecutableSchema({ 
    typeDefs,
    resolvers
})