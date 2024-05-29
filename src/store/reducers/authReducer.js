import actionsType from "../actions/actionsType";

// Check login and save token in localstorage
const initState = {
  isLoggedIn: false,
  token: null,
  message: "",
  update: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionsType.LOGIN_SUCCESS:
    case actionsType.REGISTER_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        token: action.data,
        message: action.message,
      };
    }
    case actionsType.LOGIN_FAIL:
    case actionsType.REGISTER_FAIL: {
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        message: action.message,
        update: !state.update,
      };
    }
    case actionsType.LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        message: "",
      };
    }
    default:
      return state;
  }
};

export default authReducer;
