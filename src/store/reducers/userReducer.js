import actionsType from "../actions/actionsType";

const initState = {
  userData: {},
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionsType.GET_USER:
      return {
        ...state,
        userData: action.data || {},
      };
    case actionsType.LOGOUT:
      return {
        ...state,
        userData: {},
      };
    default:
      return state;
  }
};

export default userReducer;
