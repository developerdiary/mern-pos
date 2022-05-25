const initalState = {
  loading: false,
  cartItems: [],
};

export const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.playload],
      };
    default:
      return state;
  }
};
