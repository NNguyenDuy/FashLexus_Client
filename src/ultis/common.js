import axios from "axios";

export const getFirstString = (username) => {
  const val = username
    .split(" ")
    .map((word) => word[0]?.toUpperCase())
    .join("");
  return val;
};

export const getCategory = (pathLocation) => {
  return pathLocation.split("/")[2];
};

export const searchLocation = async (address) => {
  try {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search?format=json&q=${address}`,
    );
    const { lat, lon, display_name } = response.data[0];
    return { lat, lon, display_name };
  } catch (error) {
    return { error: error.message };
  }
};
