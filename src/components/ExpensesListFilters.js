import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { DateRangePicker } from 'react-dates';
import * as filtersActions from '../actions/filtersActions';

class ExpensesListFilters extends Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(filtersActions.setStartDate(startDate));
    this.props.dispatch(filtersActions.setEndDate(endDate));
  };
  onFocusChange = focusedInput => {
    this.setState({ focusedInput });
  };

  render() {
    const { dispatch } = this.props;
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              className="text-input"
              type="text"
              placeholder="Search expenses"
              defaultValue={this.props.filters.text}
              onChange={e =>
                dispatch(filtersActions.setTextFilter(e.target.value))
              }
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              onChange={e =>
                e.target.value === 'date'
                  ? dispatch(filtersActions.sortByDate())
                  : dispatch(filtersActions.sortByAmount())
              }
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              startDateId={uuid()}
              endDate={this.props.filters.endDate}
              endDateId={uuid()}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.focusedInput}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              showClearDates={true}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    filters: state.filters
  };
}

export default connect(mapStateToProps)(ExpensesListFilters);
