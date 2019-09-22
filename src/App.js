import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles/style.scss';

import { Books, Main, EditBook, CreateBook } from './Components';

const client = new ApolloClient({
  uri: 'http://localhost:4567/graphql'
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Main>
          <Route exact path="/" component={Books} />
          <Route exact path="/create" component={CreateBook} />
          <Route exact path="/books/edit/:id" component={EditBook} />
        </Main>
      </Router>
    </ApolloProvider>
  );
};

export default App;
