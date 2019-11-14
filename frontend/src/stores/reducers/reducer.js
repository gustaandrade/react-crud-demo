export const initialState = {
  cars: {},
  query: "",
  brands: {brands: [{id: "0", name: "dummy"}]},
  filteredCar: {}
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
      };

    case "ADD_BRANDS_TO_STORE":
      return {
        ...state,
        brands: action.brands
      };

    case "FILTER_CAR": 
      return {
        ...state,
        filteredCar: action.car
      };

    case "REGISTER_CAR":
      return {
        ...state,
        cars: [...state.cars.cars, action.car]
      };

    case "EDIT_CAR":
      return {
        ...state,
        cars: state.cars.cars[state.cars.cars.indexOf(action.car)] = action.car
      };

    case "DELETE_CAR":
      return {
        ...state,
        cars: state.cars.cars.filter(c => c.id !== action.car.id)
      };

    default:
      return state;
  }
}

export default reducer;