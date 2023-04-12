// Defining a simple GraphQL schema
// Schemas define the way a query is executed against data

const typeDefs = `
    type Movie {
        id: String
        title: String
        director: String
        duration: String
        poster: String
    }

    type Query {
        movies: [Movie]
    }
`

export { typeDefs };