import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getCategories());
  }, [dispatch]);

  return (
    <div className="">
      <ToastContainer />
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
