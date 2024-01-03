import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '..//../redux/auth/operations';
import {} from './RegisterForm.css'; // Замініть пустий import на реальний, якщо це не помилка
import { NavLink } from 'react-router-dom';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Логіка з побічним ефектом тепер тут
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className="form-reg" onSubmit={handleSubmit} autoComplete="off">
      <h2 className="form-title">Sing Up</h2>
      <div className="row-form">
        <label htmlFor="inputEmail3" className="row-form-label">
          User name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Enter your name"
            autoComplete="name"
          />
        </div>
      </div>
      <div className="row-form">
        <label htmlFor="inputEmail3" className="row-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            id="inputEmail3"
            name="email"
            placeholder="name.@mail.com"
            autoComplete="email"
          />
        </div>
      </div>
      <div className="row-form">
        <label htmlFor="inputPassword3" className="row-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            id="inputPassword3"
            name="password"
            placeholder="min. 7characters"
            autoComplete="new-password"
          />
        </div>
      </div>
      <div className="row-form">
        <div className="col-sm-10 offset-sm-2">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck"
            />
            <label className="form-check-label" htmlFor="exampleCheck">
              I agree all statements
            </label>
          </div>
        </div>
      </div>
      <button type="submit" className="btn-primary">
        Sign up
      </button>
      <div className="acount">
        Already have an account?{' '}
        <NavLink className="acount-nav" to="/login">
          Log in
        </NavLink>
      </div>
    </form>
  );
};

export default RegisterForm;
