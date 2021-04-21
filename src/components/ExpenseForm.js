import 'react-dates/initialize';
import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }
    

    handleChangeDescription = (e) => {
        const description = e.target.value;
        this.setState(() => ({
            description
        }));
    };

    handleChangeNote = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    handleChangeAmount = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    handleDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    handleFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            // set error state = 'Please provide the description and amount'
            this.setState(() => ({ error: 'Please provide the description and amount.' }))
        } else {
            // Clear the error
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                description: this.state.description,
                note: this.state.note
            })
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.handleChangeDescription}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.handleChangeAmount}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        focused={this.state.calendarFocused}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        onDateChange={this.handleDateChange}
                        onFocusChange={this.handleFocusChange}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.handleChangeNote}
                    ></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;