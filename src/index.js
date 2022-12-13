import React from 'react'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache, from } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { AppProvider } from './context/AppContext'

const httpLink = createHttpLink({
  uri: 'https://petgram-server-jsmithr.vercel.app/graphql'
})

const errorLink = onError(
  ({ networkError }) => {
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
)

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})
const client = new ApolloClient({
  cache: new InMemoryCache(),
  // link: authLink.concat(errorLink).concat(httpLink),
  link: from([
    errorLink,
    authLink,
    httpLink
  ])
})

const root = createRoot(document.getElementById('app'))

root.render(
  <AppProvider value={{ isAuth: false }}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>
)
