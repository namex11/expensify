import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import '../locales/lt';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

const ExpensesSummary = (props) => (
    <div>
        {props.expensesCount <= 1 ? 
            <p>{`Viewing ${props.expensesCount} expense totaling ${props.expensesTotal}`}</p> 
            : 
            <p>{`Viewing ${props.expensesCount} expenses totaling ${props.expensesTotal}`}</p>
        }
    </div>
)


const mapStateToProps = ((state) =>{
    return {
        expensesCount: selectExpenses(state.expenses, state.filters).length,
        expensesTotal: numeral(selectExpensesTotal(selectExpenses(state.expenses, state.filters)) / 100).format('0,0[.]00 $')
    }
})

export default connect(mapStateToProps)(ExpensesSummary)