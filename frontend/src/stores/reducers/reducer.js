export const initialState = {
  cars: {},
  query: ""
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_CARS_TO_STORE":
      return {
        ...state, 
        cars: action.cars
      };
    case "ADD_QUERY_TO_STORE":
      return {
        ...state,
        query: action.query
      }
    default:
      return state;
  }
}

export default reducer;