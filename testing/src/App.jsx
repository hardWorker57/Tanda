import { useEffect, useState } from 'react'
import './App.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client"
import {ErrorLink, onError} from "@apollo/client/link/error"
import GetData from './components/specials/GetData2'
// import GetData from './components/specials/GetData'

function App() {
  const errorLink = onError(({ graphqlErrors, networkError}) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
        alert(`GraphQL err ${message}`)
      })
    }
  });

  const link = from([
    errorLink,
    new HttpLink({uri: 'https://api.tanda.kg/graphql/'})
  ])

  const client = new ApolloClient({
    cache: new InMemoryCache,
    link: link,
  })

  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </ApolloProvider>
  )
}

export default App
