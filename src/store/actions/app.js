import actionsType from "./actionsType";
import { apiCategies, apiGetDetailProduct } from "../../services";

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
