// Libraries
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
// Defining a simple GraphQL schema
// Schemas define the way a query is executed against data
const typeDefs = `
    type Book {
        title: String
        author: String
    }

    type Query {
        books: [Book]
    }
`;
// Defining simple example data
const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin'
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster'
    }
];
// Defining a simple GraphQL resolvers
// Resolvers define how to fetch the types defined in the schema
const resolvers = {
    Query: {
        books: () => books
    }
};
// Defining a standaloneServer from apollo
const server = new ApolloServer({
    typeDefs,
    resolvers
});
// Passing an ApolloServer instance to the startStandaloneServer 
/*
    This creates an Express App
    Installs the apollo server instance as a middleware
    Prepares the app to handle incoming request
*/
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀 Server ready at: ${url}`);
