import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import numeral from "numeral";
import icons from "../../../assets";
import { getCartInfo } from "../../../services";
import { useSelector } from "react-redux";

const Cart = () => {
  const { userData } = useSelector((state) => state.user);
  const [cartData, setCartData] = useState([]);
  const [totalPrices, setTotalPrices] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getCartInfo(userData?.id);
        const updatedCartData = data.map((item) => ({
          ...item,
          total: item.price * item.quantity,
        }));
        console.log(data)
        setTotalPrices(
          updatedCartData.reduce((total, item) => total + item.total, 0),
        );
        setCartData(updatedCartData);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [userData]);

  const handleRemoveProduct = (productId) => {
    setCartData((prevData) =>
      prevData.filter((item) => item.detailProduct.productId !== productId),
    );
  };

  const handleDecreaseQuantity = (key) => {
    setCartData((prevData) =>
      prevData.map((item) =>
        item.key === key && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              total: (item.quantity - 1) * item.price,
            }
          : item,
      ),
    );
  };

  const handleIncreaseQuantity = (key) => {
    setCartData((prevData) =>
      prevData.map((item) =>
        item.key === key
          ? {
              ...item,
              quantity: item.quantity + 1,
              total: (item.quantity + 1) * item.price,
            }
          : item,
      ),
    );
  };

  useEffect(() => {
    setTotalPrices(cartData.reduce((total, item) => total + item.total, 0));
  }, [cartData]);

  const columns = [
    {
      title: "PRODUCT",
      dataIndex: "detailProduct",
      key: "detailProduct",
      render: (detailProduct) => (
        <div className="flex w-full items-center">
          <span
            className="cursor-pointer"
            onClick={() => handleRemoveProduct(detailProduct.productId)}
          >
            <icons.Close size={20} />
          </span>
          <div className="flex items-center">
            <Link to={`/details/id=${detailProduct.productId}`}>
              <img
                src={detailProduct.image}
                alt={detailProduct.name}
                className="h-24 w-32 max-w-none rounded-md object-contain"
              />
            </Link>
            <ul className="flex flex-col gap-1">
              <li className="w-20 truncate font-semibold lg:w-36">
                {detailProduct.name}
              </li>
              <li className="">Color: {detailProduct.color}</li>
              <li className="">Size: {detailProduct.size}</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "PRICE",
      dataIndex: "price",
      key: "price",
      render: (data) => <div>{numeral(data).format("$0,0.00")}</div>,
    },
    {
      title: "QUANTITY",
      dataIndex: "quantity",
      align: "center",
      key: "quantity",
      render: (_, record) => (
        <div className="flex items-center rounded-2xl border ">
          <button
            onClick={() => handleDecreaseQuantity(record.key)}
            className="rounded-bl-2xl rounded-tl-2xl bg-slate-100 px-3 py-1 text-xl font-bold"
          >
            -
          </button>
          <input
            type="number"
            value={record.quantity}
            className="w-8 text-center"
            readOnly
          />
          <button
            onClick={() => handleIncreaseQuantity(record.key)}
            className="rounded-br-2xl rounded-tr-2xl bg-slate-100 px-3 py-1 text-xl font-bold"
          >
            +
          </button>
        </div>
      ),
    },
    {
      title: "TOTAL",
      dataIndex: "total",
      key: "total",
      render: (data) => <div>{numeral(data).format("$0,0.00")}</div>,
    },
  ];

  return (
    <div className="flex flex-col items-start gap-5">
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold uppercase">Shopping cart</span>
      </div>
      <div className="flex w-full flex-col gap-10 xl:flex-row">
        <Table
          scroll={{ x: true }}
          className="w-full sm:w-auto"
          pagination={false}
          columns={columns}
          dataSource={cartData}
        />
        <div className="flex flex-col gap-6 rounded-md p-3 shadow-box">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl">Coupon</h1>
            <p className="text-gray-500">
              Click chose coupon code if you have.
            </p>
            <div className="flex gap-5">
              <button className="rounded-sm bg-secondaryColor p-2 px-3 text-white">
                Chose Coupon
              </button>
              <input
                type="text"
                defaultValue={""}
                readOnly
                placeholder="Coupon code"
                className="w-2/5 rounded-sm border border-secondaryColor p-2 text-gray-500"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl">Note</h1>
            <p className="text-gray-500">
              Add special instructions for your seller...
            </p>
            <textarea className="rounded-md border border-slate-300 p-3 transition-all duration-500 focus:border-secondaryColor"></textarea>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex justify-between">
              <span>SUBTOTAL</span>
              <span>{numeral(totalPrices).format("$0,0.00")}</span>
            </div>
            <div className="flex justify-between">
              <span>GRAND TOTAL</span>
              <span>{numeral(totalPrices).format("$0,0.00")}</span>
            </div>
          </div>
          <button className="rounded-sm bg-secondaryColor p-2 px-3 text-white">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
