import { hasAnyRoles } from 'utils/auth';
import ReviewCard from './ReviewCard';
import './styles.css';

const Reviews = () => {
  return (
    <div className="container custom-container">
      <div className="reviews-page-title">
        <h1>Tela detalhes do filme id: 1</h1>
      </div>

      {hasAnyRoles(['ROLE_MEMBER']) && (
        <div className="input-card base-card">
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="text"
                placeholder="Deixe sua avaliação aqui"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              SALVAR AVALIAÇÃO
            </button>
          </form>
        </div>
      )}

      <div className="reviews-group base-card">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default Reviews;
