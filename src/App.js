import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import AddExpensePage from './components/AddExpensePage';
import ExpenseDashboardPage from './components/ExpenseDashboardPage';
import EditExpensePage from './components/EditExpensePage';
import Header from './components/Header';
import notFoundPage from './components/notFoundPage';
import './firebase';
import './App.scss';
import LoginPage from './components/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <main className="main">
          <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
            <PrivateRoute path="/create" component={AddExpensePage} />
            <PrivateRoute path="/edit/:id" component={EditExpensePage} />
            <Route component={notFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
