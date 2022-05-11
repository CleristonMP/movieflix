import { hasAnyRoles } from 'utils/auth';

const EmptyCard = () => {
  return (
    <div className="review-card-container">
      <div className="review-text">
        {hasAnyRoles(['ROLE_MEMBER']) ? (
          <p>Seja o primeiro a avaliar este filme.</p>
        ) : (
          <p>Não há avaliações para este filme.</p>
        )}
      </div>
    </div>
  );
};

export default EmptyCard;
