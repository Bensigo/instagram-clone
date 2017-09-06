const {makeExecutableSchema} = require('graphql-tools')
/**
 * require the modules for schema and rosovler
 */
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const graphqlSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = graphqlSchema
