import expensesReducer from "../../reducers/expenses";
import expenses from '../fixtures/expenses';

test("should set default state", () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test("should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ])
});

test("should not remove any expense if id not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("should add an expense", () => {
    const action = {
        type: "ADD_EXPENSE",
        expense: {
            id: '4',
            description: 'Socks',
            note: 'Bought very much socks',
            amount: 1450,
            createdAt: 20000
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses,
        action.expense
    ]);
});

test("should edit an expense", ()=>{
    const action = {
        type: "EDIT_EXPENSE",
        id: '1',
        updates: {
            note: 'Dirolas'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toBe('Dirolas');
});

test("should not edit an expense if expense not found", ()=>{
    const action = {
        type: "EDIT_EXPENSE",
        id: '6',
        updates: {
            note: 'Dirolas'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});