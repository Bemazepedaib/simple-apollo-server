// Libraries
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';

// resolvers
import { resolvers } from './resolvers.js';

// type definitions
import { typeDefs } from './typeDefs.js';

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

console.log(`🚀 Server ready at: ${url}`)