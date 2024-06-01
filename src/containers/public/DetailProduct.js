import React, { memo, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import icons from "../../assets";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Select, Radio } from "antd";

const DetailProduct = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { detailProduct } = useSelector((state) => state.app);
  const [currentImage, setCurrentImage] = useState(0);
  const [numberProduct, setNumberProduct] = useState(1);

  const handleDecsProduct = () => {
    if (numberProduct > 1) {
      setNumberProduct((prevNumberProduct) => prevNumberProduct - 1);
    }
  };

  const handleIncsProduct = () => {
    setNumberProduct((prevNumberProduct) => prevNumberProduct + 1);
  };

  useEffect(() => {
    dispatch(actions.getDetailProduct(params.productId));
  }, [params.productId, dispatch]);

  return (
    <section>
      {detailProduct.Images && (
        <div className="flex flex-wrap justify-center gap-8 sm:my-20 lg:flex-nowrap">
          <div className="flex gap-5">
            <ul className="flex flex-col justify-between">
              {JSON.parse(detailProduct.Images)
                .slice(0, 4)
                .map((image, index) => (
                  <li
                    onClick={() => setCurrentImage(index)}
                    className="w-12 cursor-pointer border md:w-20"
                    key={index}
                  >
                    <img loading="lazy" src={image} alt="" />
                  </li>
                ))}
            </ul>
            <img
              loading="lazy"
              className="h-96 border object-cover shadow-md md:h-[34rem] lg:h-[35rem]"
              src={`${JSON.parse(detailProduct.Images)[currentImage]}?$n_750w$&wid=750&fit=constrain`}
              alt=""
            />
          </div>
          <div className="flex w-3/4 flex-col gap-3 lg:w-[30rem] lg:justify-between">
            <h1 className="text-2xl lg:w-[28rem]">{detailProduct?.Name}</h1>
            <div>
              <span>${detailProduct.Price}</span>
              <span className="m-2 inline-block h-[0.09rem] w-3 bg-bgBlackGray align-middle"></span>
              <span className="line-through">${detailProduct.Discount}</span>
            </div>
            <ul className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <li key={i}>
                  <icons.Start className="text-yellowColor" />
                </li>
              ))}
              (20)
            </ul>
            <div>
              <h1>Description</h1>
              <ul className="columns-3">
                {JSON.parse(detailProduct.Description).map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
            <div>
              <h1>Color</h1>
              <Radio.Group className="" defaultValue={0}>
                {JSON.parse(detailProduct.Colors).map((color, index) => (
                  <Radio key={index} value={index}>
                    {color}
                  </Radio>
                ))}
              </Radio.Group>
            </div>
            <div>
              <h1>Size</h1>
              <Select
                defaultValue={JSON.parse(detailProduct.Size)[0]}
                className="w-60"
                onChange={null}
                options={JSON.parse(detailProduct.Size).map((value) => ({
                  value,
                  label: value,
                }))}
              />
            </div>
            <div className="flex gap-5">
              <div className="flex items-center rounded-2xl border ">
                <button
                  onClick={handleDecsProduct}
                  className="rounded-bl-2xl rounded-tl-2xl bg-slate-100 px-3 py-1 text-xl font-bold"
                >
                  -
                </button>
                <label htmlFor="">
                  <input
                    type="number"
                    value={numberProduct}
                    className="w-7 text-center "
                  />
                </label>
                <button
                  onClick={handleIncsProduct}
                  className="rounded-br-2xl rounded-tr-2xl bg-slate-100 px-3 py-1 text-xl font-bold"
                >
                  +
                </button>
              </div>
              <button className="rounded-sm bg-secondaryColor px-5 text-white hover:bg-primaryColor">
                Add To Cart
              </button>
            </div>
            <Link className="flex items-center gap-4 hover:text-secondaryColor">
              <icons.Heart />
              <span>Add to Wishlist</span>
            </Link>
            <button className="rounded-sm bg-secondaryColor py-3 text-white hover:bg-primaryColor">
              Buy it now
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default memo(DetailProduct);
