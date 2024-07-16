import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarUser } from "../../../components";

const User = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-center gap-2 bg-[#eeeeee] p-7 md:flex-row">
        <SidebarUser />
        <div className="w-full rounded-r-lg bg-white p-8 shadow-xl lg:w-10/12">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default User;
