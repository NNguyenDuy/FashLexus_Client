import instance from "../axiosConfig";

export const getCartInfo = async (User_id) => {
  try {
    const response = await instance({
      method: "post",
      url: "/api/cart/getCart",
      data: { User_id },
    });
    return response?.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const insertCart = async (
  User_id,
  Cart_id,
  Product_id,
  Quantity,
  Color,
  Size,
) => {
  try {
    const response = await instance({
      method: "post",
      url: "/api/cart/insertCart",
      data: { User_id, Cart_id, Product_id, Quantity, Color, Size },
    });
    return response?.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
