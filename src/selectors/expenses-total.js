export default (expenses) => {
    return expenses
        .map(expense => expense.amount)
        .reduce((acc, total) => acc + total, 0);
    
}
    



