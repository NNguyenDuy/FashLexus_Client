import actionsType from "./actionsType";
import { apiGetUser } from "../../services";
import * as actions from "../actions";

export const getUser = () => async (dispatch) => {
  try {
    const response = await apiGetUser();
    const { userData, error, message } = response;
    if (error === 401 || error === 403) dispatch(actions.Logout());
    if (error === 1)
      dispatch({
        type: actionsType.GET_USER,
        data: userData,
        message: message,
      });
    else
      dispatch({
        type: actionsType.GET_USER,
        data: null,
        message: message,
      });
  } catch (error) {
    dispatch({
      type: actionsType.GET_USER,
      data: null,
      message: error.message,
    });
  }
};
