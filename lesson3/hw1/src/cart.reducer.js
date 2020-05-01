import { ADD_PRODUCT, REMOVE_PRODUCT } from "./cart.actions"

const initialState = {
  products: []
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      console.log(action.payload.productData)
      return {
        ...state,
        products: state.products.concat(action.payload.productData),
      }
    }
    case REMOVE_PRODUCT: {
      const newProducts = state.products.filter(product => product.id !== action.payload.productId)
      return {
        ...state,
        products: newProducts,
      }
    }
    default:
      return state;
  }
}