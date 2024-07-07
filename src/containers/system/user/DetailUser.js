import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import icons from "../../../assets";
import { ChangePassword, MyMap } from "../../../components";
import _ from "lodash";
import { apiUpdateInfoUser } from "../../../services";
import { toast } from "react-toastify";

const DetailUser = () => {
  const { userData } = useSelector((state) => state.user);
  const [user, setUser] = useState(userData);
  const [userInital, setUserInital] = useState(userData);

  useEffect(() => {
    setUser(userData);
    setUserInital(userData);
  }, [userData]);

  const handleAddressChange = (newAddress) => {
    setUser((prev) => ({
      ...prev,
      Address: newAddress,
    }));
  };

  const handleChangeInfoUser = async () => {
    try {
      const res = await apiUpdateInfoUser(user);
      toast.success(res.message);
    } catch (error) {}
  };

  return (
    <div className="flex flex-col items-start gap-5">
      <div className="flex flex-col gap-2">
        <icons.DetailUser className="" size={30} />
        <span className="text-2xl font-bold uppercase">My Details</span>
        <p className="text-sm">
          Feel free to edit any of your details below so your ASOS account is
          totally up to date. (* Indicates a required field).
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <label className="flex w-80 flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
            FULL NAME*:{" "}
          </span>
          <input
            className="border border-slate-500 p-3 px-4"
            type="text"
            value={user.Fullname || ""}
            onChange={(e) =>
              setUser((prev) => ({
                ...prev,
                Fullname: e.target.value,
              }))
            }
            placeholder="Enter your full name"
          />
        </label>
        <label className="flex w-80 flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
            Email*:{" "}
          </span>
          <input
            disabled
            className="border border-slate-500 p-3 px-4"
            placeholder="Enter your email"
            type="email"
            value={user.Gmail || ""}
            onChange={(e) =>
              setUser((prev) => ({
                ...prev,
                Gmail: e.target.value,
              }))
            }
          />
        </label>
        <label className="flex w-80 flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
            Phone_number*:{" "}
          </span>
          <input
            className="border border-slate-500 p-3 px-4"
            placeholder="Enter your phone number"
            type="number"
            value={user.Phone_number || ""}
            onChange={(e) =>
              setUser((prev) => ({
                ...prev,
                Phone_number: e.target.value,
              }))
            }
          />
        </label>
      </div>
      <div className="w-full">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          Address*:{" "}
        </span>
        <MyMap
          addressUser={user.Address}
          onAddressChange={handleAddressChange}
        />
      </div>
      <div className="flex w-full items-end justify-between">
        <button
          onClick={!_.isEqual(user, userInital) ? handleChangeInfoUser : null}
          className={`${
            !_.isEqual(user, userInital)
              ? "cursor-pointer bg-secondaryColor"
              : " "
          } mt-3 cursor-default bg-gray-300 p-2 px-24 font-semibold uppercase text-white`}
        >
          Save changes
        </button>
        <ChangePassword />
      </div>
    </div>
  );
};

export default DetailUser;
