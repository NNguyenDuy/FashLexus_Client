import actionsType from "./actionsType";
import {
  apiCategies,
  apiGetDetailProduct,
  apiGetListCart,
  apiTotalReviews,
  apiReviewsProduct,
  apiProductsCategory,
  apiTotalProductsCategory,
} from "../../services";

export const getCategories = () => async (dispatch) => {
  try {
    const response = await apiCategies();
    const { categories, error, message } = response;
    if (error === 1)
      dispatch({
        type: actionsType.GET_CATEGORIES,
        data: categories,
        message: message,
      });
    else
      dispatch({
        type: actionsType.GET_CATEGORIES,
        data: null,
        message: message,
      });
  } catch (error) {
    dispatch({
      type: actionsType.GET_CATEGORIES,
      data: null,
      message: error.message,
    });
  }
};

export const getDetailProduct = (payload) => async (dispatch) => {
  try {
    const product = await apiGetDetailProduct(payload);
    dispatch({
      type: actionsType.GET_DETAIL_PRODUCT,
      data: product,
    });
  } catch (error) {
    dispatch({
      type: actionsType.GET_DETAIL_PRODUCT,
      data: null,
    });
  }
};

export const getProductListCart = (payload) => async (dispatch) => {
  try {
    const products = await apiGetListCart(payload);
    dispatch({
      type: actionsType.GET_PRODUCT_LISTCART,
      data: products,
    });
  } catch (error) {
    dispatch({
      type: actionsType.GET_PRODUCT_LISTCART,
      data: null,
    });
  }
};

export const getInfoReviews = (payload) => async (dispatch) => {
  try {
    const info = await apiTotalReviews(payload);
    dispatch({
      type: actionsType.GET_INFO_REVIEWS,
      data: info,
    });
  } catch (error) {
    dispatch({
      type: actionsType.GET_INFO_REVIEWS,
      data: null,
    });
  }
};

export const getReviewsProduct = (payload) => async (dispatch) => {
  try {
    const reviews = await apiReviewsProduct(payload);
    dispatch({
      type: actionsType.GET_REVIEWS_PRODUCT,
      data: reviews,
    });
  } catch (error) {
    dispatch({
      type: actionsType.GET_REVIEWS_PRODUCT,
      data: null,
    });
  }
};

export const getProductsCategory = (payload) => async (dispatch) => {
  try {
    const products = await apiProductsCategory(payload);
    dispatch({
      type: actionsType.GET_PRODUCT_CATEGORY,
      data: products,
    });
  } catch (error) {
    dispatch({
      type: actionsType.GET_PRODUCT_CATEGORY,
      data: null,
    });
  }
};

export const getTotalProductsCategory = (payload) => async (dispatch) => {
  try {
    const total = await apiTotalProductsCategory(payload);
    dispatch({
      type: actionsType.GET_TOTAL_PRODUCT_CATEGORY,
      data: total,
    });
  } catch (error) {
    dispatch({
      type: actionsType.GET_TOTAL_PRODUCT_CATEGORY,
      data: null,
    });
  }
};
