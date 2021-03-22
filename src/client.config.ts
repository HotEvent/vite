import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'http://localhost:5000/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
    defaultOptions: {
        query: {
            fetchPolicy: 'network-only',
            notifyOnNetworkStatusChange: true
        },
        watchQuery: {
            fetchPolicy: 'no-cache',
            notifyOnNetworkStatusChange: true
        }
    }
})
export { apolloClient }