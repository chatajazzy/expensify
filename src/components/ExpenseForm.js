import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: 0,
    createdAt: moment(),
    calendarFocused: false
  };
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState({ description });
  };
  onNoteChange = e => {
    const note = e.target.value;
    this.setState({ note });
  };
  onAmountChange = e => {
    const amount = e.target.value;
    // valid format
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState({ amount });
    }
  };
  onDateChange = createdAt => {
    this.setState(() => ({ createdAt }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          placeholder="Add a note for your expnese (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        />
        <button>Add expense</button>
      </form>
    );
  }
}