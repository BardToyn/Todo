import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/normalize.css';
import './styles/App.css';

import Todo from './pages/todo/Todo';
import Auth from './pages/auth/Auth';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;