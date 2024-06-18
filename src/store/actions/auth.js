import actionsType from "./actionsType";
import { apiLoggin, apiRegister } from "../../services";

// when combine thunk it can return function
export const register = (payload) => async (dispatch) => {
  try {
    const response = await apiRegister(payload);
    const { token, message } = response;
    if (token !== null)
      dispatch({
        type: actionsType.REGISTER_SUCCESS,
        data: token,
        message: message,
      });
    else
      dispatch({
        type: actionsType.REGISTER_FAIL,
        data: null,
        message: message,
      });
  } catch (error) {
    dispatch({
      type: actionsType.REGISTER_FAIL,
      data: null,
      message: error.message,
    });
  }
};

export const clearMessage = () => ({
  type: actionsType.CLEAR_MESSAGE,
});

export const login = (payload) => async (dispatch) => {
  try {
    const response = await apiLoggin(payload);
    const { token, message } = response;
    if (token !== null)
      dispatch({
        type: actionsType.LOGIN_SUCCESS,
        data: token,
        message: message,
      });
    else
      dispatch({
        type: actionsType.LOGIN_FAIL,
        data: null,
        message: message,
      });
  } catch (error) {
    dispatch({
      type: actionsType.LOGIN_FAIL,
      data: null,
      message: error.message,
    });
  }
};

export const Logout = () => async (dispatch) => {
  try {
    dispatch({
      type: actionsType.LOGOUT,
    });
  } catch (error) {
    dispatch({
      type: actionsType.LOGOUT,
      message: error.message,
    });
  }
};
