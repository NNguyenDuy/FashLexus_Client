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
