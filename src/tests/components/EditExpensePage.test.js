import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

test("should render EditExpensePage", ()=>{
    const editExpense = jest.fn();
    const wrapper = shallow(<EditExpensePage expense={expenses[0]}  />);
    expect(wrapper).toMatchSnapshot();
});

