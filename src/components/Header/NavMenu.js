import React, { memo } from "react";
import { paths } from "../../ultis/constant";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

import icons from "../../assets";
const NavMenu = ({ categories }) => {
  const menuItems = (
    <Menu className="">
      {categories.map((index) => (
        <Menu.Item key={index.id}>
          <NavLink
            className=" hover:!text-secondaryColor"
            to={"categories/" + index.Category_path}
          >
            {index.Name}
          </NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );

  const active = "text-secondaryColor font-medium";
  const notActive = "text-black hover:text-secondaryColor";
  return (
    <ul className="flex gap-7 text-lg ">
      {paths.map(({ show, path, value }, index) => {
        if (show && value !== "Categories") {
          return (
            <li key={index} className="cursor-pointer ">
              <NavLink
                className={({ isActive }) => (isActive ? active : notActive)}
                to={path}
              >
                {value}
              </NavLink>
            </li>
          );
        } else if (show && value === "Categories") {
          return (
            <Dropdown
              overlay={menuItems}
              className="cursor-pointer"
              key={index}
            >
              <li
                onClick={(e) => e.preventDefault()}
                className="cursor-pointer hover:text-secondaryColor"
              >
                <Space className="relative">
                  {value} <DownOutlined />
                  <icons.Down className="absolute right-1 -translate-y-1/2" />
                </Space>
              </li>
            </Dropdown>
          );
        } else return null;
      })}
    </ul>
  );
};

export default memo(NavMenu);
