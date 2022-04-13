import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { Review } from 'types/review';
import { requestBackend } from 'utils/requests';

import './styles.css';

type Props = {
  movieId: string;
  onInsertReview: (review: Review) => void;
};

type FormData = {
  text: string;
};

const ReviewForm = ({ movieId, onInsertReview }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    const data = { ...formData, movieId };

    const params: AxiosRequestConfig = {
      method: 'POST',
      withCredentials: true,
      url: '/reviews',
      data,
    };

    requestBackend(params).then((response) => {
      setValue('text', '');
      onInsertReview(response.data);
      console.log(response);
    });
  };

  return (
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
        <div className="invalid-feedback d-block error-msg err-txt-msg">
          {errors.text?.message}
        </div>

        <button type="submit" className="btn btn-primary">
          SALVAR AVALIAÇÃO
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
