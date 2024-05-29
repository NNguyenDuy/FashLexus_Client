import instance from "../axiosConfig";

export const apiCategies = async () => {
  try {
    const categories = await instance({
      method: "get",
      url: "/api/categories/getAll",
    });
    return categories?.data;
  } catch (error) {
    throw error.categories?.data || error;
  }
};

export const apiGetDetailProduct = async (productId) => {
  try {
    const response = await instance({
      method: "get",
      url: `/api/product/details/${productId}`,
    });
    return response?.data?.product;
  } catch (error) {
    throw error?.data;
  }
};
