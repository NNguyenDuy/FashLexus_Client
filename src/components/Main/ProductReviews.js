import React, { useEffect, useState, useCallback } from "react";
import { Pagination, Rate } from "antd";
import { useSelector } from "react-redux";
import moment from "moment";
import { toast } from "react-toastify";
import {
  apiTotalReviews,
  apiReviewsProduct,
  createReview,
} from "../../services";

const ProductReviews = ({ productId }) => {
  const { userData } = useSelector((state) => state.user);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const [totalAndRatingReviews, setTotalAndRatingReviews] = useState({
    totalReviews: 0,
    avgRating: 0,
  });

  const [valueRate, setValueRate] = useState(3);
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState({
    User_id: userData?.id || "",
    Product_id: productId,
    Rating: valueRate,
    Title: "",
    Content: "",
  });

  const fetchReviews = useCallback(
    async (current, pageSize) => {
      try {
        const reviewsPage = await apiReviewsProduct(
          productId,
          current,
          pageSize,
        );
        setReviews(reviewsPage);
      } catch (error) {
        console.error("Failed to fetch reviews", error);
      }
    },
    [productId],
  );

  const fetchTotalReviews = useCallback(async () => {
    try {
      const res = await apiTotalReviews(productId);
      setTotalAndRatingReviews(res);
    } catch (error) {
      console.error("Failed to fetch total reviews", error);
    }
  }, [productId]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchReviews(1, 3);
      await fetchTotalReviews();
    };

    fetchData();
  }, [fetchReviews, fetchTotalReviews]);

  const onChange = (current, pageSize) => {
    fetchReviews(current, pageSize);
  };

  const handleCreateReview = async () => {
    if (!isLoggedIn) {
      toast.warning("Please login to comment !");
    } else {
      try {
        await createReview(review);
        toast.success("Create review success");
        await fetchReviews(1, 3); // Refresh reviews after submission
        // Reset the review form
        setReview({
          User_id: userData?.id || "",
          Product_id: productId,
          Rating: valueRate,
          Title: "",
          Content: "",
        });
        setValueRate(3); // Reset the rating value
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
              value={Math.round(totalAndRatingReviews.avgRating * 2) / 2}
            />
            <span>based on {totalAndRatingReviews.totalReviews} reviews</span>
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
                className="w-20 rounded-full"
              />
              <div className="flex w-full flex-col gap-1">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <h1>{item.Fullname}</h1>
                    <div className="flex items-center gap-6">
                      <Rate
                        disabled
                        allowHalf
                        value={Math.round(item.Rating * 2) / 2}
                      />
                      <h2 className="leading-4 underline">{item.Title}</h2>
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
          total={totalAndRatingReviews.totalReviews}
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
