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

export const apiGetListCart = async (typeProduct) => {
  try {
    const response = await instance({
      method: "get",
      url: `/api/product/${typeProduct}-products`,
    });
    return response?.data?.products;
  } catch (error) {
    throw error?.data;
  }
};

export const apiTotalReviews = async (productId) => {
  try {
    const response = await instance({
      method: "get",
      url: "/api/reviews/getTotalReviewProduct",
      params: { Product_id: productId },
    });
    return response?.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const apiReviewsProduct = async ({ productId, page, pageSize }) => {
  try {
    const response = await instance({
      method: "get",
      url: "/api/reviews/getReviewProduct",
      params: { Product_id: productId, page, pageSize },
    });
    return response?.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const createReview = async ({
  User_id,
  Product_id,
  Rating,
  Title,
  Content,
}) => {
  try {
    const response = await instance({
      method: "post",
      url: "/api/reviews/createReview",
      data: { User_id, Product_id, Rating, Title, Content },
    });
    return response?.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const apiTotalProductsCategory = async ({
  category,
  searchName,
  minPrice,
  maxPrice,
}) => {
  try {
    const response = await instance({
      method: "get",
      url: "/api/product/categoryTotal",
      params: { category, searchName, minPrice, maxPrice },
    });
    return response?.data?.total;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const apiProductsCategory = async ({
  category,
  searchName,
  minPrice,
  maxPrice,
  offset,
  pageSize,
}) => {
  try {
    const response = await instance({
      method: "get",
      url: "/api/product/category",
      params: { category, searchName, minPrice, maxPrice, offset, pageSize },
    });
    return response?.data?.products;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const apiGetSearch = async (valueSearch) => {
  try {
    const response = await instance({
      method: "get",
      url: "/api/app/search",
      params: { valueSearch },
    });
    return response?.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const apiUpdateInfoUser = async ({
  id,
  Address,
  Fullname,
  Phone_number,
}) => {
  try {
    const response = await instance({
      method: "put",
      url: "/api/app/updateInfo",
      data: { id, Address, Fullname, Phone_number },
    });
    return response?.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
