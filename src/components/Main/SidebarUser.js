import React, { useEffect, useState } from "react";
import ItemDetailUser from "./ItemDetailUser";
import icons from "../../assets";
import { pathsUser } from "../../ultis/constant";
import { getFirstString } from "../../ultis/common";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import { Link, useNavigate } from "react-router-dom";

const SidebarUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const { userData } = useSelector((state) => state.user);

  useEffect(() => {
    setTimeout(() => {
      dispatch(actions.getUser());
      setUsername(userData?.Fullname);
    }, 100);
  }, [userData?.Fullname, dispatch, navigate]);

  return (
    <div className="flex w-full justify-between gap-3 md:w-60 md:flex-col">
      <div className="flex w-full items-center gap-5 rounded-tl-lg bg-white py-10 shadow-sm">
        <Link
          to={"*"}
          className="-ml-4 flex h-24 w-24 items-center justify-center rounded-full bg-bgBlackGray text-4xl font-bold text-white"
        >
          {getFirstString(username || "")}
        </Link>
        <div>
          <p>Hi,</p>
          <p className="font-bold">{username}</p>
        </div>
      </div>
      <div className="w-full rounded-bl-lg bg-white shadow-md">
        <ul className="flex flex-col justify-center">
          {pathsUser.map((item, index) => {
            return (
              item?.show && (
                <ItemDetailUser
                  key={index}
                  border={true}
                  icon={item.icon}
                  name={item.value}
                  link={item.path}
                />
              )
            );
          })}
          <ItemDetailUser
            icon={<icons.Logout size={25} />}
            name={"Logout"}
            logout={true}
          />
        </ul>
      </div>
    </div>
  );
};

export default SidebarUser;
