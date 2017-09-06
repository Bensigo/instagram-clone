const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {graphiqlExpress, graphqlExpress} = require('apollo-server-express')
const passport = require('passport')
const morgan = require('morgan')

/**
 *  require app modules 
 */
const graphqlSchema = require('./graphql/')

const app = express()
const port = process.env.PORT || 5050

/**
 * setting up middleware for the app
 */
app.use(morgan('combined'))
app.use(cors())
app.use(passport.initialize())
app.use(passport.session())

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: graphqlSchema
}))

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))
/**
 * setting up error handler for 404 
 */
app.use((req, res, next) => {
  res.status(404).send({
    message: 'oops page found vist /graphiql to use the api.:)'
  })
})

app.listen(port, () => {
  console.log(`😀 😀 😋  graphql server starting on localhost:${port}/graphiql`)
})
