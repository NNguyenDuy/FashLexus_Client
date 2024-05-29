import instance from "../axiosConfig";

export const apiRegister = async (payload) => {
  try {
    const response = await instance({
      method: "post",
      url: "/api/auth/register",
      data: payload,
    });
    return response?.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const apiLoggin = async (payload) => {
  try {
    const response = await instance({
      method: "post",
      url: "/api/auth/login",
      data: payload,
    });
    return response?.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
