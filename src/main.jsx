import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloClient,InMemoryCache,ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

const client = new ApolloClient({
  uri : "https://khoros-graphql-api.vercel.app/api/graphql",
  cache : new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
