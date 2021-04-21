import 'react-dates/initialize';
import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import { 
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate
} from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null,
    };

    handleChangeDates = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    handleChangeFocus = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    handleTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    handleSortByChange = (e) => {
        switch (e.target.value) {
            case 'amount':
                this.props.sortByAmount();
                break;
            case 'date':
                this.props.sortByDate();
                break;
            default:
                this.props.sortByDate();
                break;
        }
    };

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={this.handleTextChange}
                />
        
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={this.handleSortByChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDateId="id1"
                    endDateId="id2"
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    focusedInput={this.state.calendarFocused}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                    onDatesChange={this.handleChangeDates}
                    onFocusChange={this.handleChangeFocus}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);