import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "antd";
import Search from "./Search";
import icons from "../../assets";
const NavPage = ({ icon, name, path, count, responsive }) => {
  const [open, setOpen] = useState(false);
  const showDefaultDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="">
      <Drawer
        title={`Search Products`}
        placement="top"
        size={"default"}
        height={300}
        onClose={onClose}
        closable={false}
        className=""
        open={open}
        extra={
          <icons.Close
            onClick={onClose}
            className="ahihi cursor-pointer transition-all duration-300 hover:scale-150"
          />
        }
      >
        <div className="flex w-full items-center justify-center">
          <div className="w-3/4">
            <Search />
          </div>
        </div>
      </Drawer>
      {path !== null ? (
        <Link
          to={path}
          className={`flex cursor-pointer flex-col items-center justify-center text-tGrayColor ${
            responsive ? "hidden lg:flex" : ""
          }`}
        >
          <div className="relative">
            {icon}
            {count && (
              <span className="absolute -translate-x-2 -translate-y-4 rounded-full bg-secondaryColor p-1 px-[0.4rem] text-[10px] text-white">
                01
              </span>
            )}
          </div>
          <span className="hidden sm:block">{name}</span>
        </Link>
      ) : (
        <div
          className={`flex cursor-pointer flex-col items-center justify-center text-tGrayColor ${
            responsive ? "hidden lg:flex" : ""
          }`}
          onClick={showDefaultDrawer}
        >
          <div className="relative">
            {icon}
            {count && (
              <span className="absolute -translate-x-2 -translate-y-4 rounded-full bg-secondaryColor p-1 px-[0.4rem] text-[10px] text-white">
                01
              </span>
            )}
          </div>
          <span className="hidden sm:block">{name}</span>
        </div>
      )}
    </div>
  );
};

export default memo(NavPage);
