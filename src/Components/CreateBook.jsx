import React from 'react';
import { useMutation } from 'react-apollo';
import { isFinite, isEmpty } from 'lodash';

import Form from './Form';
import { queries } from '../constants';

const CreateBook = () => {
  const [createBook, response] = useMutation(queries.ADD_BOOK);

  if (response.loading) {
    return <p>loading...</p>;
  }
  if (response.error) {
    return <p>Error :(</p>;
  }

  const onSubmit = (event, { title, author, price }) => {
    event.preventDefault();

    if (!isEmpty(title) && !isEmpty(author) && isFinite(parseInt(price, 10))) {
      createBook({
        variables: { title, author, price },
        refetchQueries: [{ query: queries.GET_BOOKS }]
      });
    }
  };

  const form = (
    <section className="create-book">
      <Form onSubmit={onSubmit} />
    </section>
  );

  return form;
};

CreateBook.propTypes = {};

export default CreateBook;
