import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import App from './App';
import { fetchExpenses } from './actions/expensesActions';
import { firebase } from './firebase';
import { login, logout } from './actions/authActions';
import LoadingPage from './components/LoadingPage';

export const history = createHistory();

const store = new configureStore(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Root = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
};

let hasRendered = false;

const renderAppOnce = () => {
  if (!hasRendered) {
    ReactDOM.render(<Root />, document.getElementById('root'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(fetchExpenses()).then(() => {
      renderAppOnce();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderAppOnce();
    history.push('/');
  }
});
