export const initialState = {
  cars: [{
    brand: "Chevrolet",
    color: "Azul marinho",
    id: 1,
    km: 106041,
    model: "Celta",
    price: 11772.22,
    title: "Celta Azul 2005 Ar e Direção",
    year: 2005
  }],
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