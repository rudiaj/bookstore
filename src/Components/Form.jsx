import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

const Form = ({ onSubmit, defaultValues }) => {
  const [title, setTitle] = useState(isEmpty(defaultValues) ? '' : defaultValues.title);
  const [author, setAuthor] = useState(isEmpty(defaultValues) ? '' : defaultValues.author);
  const [price, setPrice] = useState(isEmpty(defaultValues) ? '' : defaultValues.price);

  return (
    <form onSubmit={event => onSubmit(event, { title, author, price })}>
      <div className="form-group">
        <label htmlFor="tite">
          Title:
          <input
            name="title"
            type="text"
            value={title}
            onChange={({ target: { value } }) => setTitle(value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="author">
          Auhor:
          <input
            name="author"
            type="text"
            value={author}
            onChange={({ target: { value } }) => setAuthor(value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="price">
          Price:
          <input
            name="price"
            type="text"
            value={price}
            onChange={({ target: { value } }) => setPrice(value)}
          />
        </label>
      </div>
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
};

Form.defaultProps = {
  defaultValues: {}
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.number
  })
};

export default Form;
