import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const QUERY = gql`
  {
    books {
      title
      author
      price
      bookId
    }
  }
`;

const Books = () => {
  return (
    <Query query={QUERY}>
      {({ loading, error, data }) => {
        if (loading) {
          return <p>loading...</p>;
        }
        if (error) {
          return <p>Error</p>;
        }

        console.log(data);

        return (
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat placeat adipisci iure
            corrupti quae amet ipsa perspiciatis. Ut praesentium aliquam magni, tenetur minus
            nesciunt mollitia ea deleniti dolor. Voluptas, quaerat?
          </div>
        );
      }}
    </Query>
  );
};

Books.defaultProps = {};

Books.propTypes = {};

export default Books;
