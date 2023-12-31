import React, { useState } from 'react';

const LoginForm = ({ onSubmit }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Передаем логин и пароль в родительский компонент (Auth)
    if (onSubmit) {
      onSubmit(login, password);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='input__wrap'>
        <label className='input__label' htmlFor="login">Логин</label>
        <input
          className='input'  
          type="text"
          id="login"
          name="login"
          value={login}
          placeholder='Введите логин'
          onChange={handleLoginChange}
        />
      </div>
      <div className='input__wrap'>
        <label className='input__label' htmlFor="password">Пароль</label>
        <input
          className='input'
          type="password"
          id="password"
          name="password"
          value={password}
          placeholder='Введите пароль'
          onChange={handlePasswordChange}
        />
      </div>
      <div className='input__wrap'>
        <button className='submit' type="submit">Войти</button>
      </div>
    </form>
  );
};

export default LoginForm;