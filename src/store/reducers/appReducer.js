import actionsType from "../actions/actionsType";

const initState = {
  categoriesData: [],
  detailProduct: [],
  productListCart: [],
  infoReviewProduct: {
    totalReview: 0,
    avgRating: 0,
  },
  reviews: [],
  productsCategory: [],
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
    case actionsType.GET_PRODUCT_LISTCART:
      return {
        ...state,
        productListCart: action.data || [],
      };
    case actionsType.GET_INFO_REVIEWS:
      return {
        ...state,
        infoReviewProduct: action.data || {},
      };
    case actionsType.GET_REVIEWS_PRODUCT:
      return {
        ...state,
        reviews: action.data || [],
      };
    case actionsType.GET_PRODUCT_CATEGORY:
      return {
        ...state,
        productsCategory: action.data || [],
      };
    default:
      return state;
  }
};

export default appReducer;
