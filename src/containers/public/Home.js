import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
