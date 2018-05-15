import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddExpensePage from './components/AddExpensePage';
import ExpenseDashboardPage from './components/ExpenseDashboardPage';
import EditExpensePage from './components/EditExpensePage';
import Header from './components/Header';
import helpPage from './components/helpPage';
import notFoundPage from './components/notFoundPage';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Header />
          <main className="main">
            <Switch>
              <Route exact path="/" component={ExpenseDashboardPage} />
              <Route exact path="/create" component={AddExpensePage} />
              <Route exact path="/edit" component={EditExpensePage} />
              <Route exact path="/edit/:id" component={EditExpensePage} />
              <Route exact path="/help" component={helpPage} />
              <Route component={notFoundPage} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
