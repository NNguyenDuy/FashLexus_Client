import React from "react";
import { Link } from "react-router-dom";
import icons from "../../assets";

const CardProduct = ({ product }) => {
  let starts = [1, 2, 3, 4, 5];
  return (
    <div className="group/item flex flex-col  ">
      <Link to={`/details/id=${product.id}`} className="relative">
        <span className="absolute left-5 top-5 z-20 rounded-br-lg rounded-tl-lg bg-secondaryColor px-2 text-sm font-light leading-5 text-white">
          Sale
        </span>
        <img
          loading="lazy"
          src={
            JSON.parse(product.Images)[0] + "?$n_750w$&wid=750&fit=constrain"
          }
          alt=""
          className="w-full transition-opacity duration-500 ease-linear group-hover/item:opacity-0 "
        />
        <img
          src={
            JSON.parse(product.Images)[1] + "?$n_750w$&wid=750&fit=constrain"
          }
          alt=""
          className="absolute top-0 w-full opacity-0 transition-opacity duration-500 ease-linear group-hover/item:opacity-100"
        />
      </Link>
      <div className="mt-3 flex flex-col gap-2 text-xs text-gray-500 sm:text-sm ">
        <div className="ml-1 flex flex-col gap-2">
          <span>{product.Category.Name}</span>
          <h2 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-xs font-bold text-black sm:text-base">
            {product.Name}
          </h2>
          <div>
            <span>${product.Price}</span>
            <span className="m-2 inline-block h-[0.09rem] w-3 bg-bgBlackGray align-middle"></span>
            <span className="line-through">${product.Discount}</span>
          </div>
          <ul className="flex gap-2">
            {starts.map((i) => (
              <li key={i}>
                <icons.Start className="text-yellowColor" />
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex gap-1 text-xl">
          <li className="rounded-sm border p-1 px-2 transition-all duration-500 hover:bg-secondaryColor hover:text-white">
            <Link to={"user/cart"}>
              <icons.Cart />
              <span className="ml-1 hidden text-sm sm:inline">
                + Add to cart
              </span>
            </Link>
          </li>
          <li className="rounded-sm border p-1 px-2 transition-all duration-500 hover:bg-secondaryColor hover:text-white">
            <Link to={"user/wishlist"}>
              <icons.Heart />
            </Link>
          </li>
          <li className="cursor-pointer rounded-sm border p-1 px-2 transition-all duration-500 hover:bg-secondaryColor hover:text-white">
            <icons.Eye />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardProduct;
