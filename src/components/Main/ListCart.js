import React, { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import axios from "axios";

const ListCart = ({ link }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api/product/${link}-products`,
        );
        setProducts(response?.data?.products);
      } catch (error) {}
    };
    fetchData();
  }, [link]);

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products?.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ListCart;
