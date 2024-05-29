import actionsType from "../actions/actionsType";

const initState = {
  categoriesData: [],
  detailProduct: [],
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionsType.GET_CATEGORIES:
      return {
        ...state,
        categoriesData: action.data || [],
      };
    case actionsType.GET_DETAIL_PRODUCT:
      return {
        ...state,
        detailProduct: action.data || [],
      };
    default:
      return state;
  }
};

export default appReducer;
