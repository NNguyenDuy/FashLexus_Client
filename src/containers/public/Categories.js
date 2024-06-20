import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCategory } from "../../ultis/common";
import { Select } from "antd";
import { valueSortProduct } from "../../ultis/constant";
import icons from "../../assets";
import { apiProductsCategory } from "../../services";
import { CardProduct } from "../../components";

const Categories = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [valueFound, setValueFound] = useState({
    searchName: null,
    minPrice: null,
    maxPrice: null,
  });
  const [infoProduct, setInfoProduct] = useState({
    category: null,
    searchName: null,
    minPrice: null,
    maxPrice: null,
  });

  useEffect(() => {
    setInfoProduct((prev) => ({
      ...prev,
      category: getCategory(location.pathname),
    }));
  }, [location.pathname]);

  const handleValueFound = () => {
    setInfoProduct((prev) => ({
      ...prev,
      searchName: valueFound.searchName,
      minPrice: valueFound.minPrice,
      maxPrice: valueFound.maxPrice,
    }));
    setValueFound({
      searchName: "",
      minPrice: "",
      maxPrice: "",
    });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const getProducts = await apiProductsCategory(infoProduct);
        setProducts(getProducts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [infoProduct]);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="m-3 xl:m-10">
      <div className="m-5 flex flex-col items-start justify-between gap-4 text-sm sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <h1>Sort By :</h1>
          <Select
            defaultValue={valueSortProduct[0].label}
            onChange={handleChange}
            className="w-40 rounded-sm"
            options={valueSortProduct}
          />
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search by"
            onChange={(e) =>
              setValueFound((prev) => ({
                ...prev,
                searchName: e.target.value,
              }))
            }
            className="w-64 rounded-bl-sm rounded-tl-sm border border-slate-300 p-3 py-2"
          />
          <button
            onClick={handleValueFound}
            className="rounded-br-sm rounded-tr-sm bg-secondaryColor p-3 py-2 text-white"
          >
            <icons.Search size={20} />
          </button>
        </div>
      </div>
      <div className="mt-10 flex gap-5">
        <div className="hidden h-56 flex-col items-start gap-3 p-5 shadow-xl lg:flex">
          <h1 className="text-xl">Filter By Price</h1>
          <span className="h-[0.5px] w-full bg-slate-300"></span>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <div className="flex flex-col gap-1 ">
              <span className="font-bold">From</span>
              <div className="flex items-center gap-1 rounded-sm border border-slate-300 p-2">
                <span className="font-bold">$</span>
                <input
                  onChange={(e) =>
                    setValueFound((prev) => ({
                      ...prev,
                      minPrice: e.target.value,
                    }))
                  }
                  className="w-20 text-slate-600"
                  type="number"
                />
              </div>
            </div>
            <span className="mt-5 text-2xl">-</span>
            <div className="flex flex-col gap-1 ">
              <span className="font-bold">To</span>
              <div className="flex items-center gap-1 rounded-sm border border-slate-300 p-2">
                <span className="font-bold">$</span>
                <input
                  onChange={(e) =>
                    setValueFound((prev) => ({
                      ...prev,
                      maxPrice: e.target.value,
                    }))
                  }
                  className="w-20 text-slate-600"
                  type="number"
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleValueFound}
            className="rounded-sm bg-secondaryColor p-2 px-5 text-sm text-white"
          >
            Filter
          </button>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {products?.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
