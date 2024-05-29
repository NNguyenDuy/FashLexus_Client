import { combineReducers } from "redux";
import { authReducer, userReducer, appReducer } from "./index";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";

const persistConfig = {
  storage,
  // Resolve conflicts during state restoration using autoMergeLevel2 strategy
  stateReconciler: autoMergeLevel2,
};

// Save statement
const authConfig = {
  ...persistConfig,
  key: "auth",
  whitelist: ["isLoggedIn", "token"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  user: userReducer,
  app: appReducer,
});

export default rootReducer;
