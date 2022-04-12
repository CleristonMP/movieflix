import StarImg from 'assets/images/star.png';
import { Review } from "types/review";

import './styles.css';

type Props = {
  review: Review;
}

const ReviewCard = ( {review} : Props ) => {
  return (
    <div className="review-card-container">
      <div className="reviewer">
        <img src={StarImg} alt="Estrela" />
        <h6>{review.user.name}</h6>
      </div>
      <div className="review-text">
        <p>{review.text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
