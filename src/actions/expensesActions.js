import appConstants from '../constants/appConstants';
import database from '../firebase';

// ADD_EXPENSE
export const addExpense = expense => ({
  type: appConstants.ADD_EXPENSE,
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const uid = getState().auth.uid;
    const expense = { description, note, amount, createdAt };

    database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: appConstants.REMOVE_EXPENSE,
  id
});

// START_REMOVE_EXPENSE
export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        // tell redux that expense was successfuly removed
        dispatch(removeExpense({ id }));
      });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: appConstants.EDIT_EXPENSE,
  id,
  updates
});

// START_EDIT_EXPENSE
export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .update(updates)
      .then(() => {
        // tell redux that expense was successfuly updated
        dispatch(editExpense(id, updates));
      });
  };
};

// SET_EXPENSES
export const setExpenses = expenses => ({
  type: appConstants.SET_EXPENSES,
  expenses
});

// FETCH_EXPENSES
export const fetchExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .once('value')
      .then(snapshot => {
        const expenses = [];

        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        // tell redux that data is successfuly fetched
        dispatch(setExpenses(expenses));
      });
  };
};
