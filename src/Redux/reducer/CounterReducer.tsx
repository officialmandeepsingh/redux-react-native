const initialState = {
  count: 0,
  changeCountValue: 1,
};

const CounterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'changeCount':
      return {...state, changeCountValue: action.value};
    case 'Increment':
      return {...state, count: state.count + parseInt(state.changeCountValue)};
    case 'Decrement':
      return {...state, count: state.count - parseInt(state.changeCountValue)};
    default:
      return {...state};
  }
};

export default CounterReducer;
