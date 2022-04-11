import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { requestBackendLogin } from 'utils/requests';

import './styles.css';

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const [hasError, setHasError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        setHasError(false);
        console.log('SUCESSO');
      })
      .catch((error) => {
        setHasError(true);
        console.log('DEU RUIM');
      });
  };

  return (
    <div className="login-card base-card">
      <h2>LOGIN</h2>

      {hasError && (
        <div className="alert alert-danger">
          Seu login falhou, tente novamente
        </div>
      )}

      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group custom-input">
          <input
            {...register('username', {
              required: 'Campo obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido',
              },
            })}
            type="email"
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            placeholder="Email"
            name="username"
          />
          <div className="invalid-feedback d-block error-msg">{errors.username?.message}</div>
        </div>
        <div className="form-group custom-input">
          <input
            {...register('password', {
              required: 'Campo obrigatório',
            })}
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Senha"
            name="password"
          />
          <div className="invalid-feedback d-block error-msg">{errors.password?.message}</div>
        </div>
        <button type="submit" className="btn btn-primary">
          Fazer Login
        </button>
      </form>
    </div>
  );
};

export default Login;
