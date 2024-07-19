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
  const [newData, setData] = useState([]);
  const errorLink = onError(({ graphqlErrors, networkError}) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
        alert(`GraphQL err ${message}`)
      })
    }
  });

  const link = from([
    errorLink,
    new HttpLink({uri: 'https://api.uno.kg/graphql/'})
  ])

  const client = new ApolloClient({
    cache: new InMemoryCache,
    link: link,
  })

  const globalData = (data) => {
    setData(data);
  }

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
