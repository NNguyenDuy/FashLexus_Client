import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import { useNavigate } from "react-router-dom";

const ItemDetailUser = ({ link, name, boder, icon, logout }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const active = "text-secondaryColor";
  const notActive = "text-black"; 

  useEffect(() => {
    if (isLoggedIn === false) navigate("/login");
  }, [isLoggedIn, navigate]);

  return (
    <>
      {logout === true ? (
        <NavLink to={link} onClick={() => dispatch(actions.Logout())}>
          <li className="flex items-center font-bold ">
            <span className="flex basis-1/4 justify-center py-4">{icon}</span>
            <span className={`w-full basis-3/4 py-4 ${boder && "border-b-2"}`}>
              {name}
            </span>
          </li>
        </NavLink>
      ) : (
        <NavLink
          className={({ isActive }) => (isActive ? active : notActive)}
          to={link}
        >
          <li className="flex items-center bg-white font-bold ">
            <span className="flex basis-1/4 justify-center py-4">{icon}</span>
            <span className={`w-full basis-3/4 py-4 ${boder && "border-b-2"}`}>
              {name}
            </span>
          </li>
        </NavLink>
      )}
    </>
  );
};

export default ItemDetailUser;
