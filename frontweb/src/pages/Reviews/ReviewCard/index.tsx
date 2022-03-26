import StarImg from 'assets/images/star.png';

import './styles.css';

const ReviewCard = () => {
  return (
    <div className="review-card-container">
      <div className="reviewer">
        <img src={StarImg} alt="Estrela" />
        <h6>Maria Silva</h6>
      </div>
      <div className="review-text">
        <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
      </div>
    </div>
  );
};

export default ReviewCard;
