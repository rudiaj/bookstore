import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Article = ({ onCheckboxChange, push, book: { bookId, price, title, author } }) => {
  const [checked, setChecked] = useState(false);

  const onChange = ({ target }) => {
    if (target.checked) {
      setChecked(true);
      onCheckboxChange(prev => prev + 1);
    } else {
      setChecked(false);
      onCheckboxChange(prev => prev - 1);
    }
  };

  return (
    <article className="books-list-item">
      <span className="price">${price}</span>
      <span className="title">{title}</span>
      <span className="author">{author}</span>
      <div className="buttons-wrapper">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <button
          type="button"
          onClick={() => {
            push(`/books/edit/${bookId}`);
          }}
        >
          <i className="material-icons">edit</i>
        </button>
      </div>
    </article>
  );
};

Article.propTypes = {
  push: PropTypes.func.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  book: PropTypes.shape({
    bookId: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Article;
