// Defining a simple GraphQL schema
// Schemas define the way a query is executed against data

const typeDefs = `
    type Movie {
        id: ID
        title: String
        director: String
        duration: String
        poster: String
    }

    type Query {
        movies: [Movie]
        movie(id: ID!): Movie
    }

    type Mutation {
        addMovie(title: String!, director: String!, duration: String!, poster: String!): Movie
        deleteMovie(id: ID!): String
    }
`

export { typeDefs };