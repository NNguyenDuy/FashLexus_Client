import instance from "../axiosConfig";

export const apiGetUser = async () => {
  try {
    const response = await instance({
      method: "get",
      url: "/api/user",
    });
    return response?.data;
  } catch (error) {
    return error.response?.data || error;
  }
};
