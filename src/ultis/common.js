export const getFirstString = (username) => {
  const val = username
    .split(" ")
    .map((word) => word[0]?.toUpperCase())
    .join("");
  return val;
};
