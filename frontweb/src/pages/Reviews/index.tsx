import { AxiosRequestConfig } from 'axios';
import ReviewForm from 'components/ReviewForm';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'types/movie';
import { Review } from 'types/review';
import { hasAnyRoles } from 'utils/auth';
import { requestBackend } from 'utils/requests';
import DetailsLoader from './DetailsLoader';
import EmptyCard from './EmptyCard';
import MovieDetailsCard from './MovieDetailsCard';
import ReviewCard from './ReviewCard';

import './styles.css';

type UrlParams = {
  movieId: string;
};

const Reviews = () => {
  const { movieId } = useParams<UrlParams>();

  const [reviews, setReviews] = useState<Review[]>([]);

  const [movie, setMovie] = useState<Movie>();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      withCredentials: true,
      url: `/movies/${movieId}`,
    };

    setIsLoading(true);
    requestBackend(config)
      .then((response) => {
        setMovie(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      withCredentials: true,
      url: `/movies/${movieId}/reviews`,
    };

    requestBackend(config).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <div className="container custom-container">
      {isLoading ? (
        <DetailsLoader />
      ) : movie ? (
        <MovieDetailsCard movie={movie} />
      ) : (
        ''
      )}

      {hasAnyRoles(['ROLE_MEMBER']) && (
        <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
      )}

      <div className="reviews-group base-card">
        {reviews.length === 0 ? (
          <EmptyCard />
        ) : (
          reviews?.map((review) => (
            <ReviewCard review={review} key={review.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default Reviews;
