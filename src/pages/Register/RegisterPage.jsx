import React from 'react';
import { Helmet } from 'react-helmet';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import {} from './RegisterPage.css';

const RegisterPage = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
