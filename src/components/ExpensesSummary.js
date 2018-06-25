import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import '../locales/lt';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

const ExpensesSummary = (props) => {
    const expenseWord = props.expensesCount <= 1 ? 'expense' : 'expenses'
    return (
        <div>
            <p>{`Viewing ${props.expensesCount} ${expenseWord} totaling ${props.expensesTotal}`}</p>
        </div>
    )
}


const mapStateToProps = ((state) => {
    return {
        expensesCount: selectExpenses(state.expenses, state.filters).length,
        expensesTotal: numeral(selectExpensesTotal(selectExpenses(state.expenses, state.filters)) / 100).format('0,0[.]00 $')
    }
})

export default connect(mapStateToProps)(ExpensesSummary)