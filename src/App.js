import React from 'react';
import './App.css';
import Form1 from './components/form1'
import Form2 from './components/form2'
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import fetch from 'unfetch';
import 'unfetch/polyfill'



const link = createHttpLink({ uri: "https://84b495db.ngrok.io/graphql" });
const cache = new InMemoryCache();
const client = new ApolloClient({ link, cache });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ApolloProvider client={client}>
          {/* <Form2></Form2> */}
          <Form1></Form1>
        </ApolloProvider>
      </header>
    </div>
  );
}

export default App;
