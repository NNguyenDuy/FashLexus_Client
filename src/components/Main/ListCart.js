import React, { useEffect } from "react";
import CardProduct from "./CardProduct";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";

const ListCart = ({ link }) => {
  const dispatch = useDispatch();
  const { productListCart } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(actions.getProductListCart(link));
  }, [link, dispatch]);

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {productListCart?.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ListCart;
