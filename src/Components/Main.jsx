import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ children }) => {
  return <section className="main">{children}</section>;
};

Main.propTypes = {
  children: PropTypes.node.isRequired
};

export default Main;
