import React, { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import { apiGetListCart } from "../../services";

const ListCart = ({ link }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await apiGetListCart(link);
        setProducts(productsData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
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
