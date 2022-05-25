import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import ViewReview from "../../Pages/Dashboard/ViewReview";

const Review = () => {
  const [user] = useAuthState(auth);
  const [reviews, setReviews] = useState([]);
  const [textField, setDescription] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const name = user?.displayName;
  const img = "https://i.ibb.co/HFq3Y4L/peopel.jpg";
  const time = Date().toLocaleString();
  const description = textField;

  useEffect(() => {
    fetch("https://safe-anchorage-26846.herokuapp.com/reviewCount")
      .then((res) => res.json())
      .then((data) => setPageCount(Math.ceil(data.count / 3)));
  }, []);

  useEffect(() => {
    fetch(`https://safe-anchorage-26846.herokuapp.com/reviews?page=${page}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [page]);

  const handleComment = () => {
    if (!user) {
      navigate("/login");
    } else {
      const review = { name, img, time, description };
      fetch("https://safe-anchorage-26846.herokuapp.com/review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((result) => {
          const newReview = [...reviews, review];
          setReviews(newReview);
          alert("Comment successfully");
        });
    }
  };

  return (
    <div class="card my-20 w-full bg-base-200 shadow-xl">
      <div class="card-body">
        <div className="text-center">
          <div className="text-center mx-auto w-1/2 mt-5">
            <div>
              <h2 className="text-4xl text-secondary font-bold">
                Reviews Section
              </h2>
            </div>

            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Add Your Comments</span>
              </label>
              <textarea
                class="textarea textarea-bordered"
                placeholder="write here your review"
                onBlur={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <button
              onClick={handleComment}
              className="btn mt-3 btn-primary ms-2"
            >
              Post Comment
            </button>

            <div className="container">
              <div>
                {reviews.map((review) => (
                  <ViewReview key={review._id} review={review} />
                ))}
              </div>
              <div className="d-flex justify-content-center">
                {[...Array(pageCount).keys()].map((number, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(number)}
                    className={`ml-2 ${
                      page === number
                        ? "bg-primary p-2 font-bold text-white"
                        : "bg-light"
                    }`}
                  >
                    {number + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
