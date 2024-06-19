import React, { useEffect, useState } from "react";
import { InputAuth } from "../../components";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import icons from "../../assets";
import * as actions from "../../store/actions";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, isLoggedIn, update } = useSelector((state) => state.auth);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [payload, setPayload] = useState({
    Fullname: "",
    Gmail: "",
    Password: "",
    Repassword: "",
  });

  useEffect(() => {
    if (isLoggedIn === false && message !== "") {
      toast.error(message);
      dispatch(actions.clearMessage());
    }
  }, [isLoggedIn, message, update, dispatch]);

  useEffect(() => {
    if (isLoggedIn) navigate("/user");
  }, [isLoggedIn, message, navigate]);

  const handleRegister = async () => {
    try {
      if (payload.Fullname === "") throw new Error("Fullname is required");
      if (!emailRegex.test(payload.Gmail))
        throw new Error("Invalid email address");
      if (payload.Password.length < 8)
        throw new Error("Password must be at least 8 characters long");
      if (payload.Password !== payload.Repassword)
        throw new Error("Passwords do not match");
      dispatch(actions.register(payload));
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-center px-2 lg:p-10 ">
        <div className=" rounded-md bg-[#f6f6f6] p-4 shadow-sm md:w-3/6">
          <div className="flex flex-col gap-5 rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl">Create an Account</h2>
            <p className="text-base font-bold text-tGrayColor">
              Register here if you are a new customer
            </p>
            <InputAuth
              type="text"
              name="Fullname"
              placeholder="Username"
              value={payload.Fullname}
              setPayload={setPayload}
            />
            <InputAuth
              type="email"
              name="Gmail"
              placeholder="Email Address"
              value={payload.Gmail}
              setPayload={setPayload}
            />
            <InputAuth
              type="password"
              name="Password"
              placeholder="Password"
              value={payload.Password}
              setPayload={setPayload}
            />
            <InputAuth
              type="password"
              name="Repassword"
              placeholder="Confirm Password"
              value={payload.Repassword}
              setPayload={setPayload}
              submit={handleRegister}
            />
            <button
              className="mt-3 rounded-md bg-secondaryColor p-2 text-lg text-white hover:bg-primaryColor"
              type="submit"
              onClick={handleRegister}
            >
              Submit & Register
            </button>
            <div className="flex w-full justify-around">
              <div className="relative flex items-center gap-2">
                <input
                  className="z-10 h-5 w-5 cursor-pointer appearance-none"
                  type="checkbox"
                  name="checkbox"
                  id=""
                />
                <span className="absolute z-0 h-5 w-5 rounded-[4px] border"></span>
                <icons.Mark
                  className="absolute translate-x-[19%]"
                  color="white"
                  size={14}
                />
                <label className="font-bold" htmlFor="">
                  I have read and agree to the terms & conditions
                </label>
              </div>
              <Link
                className="font-bold hover:text-secondaryColor"
                to={"/login"}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
