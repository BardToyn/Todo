import React, { useState } from 'react';

import AddItem from '../../component/todo/AddItem';
import TodoList from '../../component/todo/todoList';

import './styles.css';

const Todo = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      title: 'Новая организация',
      content: 'Начальное значение текста',
    };

    setItems(prevItems => [...prevItems, newItem]);
  };

  const deleteItem = (itemId) => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const updateTitle = (itemId, newTitle) => {
    setItems(prevItems =>
      prevItems.map(item => (item.id === itemId ? { ...item, title: newTitle } : item))
    );
  };

  const handleSaveItem = (itemId, newTitle, newContent) => {
    // Обновите состояние списка с новыми данными
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, title: newTitle, content: newContent } : item
      )
    );
  };

  return (
      <div className='pages__todo'>
        <h2 className='pages__todo-title'>
          Доступы к организациям
        </h2>
        <div className='todo-wrap'>
          <AddItem onAdd={addItem} />
          <TodoList items={items} onDeleteItem={deleteItem} updateTitle={updateTitle} onSaveItem={handleSaveItem} />
        </div>
      </div>
  );
};

export default Todo;