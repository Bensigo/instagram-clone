const todos = [
  { title: 'Learn to be the best', id: 1},
  { title: 'Learn apollo and vue', id: 2},
  { title: 'learn grapql for express', id: 3}
]

module.exports = {
  Query: {
    allTodos (root, args, context) {
      return todos
    }
  }
}
