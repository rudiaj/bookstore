import gql from 'graphql-tag';

const GET_BOOKS = gql`
  query books {
    books {
      title
      author
      price
      bookId
    }
  }
`;

const ADD_BOOK = gql`
  mutation createBook($title: String!, $author: String!, $price: Float!) {
    createBook(title: $title, author: $author, price: $price) {
      bookId
      title
      author
      price
    }
  }
`;

const UPDATE_BOOK = gql`
  mutation editBook($bookId: Int!, $title: String!, $author: String!, $price: Float!) {
    editBook(bookId: $bookId, title: $title, author: $author, price: $price) {
      bookId
      title
      author
      price
    }
  }
`;

const GET_BOOK = gql`
  query book($bookId: Int!) {
    book(bookId: $bookId) {
      bookId
      title
      author
      price
    }
  }
`;

export default { GET_BOOKS, ADD_BOOK, UPDATE_BOOK, GET_BOOK };
