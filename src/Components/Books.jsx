import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Article from './Article';
import { queries } from '../constants';

const Books = ({ history: { push } }) => {
  const [totalSelected, setTotalSelected] = useState(0);

  return (
    <Query query={queries.GET_BOOKS}>
      {({ loading, error, data }) => {
        if (loading) {
          return <p>loading...</p>;
        }
        if (error) {
          return <p>Error</p>;
        }

        const { books } = data;

        return (
          <div className="books">
            <h1 className="h1">Selected: {totalSelected}</h1>
            <div className="books-list-wrapper">
              <div className="books-list">
                {books.map(book => {
                  return (
                    <Article
                      book={book}
                      push={push}
                      key={book.bookId}
                      onCheckboxChange={setTotalSelected}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

Books.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(Books);
