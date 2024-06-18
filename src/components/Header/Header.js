import React, { useState, useEffect, useRef } from "react";
import icons from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { NavMenu, NavPage, Search, NavBar } from "..";
import { paths } from "../../ultis/constant";
import { useSelector } from "react-redux";
import { Drawer, Menu } from "antd";

const Header = () => {
  const { categoriesData } = useSelector((state) => state.app);

  const [fix, setFix] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const scrollYRef = useRef(0);

  const setFixed = () => {
    scrollYRef.current = window.scrollY;
    setFix(scrollYRef.current > 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", setFixed);
    showNav
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, [showNav]);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const items = paths
    .filter((item) => item.show)
    .map((item) => ({
      key: item.path,
      label: item.value,
      children:
        item.value === "Categories" &&
        categoriesData.map((i) => ({
          key: "categories/" + i.Category_path,
          label: i.Name,
        })),
    }));

  const onClick = (e) => {
    navigate(e.key);
  };

  return (
    <div className="w-full">
      <div className="flex h-12 items-center justify-center bg-secondaryColor px-10 text-white lg:justify-start">
        <ul className="relative grid grid-cols-1 justify-center gap-4 lg:grid-cols-3">
          <li>Welcome to Netmark online Store</li>
          <li className="vertical_dash_before hidden lg:block">
            <span className="p-4">
              {<icons.Bus size={20} className="scale-x-[-1]" />}
            </span>
            Track Your Order
          </li>
          <li className="vertical_dash_before hidden lg:block">
            <span className="p-4">{<icons.Email size={20} />}</span>
            <a href="Email">duydadaga1@gmail.com</a>
          </li>
        </ul>
      </div>
      <div
        className={`flex h-20 w-full items-center bg-white px-10 text-[15px] ${
          fix ? "fixed top-0 z-40 shadow-md" : ""
        } `}
      >
        {!fix && (
          <div className="mt-2 flex w-full items-center justify-between ">
            <div className="cursor-pointer lg:hidden ">
              <icons.Menu size={30} onClick={showDrawer} />
              <Drawer
                placement={"left"}
                closable={false}
                onClose={onClose}
                className="!w-56 md:!w-80"
                open={open}
              >
                <div className="px-7 pt-7">
                  <Link to={paths[1].path}>
                    <img
                      src="https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/logo/nav-log.png"
                      alt="Logo"
                    />
                  </Link>
                </div>
                <Menu
                  className="mt-2 flex w-full flex-col gap-1 !border-none text-base"
                  onClick={onClick}
                  mode="inline"
                  items={items}
                />
              </Drawer>
            </div>
            {showNav && <NavBar setShowNav={setShowNav} />}
            <Link to={paths[1].path}>
              <img
                src="https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/logo/nav-log.png"
                alt="Logo"
              />
            </Link>
            <div className="hidden lg:block">
              <Search />
            </div>
            <div className="flex gap-5 ">
              <NavPage
                icon={<icons.User color="#606060" size={23} />}
                name={"My Account"}
                path={"user"}
              />
              <NavPage
                icon={<icons.Heart color="#606060" size={23} />}
                name={"Wish list"}
                path={"wishlist"}
                count={true}
                responsive={true}
              />
              <NavPage
                icon={
                  <icons.Cart color="#606060" strokeWidth={0.3} size={23} />
                }
                name={"My Cart"}
                path={"user/cart"}
                count={true}
              />
            </div>
          </div>
        )}
        {fix && (
          <div className="flex w-full justify-between">
            <div className="cursor-pointer lg:hidden ">
              <icons.Menu size={30} onClick={showDrawer} />
              <Drawer
                placement={"left"}
                closable={false}
                onClose={onClose}
                className="!w-56 md:!w-80"
                open={open}
              >
                <div className="px-7 pt-7">
                  <Link to={paths[0].path}>
                    <img
                      src="https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/logo/nav-log.png"
                      alt="Logo"
                    />
                  </Link>
                </div>
                <Menu
                  className="mt-2 flex w-full flex-col gap-1 !border-none text-base"
                  onClick={onClick}
                  mode="inline"
                  items={items}
                />
              </Drawer>
            </div>
            {showNav && <NavBar setShowNav={setShowNav} />}
            <Link to={"/"}>
              <img
                src="https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/logo/nav-log.png"
                alt="Logo"
              />
            </Link>
            <div className="hidden lg:block ">
              <NavMenu categories={categoriesData} />
            </div>
            <div className="flex gap-5 ">
              <NavPage
                icon={
                  <icons.Search color="#606060" strokeWidth={1} size={23} />
                }
                path={null}
                responsive={true}
              />
              <NavPage
                icon={<icons.User color="#606060" size={23} />}
                path={"login"}
              />
              <NavPage
                icon={<icons.Heart color="#606060" size={23} />}
                path={"wishlist"}
                count={true}
                responsive={true}
              />
              <NavPage
                icon={
                  <icons.Cart color="#606060" strokeWidth={0.3} size={23} />
                }
                path={"user/cart"}
                count={true}
              />
            </div>
          </div>
        )}
      </div>
      <nav className="hidden h-14 items-center justify-between border-t  px-10 lg:flex  ">
        <NavMenu categories={categoriesData} />
        <p className="flex items-center gap-2">
          <img
            src="https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/icon/lamp.png"
            alt=""
          />
          <span>Special up to 60% Off all item</span>
        </p>
      </nav>
    </div>
  );
};

export default Header;
