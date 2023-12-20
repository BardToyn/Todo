// Auth.js
import React, { useState } from 'react';
import LoginForm from './Form';
import { authenticateUser } from '../../settings/auth'; 

import { useNavigate } from 'react-router-dom'; // Импортируем хук для навигации

import './styles.css';

import logo from '../../images/logo.svg';
import undraw from '../../images/undraw_access_account.svg';

const Auth = ({ onLogin }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // Инициализируем хук навигации

  const handleLoginSubmit = async (login, password) => {
    try {
      if (!login || !password) {
        console.error('Email and password are required.');
        return;
      }

      // Вызываем функцию аутентификации
      const isAuthenticated = await authenticateUser(login, password);

      // Если аутентификация успешна, устанавливаем флаг isAuthenticated в true
      if (isAuthenticated) {
        setIsAuthenticated(true);

        // Перенаправляем на страницу Todo
        navigate('/todo');
      } else {
        // В противном случае, можно обработать сценарий неудачной аутентификации
        console.log('Authentication failed. Invalid username or password.');
      }
    } catch (error) {
      // Обработка ошибок аутентификации
      console.error('Error during authentication:', error.message);
    }
  };

  return (
    <div className='auth__pages'>
      <div className='auth__pages-modal'>
        <section className='modal__info modal__wrap'>
          <article className='info__content'>
            <div className='info__content-logo__wrap'>
              <img className='logo' src={logo} alt="logo" />
              <h2 className='info__content-title'>
                V-Brand
              </h2>
            </div>
            <p className='info__content-subtitle'>
              Система для хранения данных для внутреннего пользования. Все данные доступны только сотрудникам организации.
            </p>
            <img className='info__content-img' src={undraw} alt="images" />
          </article>
        </section>
        <section className='modal__auth modal__wrap'>
          <h2 className='modal__auth-title'>
            Вход в BrandAdmin
          </h2>
          {/* Передаем функцию handleLoginSubmit в LoginForm */}
          <LoginForm onSubmit={handleLoginSubmit} />
        </section>
      </div>
    </div>
  );
};

export default Auth;
