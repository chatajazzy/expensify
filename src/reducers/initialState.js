import moment from 'moment';

export const initialState = {
  expenses: [],
  filters: {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
};
