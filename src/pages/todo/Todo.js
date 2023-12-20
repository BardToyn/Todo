import React, { useState, useEffect, useRef } from 'react';
import { collection, addDoc, updateDoc, doc, deleteDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

import AddItem from '../../component/todo/AddItem';
import TodoList from '../../component/todo/todoList';

import './styles.css';

const Todo = () => {
  const [items, setItems] = useState([]);
  const isMounted = useRef(true);

  // Загрузка данных из Firestore при загрузке компонента
  useEffect(() => {
    const loadItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'boards', 'default', 'todos'));

        const loadedItems = [];
        querySnapshot.forEach((doc) => {
          const item = doc.data();
          loadedItems.push({ ...item, id: doc.id });
        });

        console.log('Loaded items:', loadedItems);

        if (isMounted.current) {
          setItems(loadedItems);
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
      
    };

    loadItems();

    return () => {
      // Устанавливаем флаг размонтирования при размонтировании компонента
      isMounted.current = false;
    };
  }, []); // Пустой массив зависимостей, чтобы запрос выполнялся только один раз при загрузке компонента

  const addItem = async () => {
    const newItem = {
      title: 'Новая организация',
      content: 'Начальное значение текста',
    };

    // Добавление нового элемента в Firestore
    const docRef = await addDoc(collection(db, 'boards', 'default', 'todos'), newItem);

    // Обновление состояния списка с новыми данными, используя doc.id
    setItems(prevItems => [...prevItems, { ...newItem, id: docRef.id }]);
  };

  const deleteItem = async (itemId) => {
    // Удаление элемента из Firestore
    const todoRef = doc(db, 'boards', 'default', 'todos', itemId);
    await deleteDoc(todoRef);

    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const updateTitle = async (itemId, newTitle) => {
    // Обновление элемента в Firestore
    const todoRef = doc(db, 'boards', 'default', 'todos', itemId);
    await updateDoc(todoRef, { title: newTitle });

    // Обновление состояния списка с новыми данными
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, title: newTitle } : item
      )
    );
  };

  const handleSaveItem = async (itemId, newTitle, newContent) => {
    // Обновление элемента в Firestore
    const todoRef = doc(db, 'boards', 'default', 'todos', itemId);
    await updateDoc(todoRef, { title: newTitle, content: newContent });

    // Обновление состояния списка с новыми данными
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