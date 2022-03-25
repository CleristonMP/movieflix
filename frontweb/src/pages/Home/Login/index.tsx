import './styles.css';

const Login = () => {
  return (
    <div className="login-card">
        <h2>LOGIN</h2>
      <form className="login-form">
        <div className="form-group custom-input">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="form-group custom-input">
          <input
            type="password"
            className="form-control"
            placeholder="Senha"
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Fazer Login
        </button>
      </form>
    </div>
  );
};

export default Login;
