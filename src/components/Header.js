import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Expensify</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact={true} activeClassName="is-active">
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
      </header>
    );
  }
}
