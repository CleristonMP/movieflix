import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from 'types/review';
import { hasAnyRoles } from 'utils/auth';
import { requestBackend } from 'utils/requests';
import ReviewCard from './ReviewCard';
import { useForm } from 'react-hook-form';

import './styles.css';

type UrlParams = {
  movieId: string;
};

type FormData = {
  text: string;
};

const Reviews = () => {
  const { movieId } = useParams<UrlParams>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {};

  const [page, setPage] = useState<Review[]>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      withCredentials: true,
      url: `/movies/${movieId}/reviews`,
    };

    requestBackend(params)
      .then((response) => {
        setPage(response.data);
      })
      .catch((error) => {});
  }, [movieId]);

  return (
    <div className="container custom-container">
      <div className="reviews-page-title">
        <h1>Tela detalhes do filme id: {movieId}</h1>
      </div>

      {hasAnyRoles(['ROLE_MEMBER']) && (
        <div className="input-card base-card">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
                {...register('text', {
                  required: 'Não deixe sua avaliação em branco',
                })}
                type="text"
                className={`form-control ${errors.text ? 'is-invalid' : ''}`}
                name="text"
                placeholder="Deixe sua avaliação aqui"
              />
            </div>
            <div className="invalid-feedback d-block error-msg err-txt-msg">{errors.text?.message}</div>

            <button type="submit" className="btn btn-primary">
              SALVAR AVALIAÇÃO
            </button>
          </form>
        </div>
      )}

      <div className="reviews-group base-card">
        {page?.map((review) => (
          <ReviewCard review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
