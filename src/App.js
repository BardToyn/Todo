// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Todo from './pages/todo/Todo';
import Auth from './pages/auth/Auth';
import { authenticateUser } from './settings/auth';

import './styles/normalize.css';
import './styles/App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (login, password) => {
    try {
      // Вызываем функцию аутентификации
      const isAuthenticated = await authenticateUser(login, password);

      // Если аутентификация успешна, устанавливаем флаг isAuthenticated в true
      if (isAuthenticated) {
        setIsAuthenticated(true);
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
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Todo /> : <Auth onLogin={handleLogin} />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
};

export default App;