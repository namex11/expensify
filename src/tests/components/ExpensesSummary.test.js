import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';

test("should render ExpensesSummary with 1 expense", () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={1256} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpensesSummary with multiple expenses", ()=>{
    const wrapper =shallow(<ExpensesSummary expensesCount={24} expensesTotal={456945228} />);
    expect(wrapper).toMatchSnapshot();
});