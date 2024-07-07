import React, { useEffect, useState } from "react";
import { Pagination, Rate } from "antd";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import * as actions from "../../store/actions";
import { toast } from "react-toastify";
import { createReview } from "../../services";

const ProductReviews = ({ productId }) => {
  const dispatch = useDispatch();
  const { infoReviewProduct, reviews } = useSelector((state) => state.app);
  const { userData } = useSelector((state) => state.user);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [valueRate, setValueRate] = useState(3);

  const [review, setReview] = useState({
    User_id: userData?.id || "",
    Product_id: productId,
    Rating: valueRate,
    Title: "",
    Content: "",
  });

  useEffect(() => {
    dispatch(actions.getInfoReviews(productId));
    dispatch(actions.getReviewsProduct({ productId, page: 1, pageSize: 3 }));
  }, [dispatch, productId]);

  const onChange = (current, pageSize) => {
    dispatch(actions.getReviewsProduct({ productId, page: current, pageSize }));
  };

  const handleCreateReview = async () => {
    if (!isLoggedIn) {
      toast.warning("Please login to comment !");
    } else {
      try {
        await createReview(review);
        toast.success("Create review success");
        dispatch(
          actions.getReviewsProduct({ productId, page: 1, pageSize: 3 }),
        );
        setReview({
          User_id: userData?.id || "",
          Product_id: productId,
          Rating: valueRate,
          Title: "",
          Content: "",
        });
        setValueRate(3);
      } catch (error) {
        console.error("Failed to create review", error);
        toast.error("Failed to create review");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRateChange = (value) => {
    setValueRate(value);
    setReview((prev) => ({
      ...prev,
      Rating: value,
    }));
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="ml-4 flex flex-col justify-center gap-4">
          <h1 className="text-xl">Customer Reviews</h1>
          <span className="flex items-center gap-3 text-sm text-secondaryColor">
            <Rate
              disabled
              allowHalf
              value={Math.round(infoReviewProduct.avgRating * 2) / 2}
            />
            <span>based on {infoReviewProduct.totalReviews} reviews</span>
          </span>
        </div>

        <a
          href="#comments"
          className="rounded-sm bg-secondaryColor p-2 px-3 text-sm text-white"
        >
          Write A Review
        </a>
      </div>
      <div className="mb-5 ml-5 flex flex-col gap-4">
        {reviews?.map((item) => (
          <div className="flex flex-col gap-3" key={item.id}>
            <span className="h-[0.5px] w-full bg-slate-200"></span>
            <div className="flex items-center gap-3">
              <img
                src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dLKpxagQdsAQ7kNvgElr4lE&_nc_ht=scontent-hkg4-1.xx&oh=00_AYALHVOpKaL191QYj3Zhf3aGXAHO7uoY_VTpKBI5PF5p4w&oe=6697A338"
                alt="avatar"
                loading="lazy"
                className="w-24 rounded-full"
              />
              <div className="ml-4 mt-5 flex w-full flex-col gap-1">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <h1>{item.Fullname}</h1>
                    <div className="flex items-center gap-8">
                      <Rate
                        disabled
                        allowHalf
                        value={Math.round(item.Rating * 2) / 2}
                      />
                      <div className="leading-4">{item.Title}</div>
                    </div>
                  </div>
                  <div className="rounded-md border p-2 px-3">
                    {moment(item.createdAt).fromNow()}
                  </div>
                </div>
                <p>{item.Content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="m-2 flex justify-center">
        <Pagination
          onChange={onChange}
          pageSize={3}
          defaultCurrent={1}
          total={infoReviewProduct.totalReviews}
          showSizeChanger={false}
        />
      </div>
      <div id="comments" className="grid grid-flow-row place-items-start gap-4">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-xl">Add a review</h1>
          <Rate onChange={handleRateChange} value={valueRate} />
        </div>
        <textarea
          name="Title"
          value={review.Title}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-300 p-3 transition-all duration-500 focus:border-secondaryColor"
          placeholder="Your title..."
        ></textarea>
        <textarea
          name="Content"
          value={review.Content}
          onChange={handleChange}
          className="h-36 w-full rounded-md border border-slate-300 p-3 transition-all duration-500 focus:border-secondaryColor"
          placeholder="Your comments..."
        ></textarea>
        <button
          onClick={handleCreateReview}
          className="rounded-sm bg-secondaryColor p-2 px-5 text-base text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ProductReviews;
