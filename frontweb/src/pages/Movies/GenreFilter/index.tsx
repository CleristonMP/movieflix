import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { Genre } from 'types/genre';
import { requestBackend } from 'utils/requests';

import './styles.css';

export type GenreFilterData = {
  genre: Genre | null;
};

type Props = {
  onSubmitFilter: (data: GenreFilterData) => void;
};

const GenreFilter = ({ onSubmitFilter }: Props) => {
  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

  const { handleSubmit, setValue, getValues, control } =
    useForm<GenreFilterData>();

  const onSubmit = (formData: GenreFilterData) => {
    onSubmitFilter(formData);
  };

  const handleChangeGenre = (value: Genre) => {
    setValue('genre', value);

    const obj: GenreFilterData = {
      genre: getValues('genre'),
    };

    onSubmitFilter(obj);
  };

  useEffect(() => {
    requestBackend({ url: '/genres', withCredentials: true }).then(
      (response) => {
        console.log(response.data);
        setSelectGenres(response.data);
      }
    );
  }, []);

  return (
    <div className="genre-filter-ctr base-card">
      <form className="genre-filter-form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="genre"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={selectGenres}
              isClearable
              placeholder="Gênero"
              classNamePrefix="genre-filter"
              onChange={(value) => handleChangeGenre(value as Genre)}
              getOptionLabel={(genre: Genre) => genre.name}
              getOptionValue={(genre: Genre) => String(genre.id)}
            />
          )}
        />
      </form>
    </div>
  );
};

export default GenreFilter;
