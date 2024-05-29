import React, { useState } from "react";
import { Banner, ListCart } from "../../components";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("featured");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <main>
      <section>
        <Banner />
      </section>
      <section className="m-5"></section>
      <section className="flex flex-col items-center justify-center gap-5 p-8">
        <div className="flex flex-col justify-center">
          <h2 className="pb-3 text-3xl">New Products</h2>
          <img
            src="https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/other/heading-shape.png"
            alt="linePage"
          />
        </div>
        <ul className="mb-4 ml-6 flex gap-3 text-lg font-semibold md:gap-9">
          <li
            className={`cursor-pointer ${selectedCategory === "featured" && "text-secondaryColor"}`}
            onClick={() => handleCategoryClick("featured")}
          >
            Featured
          </li>
          <li
            className={`cursor-pointer ${selectedCategory === "trending" && "text-secondaryColor"}`}
            onClick={() => handleCategoryClick("trending")}
          >
            Trending
          </li>
          <li
            className={`cursor-pointer ${selectedCategory === "new-arrival" && "text-secondaryColor"}`}
            onClick={() => handleCategoryClick("new-arrival")}
          >
            New Arrival
          </li>
        </ul>
        <ListCart link={selectedCategory} />
      </section>
      <section className="h-72">3</section>
    </main>
  );
};

export default HomePage;
