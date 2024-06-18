import React, { useEffect, useState } from "react";
import { InputAuth } from "../../components";
import { ToastContainer, toast } from "react-toastify";
import icons from "../../assets";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, isLoggedIn, update } = useSelector((state) => state.auth);

  const [payload, setPayload] = useState({
    Gmail: "",
    Password: "",
  });

  useEffect(() => {
    if (isLoggedIn === false && message !== "") toast.error(message);
  }, [isLoggedIn, message, update]);

  useEffect(() => {
    if (isLoggedIn) {
      toast.success(message);
      navigate("/user");
    }
  }, [isLoggedIn, message, navigate]);

  const handleLogin = async () => {
    try {
      dispatch(actions.login(payload));
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleCheckboxChange = (e) => {
    // Do something when checkbox state changes
  };

  return (
    <div>
      <ToastContainer />
      <div className="flex justify-center px-2 lg:p-10 ">
        <div className="rounded-md bg-[#f6f6f6] p-4 shadow-sm md:w-3/6">
          <div className="flex flex-col gap-5 rounded-md bg-white p-6 shadow-sm">
            <h2 className="text-2xl">Login</h2>
            <p className="text-base font-bold text-tGrayColor">
              Login if you are a returning customer.
            </p>
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
              submit={handleLogin}
            />
            <div className="relative flex justify-between">
              <div className="flex items-center gap-2">
                <input
                  className="z-10 h-5 w-5 cursor-pointer appearance-none"
                  type="checkbox"
                  name="checkbox"
                  onChange={handleCheckboxChange} // Add onChange handler
                  checked
                  id=""
                />
                <span className="absolute z-0 h-5 w-5 rounded-[4px] border"></span>
                <icons.Mark
                  className="absolute translate-x-[19%]"
                  color="white"
                  size={14}
                />
                <label className="text-sm font-bold lg:text-base " htmlFor="">
                  Keep me logged in
                </label>
              </div>
              <button className="text-sm font-semibold text-secondaryColor hover:text-primaryColor lg:text-base ">
                Forgot Your Password?
              </button>
            </div>
            <button
              onClick={handleLogin}
              className="rounded-md bg-secondaryColor p-2 text-lg text-white hover:bg-primaryColor "
            >
              Login
            </button>
            <div className="relative flex justify-center">
              <span className="break-horizontal z-10 bg-white"></span>
              <span className="z-10 bg-white px-5 text-white">OR</span>
            </div>
            <div className="flex justify-around font-semibold text-white ">
              <button className="rounded-md bg-[#e94235] p-2 px-5 hover:bg-secondaryColor sm:px-14 md:px-3 lg:px-20">
                Google
              </button>
            </div>
            <p className="text-center text-base font-bold text-tGrayColor hover:text-secondaryColor">
              <Link to={"/register"}>Don't Have an Account? Sign up now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
