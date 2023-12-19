import React from 'react';

import LoginForm from './Form';

import './styles.css';

import logo from '../../images/logo.svg'
import undraw from '../../images/undraw_access_account.svg'

const Auth = () => {
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
          <LoginForm />
        </section>
      </div>
    </div>
  );
};

export default Auth;
