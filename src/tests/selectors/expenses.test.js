import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

const expensesTestData = [{
    id: 1,
    description: "Gum",
    note: '',
    amount: 195,
    createdAt: 0
},
{
    id: 2,
    description: "Rent",
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: 3,
    description: "Credit card",
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}];

test("should filter by text value", () => {
    const filters = {
        text: "e",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expensesTestData, filters);
    expect(result).toEqual([
        expensesTestData[2],
        expensesTestData[1]
    ]);
});

test("should filter by startDate", ()=>{
    const filters = {
        text: '',
        sortBy: "date",
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expensesTestData, filters);
    expect(result).toEqual([
        expensesTestData[2],
        expensesTestData[0]
    ]);
});