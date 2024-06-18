import React from "react";

const InputAuth = ({ type, name, placeholder, value, setPayload, submit }) => {
  return (
    <input
      className="rounded-md border border-gray-300 p-3 focus:border-secondaryColor"
      type={type || ""}
      name={name || ""}
      placeholder={placeholder || ""}
      value={value || ""}
      onChange={(e) =>
        setPayload((pre) => ({ ...pre, [name]: e.target.value }))
      }
      onKeyDown={(e) => {
        if (e.key === "Enter" && typeof submit === "function") submit();
      }}
    />
  );
};

export default InputAuth;
