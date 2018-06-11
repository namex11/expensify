import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expensesTestData from '../fixtures/expenses';

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

test("should filter by endDate", ()=>{
    const filters = {
        text: '',
        sortBy: "date",
        startDate: undefined,
        endDate: moment(0)
    }
    const result = selectExpenses(expensesTestData, filters);
    expect(result).toEqual([
        expensesTestData[0],
        expensesTestData[1]
    ]);
});

test("should sort by date", ()=>{
    const filters = {
        text: '',
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expensesTestData, filters);
    expect(result).toEqual([
        expensesTestData[2],
        expensesTestData[0],
        expensesTestData[1]
    ]);
});

test("should sort by amount", ()=>{
    const filters = {
        text: '',
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expensesTestData, filters);
    expect(result).toEqual([
        expensesTestData[1],
        expensesTestData[2],
        expensesTestData[0]
    ]);
});