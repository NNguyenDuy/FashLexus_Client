import actionsType from "./actionsType";
import * as api from "../../services";

export const getCart = (User_id) => async (dispatch) => {
  try {
    dispatch({ type: actionsType.CART_LOADING, loading: true });
    const response = await api.getCartInfo(User_id);
    dispatch({ type: actionsType.GET_CART, data: response });
  } catch (error) {
    dispatch({ type: actionsType.CART_ERROR, error: error.message || error });
  } finally {
    dispatch({ type: actionsType.CART_LOADING, loading: false });
  }
};

export const insertCart = (
  User_id,
  Cart_id,
  Product_id,
  Quantity,
  Color,
  Size,
) => async (dispatch) => {
  try {
    dispatch({ type: actionsType.CART_LOADING, loading: true });
    const response = await api.insertCart(User_id, Cart_id, Product_id, Quantity, Color, Size);
    // After insert, fetch latest cart
    dispatch(getCart(User_id));
    return response;
  } catch (error) {
    dispatch({ type: actionsType.CART_ERROR, error: error.message || error });
    throw error;
  } finally {
    dispatch({ type: actionsType.CART_LOADING, loading: false });
  }
};
