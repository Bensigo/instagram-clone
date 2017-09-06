module.exports = `
  type Todos {
    id: ID
    title: String
  }
  type Query {
    allTodos: [Todos]
  }
`
