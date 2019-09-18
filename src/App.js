import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles/style.scss';

import { Books, Main } from './Components';

const client = new ApolloClient({
  uri: 'http://localhost:4567/graphql'
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Main>
          <Route exact path="/" component={Books} />
          <Route exact path="/books/:id" component={Books} />
          <Route exact path="/books/edit/:id" component={Books} />
          <Route exact path="/books/create" component={Books} />
        </Main>
      </Router>
    </ApolloProvider>
  );
};

export default App;
