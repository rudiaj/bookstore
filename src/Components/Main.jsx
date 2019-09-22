import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Main = ({ children }) => {
  return (
    <section className="main">
      <aside className="side-bar">
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink exact to="/" activeClassName="active">
                <i className="material-icons">search</i>
                Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/create" activeClassName="active">
                <i className="material-icons">add</i>
                Create
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      {children}
    </section>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired
};

export default Main;
