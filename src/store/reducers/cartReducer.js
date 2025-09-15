import actionsType from "../actions/actionsType";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.CART_LOADING:
      return { ...state, loading: action.loading };
    case actionsType.GET_CART:
      return { ...state, data: action.data, error: null };
    case actionsType.CART_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default cartReducer;
