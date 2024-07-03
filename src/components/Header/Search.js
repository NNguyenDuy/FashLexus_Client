import React, { memo, useRef, useState, useEffect } from "react";
import icons from "../../assets";
import { AutoComplete, Input } from "antd";
import { Link } from "react-router-dom";
import { apiGetSearch } from "../../services";

const renderTitle = (title) => <span>{title}</span>;

const renderItem = (item) => ({
  value: item.Name,
  label:
    item.type === "category" ? (
      <Link
        to={`categories/${item.Category_path}`}
        className="flex justify-between"
      >
        {item.Name}
        <span>
          <icons.Clothes /> {item.totalProducts}
        </span>
      </Link>
    ) : (
      <Link
        to={`details/id=${item.id}`}
        className="flex items-center justify-between"
      >
        <span className="w-3/4 truncate ">{item.Name}</span>
        <img
          src={`${JSON.parse(item?.Images)[0]}`}
          className="w-16"
          alt={item.Name}
        />
      </Link>
    ),
});

const Search = ({ responsive }) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const inputRef = useRef(null);
  const debounceTimer = useRef(null);

  useEffect(() => {
    const handleApiSearch = async (value) => {
      clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(async () => {
        try {
          const res = await apiGetSearch(value);
          const newOptions = [];
          newOptions.push({
            label: renderTitle("Categories"),
            options: res.categories.map((item) => renderItem(item)),
          });
          newOptions.push({
            label: renderTitle("Products"),
            options: res.products.map((item) => renderItem(item)),
          });
          setOptions(newOptions);
        } catch (error) {}
      }, 400);
    };

    handleApiSearch(searchTerm);
  }, [searchTerm]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const handleButtonClick = () => {
    if (inputRef.current) inputRef.current.focus();
    setSearchTerm("");
    setOpen(true);
  };

  return (
    <div className="flex w-full items-center border text-tGrayColor">
      <AutoComplete
        popupClassName="certain-category-search-dropdown"
        popupMatchSelectWidth={responsive ? 600 : "auto"}
        options={options}
        className="h-full w-full p-2 "
        open={open}
        onBlur={() => setOpen(false)}
        onSelect={() => setOpen(false)}
        allowClear={true}
        listHeight="500px"
      >
        <Input
          onChange={handleInputChange}
          onClick={handleButtonClick}
          ref={inputRef}
          value={searchTerm}
          className="cursor-text border-none focus:!shadow-none"
          placeholder="Keyword here..."
        />
      </AutoComplete>
      <button
        onClick={handleButtonClick}
        className="bg-secondaryColor p-3 px-4 text-white"
      >
        <icons.Search size={26} />
      </button>
    </div>
  );
};

export default memo(Search);
