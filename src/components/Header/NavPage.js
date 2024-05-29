import React, { memo } from "react";
import { Link } from "react-router-dom";

const NavPage = ({ icon, name, path, count, responsive }) => {
  return path !== null ? (
    <Link
      to={path}
      className={`flex cursor-pointer flex-col items-center justify-center text-tGrayColor ${
        responsive === true ? "hidden lg:flex" : ""
      }`}
    >
      <div className="relative">
        {icon}
        {count && (
          <span
            className={`absolute -translate-x-2 -translate-y-4 rounded-full bg-secondaryColor p-1 px-[0.4rem] text-[10px] text-white `}
          >
            01
          </span>
        )}
      </div>
      <span className="hidden sm:block ">{name}</span>
    </Link>
  ) : (
    <div
      to={path}
      className={`flex cursor-pointer flex-col items-center justify-center text-tGrayColor ${
        responsive === true ? "hidden lg:flex" : ""
      }`}
    >
      <div className="relative">
        {icon}
        {count && (
          <span
            className={`absolute -translate-x-2 -translate-y-4 rounded-full bg-secondaryColor p-1 px-[0.4rem] text-[10px] text-white `}
          >
            01
          </span>
        )}
      </div>
      <span className="hidden sm:block ">{name}</span>
    </div>
  );
};

export default memo(NavPage);
