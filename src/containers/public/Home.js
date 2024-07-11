import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PuffLoader from "react-spinners/PuffLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { categoriesData } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(actions.getCategories());
  }, [dispatch]);

  if (categoriesData.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center">
        <PuffLoader
          size="100px"
          speedMultiplier="2"
          color="rgba(238, 39, 97, 0.6)"
        />
      </div>
    );
  }

  return (
    <div className="">
      <ToastContainer />
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
