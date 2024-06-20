import React, { memo } from "react";
import icons from "../../assets";

const Search = () => {
  return (
    <div className="flex border text-tGrayColor">
      <input
        className="cursor-text p-3 lg:w-96"
        type="text"
        placeholder="Keyword here..."
      />
      <button className="bg-secondaryColor p-3 px-4 text-white">
        <icons.Search size={26} />
      </button>
    </div>
  );
};

export default memo(Search);
