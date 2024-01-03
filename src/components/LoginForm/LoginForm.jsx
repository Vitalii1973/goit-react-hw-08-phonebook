import { useDispatch } from 'react-redux';
import { logIn } from '..//../redux/auth/operations';
import {} from './LoginForm.css';
import { NavLink } from 'react-router-dom';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="login-form">
      <svg
        className="icon-user"
        viewBox="-1 0 35 35"
        transform="translate(110 30)"
      >
        <path d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
      </svg>
      <h2 className="form-title-lh">Log In</h2>
      <div className="row-form">
        <label className="label">
          Email
          <input
            type="email"
            name="email"
            className="input-lg"
            autoComplete="email"
          />
        </label>
      </div>
      <div className="row-form">
        <label className="label">
          Password
          <input
            type="password"
            name="password"
            className="input-lg"
            autoComplete="current-password"
          />
        </label>
      </div>
      <button type="submit" className="btn-primary-lg">
        Log In
      </button>
      <div className="acount">
        No acount ?
        <NavLink className="acount-nav" to="/register">
          Create one
        </NavLink>
      </div>
    </form>
  );
};
