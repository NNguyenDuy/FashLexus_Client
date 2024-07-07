import React, { useState } from "react";
import { Drawer } from "antd";

const ChangePassword = () => {
  const [open, setOpen] = useState(false);
  const showDefaultDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Drawer
        title={`Change password`}
        placement="left"
        height={300}
        onClose={onClose}
        className=""
        open={open}
      >
        <div className="flex flex-col gap-6">
          <label className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              New password:{" "}
            </span>
            <input
              className="border border-slate-500 p-3 px-4"
              type="text"
              placeholder="Enter your new password"
            />
          </label>
          <div className="flex justify-between">
            <input
              className="border border-slate-500 w-4/6 p-3 px-4"
              type="number"
              placeholder="Enter your OTP sended gmail"
            />
            <button className="rounded-sm bg-secondaryColor px-3 text-sm font-semibold text-white duration-300 hover:bg-primaryColor">
              Send OTP
            </button>
          </div>
          <button className="rounded-sm bg-primaryColor p-3 px-3 text-sm font-semibold text-white duration-300 hover:bg-secondaryColor">
            Apply
          </button>
        </div>
      </Drawer>
      <button
        onClick={showDefaultDrawer}
        className="rounded-sm bg-secondaryColor p-2 px-5 text-sm font-semibold text-white"
      >
        Change Password
      </button>
    </div>
  );
};

export default ChangePassword;
