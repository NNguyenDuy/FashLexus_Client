import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarUser } from "../../../components";

const User = () => {
  return (
    <>
      <div className="grid grid-flow-row items-start gap-2 bg-[#eeeeee]  p-7 md:grid-flow-col lg:px-12">
        <SidebarUser />
        <div className="col-span-3 rounded-r-lg bg-white p-8 shadow-xl">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default User;
