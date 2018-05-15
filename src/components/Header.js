import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/authActions';

const Header = props => {
  return (
    <header>
      <h1>
        <Link to="/">Expensify</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="is-active">
              Dashboard
            </NavLink>
            <NavLink to="/create" activeClassName="is-active">
              Create Expense
            </NavLink>
            <NavLink to="/edit" activeClassName="is-active">
              Edit Expense
            </NavLink>
            <NavLink to="/help" activeClassName="is-active">
              Help
            </NavLink>
          </li>
        </ul>
      </nav>
      <button onClick={props.startLogout}>Logout</button>
    </header>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
