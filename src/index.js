import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import App from './App';
import { fetchExpenses } from './actions/expensesActions';
import { firebase } from './firebase';

const store = new configureStore(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

// store.dispatch(fetchExpenses()).then(() => {
//   ReactDOM.render(<Root />, document.getElementById('root'));
// });

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('log in');
  } else {
    console.log('log out');
  }
});
