import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useMutation, useQuery } from 'react-apollo';
import { isFinite, isEmpty } from 'lodash';

import Form from './Form';
import { queries } from '../constants';

const EditBook = ({
  match: {
    params: { id }
  }
}) => {
  const [editBook, response] = useMutation(queries.UPDATE_BOOK, {
    refetchQueries: [
      { query: queries.GET_BOOKS },
      { query: queries.GET_BOOK, variables: { bookId: id } }
    ]
  });
  const { loading, error, data } = useQuery(queries.GET_BOOK, {
    variables: { bookId: id }
  });

  const onSubmit = (event, { title, author, price }) => {
    event.preventDefault();

    if (!isEmpty(title) && !isEmpty(author) && isFinite(parseInt(price, 10))) {
      editBook({
        variables: { bookId: id, title, author, price }
      });
    }
  };

  if (response.loading) {
    return <p>loading...</p>;
  }
  if (response.error) {
    return <p>Error :(</p>;
  }

  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <section className="edit-book">
      <Form onSubmit={onSubmit} defaultValues={data.book} />
    </section>
  );
};

EditBook.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default withRouter(EditBook);
