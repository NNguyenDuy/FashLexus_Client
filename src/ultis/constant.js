import icons from "../assets";

export const paths = [
  { show: false, path: "/*", value: "HomePage" },
  { show: true, path: "", value: "Home" },
  { show: false, path: "login", value: "Login" },
  { show: false, path: "register", value: "Register" },
  { show: true, path: "contact", value: "Contact" },
  { show: true, path: "blog", value: "Blog" },
  { show: true, path: "categories/:category", value: "Categories" },
  {
    show: false,
    path: "details/:productId",
    value: "DetailProduct",
  },
];

export const pathsUser = [
  {
    show: false,
    path: "*",
    value: "UserPage",
  },
  {
    show: true,
    icon: <icons.DetailUser size={25} />,
    path: "detailuser",
    value: "DetailUser",
  },
  { show: true, icon: <icons.Cart size={25} />, path: "cart", value: "Cart" },
  {
    show: true,
    icon: <icons.Delivered size={25} />,
    path: "delivered",
    value: "Delivered",
  },
  {
    show: true,
    icon: <icons.Heart size={25} />,
    path: "wishlist",
    value: "Wishlist",
  },
  {
    show: true,
    icon: <icons.Voucher size={25} />,
    path: "voucher",
    value: "Voucher",
  },
];

export const valueSortProduct = [
  { value: "latest", label: "Sort by latest" },
  { value: "popularity", label: "Sort by popularity" },
  { value: "newness", label: "Sort by newness" },
  { value: "rating", label: "Sort by rating" },
];
