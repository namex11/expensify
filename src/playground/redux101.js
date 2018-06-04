const resetCount = () =>({
    type: "RESET"
})

const setCount = ({count})=>({
    type: "SET",
    count
})

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      const incrementBy = typeof action.decrementBy === 'number'? action.decrementBy : 1
      return {
        count: state.count - incrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
          count: action.count
      }
    default:
      return state;
  }
});



const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'INCREMENT'
});


store.dispatch(resetCount());

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

store.dispatch(setCount({count: 500}));

unsubscribe();

/////////////////////////////////////////////////////////

const book={
    title: "Ego",
    author: "Ryan Holiday",
    publisher:{
        name: "Penguin"
    }
}

const {name : publisherName = 'Self-published'} = book.publisher;

console.log(publisherName);


const item = ["Cofee (shitty)", "$2", "$3", "$4"];

const [product = 'no product bitches', , cost] = item;

console.log(`${product} costs ${cost}`);
