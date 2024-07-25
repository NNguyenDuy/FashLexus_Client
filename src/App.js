import React, { useEffect } from "react";
import RenderRoutes from "./components/Header/RenderRoutes";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./store/actions";

function App() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    isLoggedIn &&
      setTimeout(() => {
        dispatch(actions.getUser());
      }, 100);
  }, [dispatch, isLoggedIn, userData?.Fullname]);

  return (
    <div className="relative w-full">
      <RenderRoutes />
    </div>
  );
}

export default App;
