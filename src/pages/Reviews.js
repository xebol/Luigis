import Form from "../Components/Form";
import "./Reviews.scss";

const Reviews = () => {
  return (
    <>
      <div className="reviews-container">
        <div className="reviews-main">
          <h1>Reviews</h1>
          <div className="review-card">
            <p>This is a review</p>
          </div>
        </div>
      </div>
      <div>
        <Form />
      </div>
    </>
  );
};




export default Reviews;