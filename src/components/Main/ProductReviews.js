import React from "react";
import { Pagination } from "antd";

const onShowSizeChange = (current, pageSize) => {
  console.log(current, pageSize);
};

const ProductReviews = () => (
  <div>
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
    />
  </div>
);

export default ProductReviews;
