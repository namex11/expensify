import configureStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense, setExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const mockStore = configureStore([ReduxThunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref('expenses').set(expensesData).then(() => done());
})

test("should setup remove expense action object", () => {
    const action = removeExpense({ id: "123abc" });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});

test("should setup edit expense action object", () => {
    const action = editExpense("123abc", { note: "New note value" });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates: {
            note: "New note value"
        }
    });
});

test("should setup add expense action object with provided values", () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    });
});

test("should add expense to database and redux store", (done) => {
    const store = mockStore({});
    const expenseData = {
        description: 'Pencil',
        amount: 120,
        note: 'cheap pencil',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        //returning a promise
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        //success case of a promise
    }).then((dataSnapshot) => {
        expect(dataSnapshot.val()).toEqual(expenseData);
        done();
    });
});

test("should add expense with default values to database and redux store", (done) => {
    const store = mockStore({});
    const expenseDefaults = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });
        //returning a promise
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        //success case of a promise
    }).then((dataSnapshot) => {
        expect(dataSnapshot.val()).toEqual(expenseDefaults);
        done();
    });
});

test("should setup set expense action object with data", ()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
});