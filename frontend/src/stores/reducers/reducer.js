export const initialState = {
  query: ""
}

const reducer = (state = initialState, action) => {
  // switch(action.type) {
  //   case "ADD_PRODUCTS_TO_STORE":
  //     return {
  //       ...state, 
  //       products: action.products
  //     };

  //   case "ADD_PRODUCT_TO_CART": 
  //     return {
  //       ...state,
  //       cart: [...state.cart, action.product]
  //     }

  //   default:
  //     return state;
  // }
  return state;
}

export default reducer;