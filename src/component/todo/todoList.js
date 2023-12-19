import React from 'react';

import './todolist.css'

const TodoList = ({ items, onDeleteItem, updateTitle, onSaveItem }) => {
    return (
        <div className="task__list-wrap">
            <h2 className="task__list-title">Список организации</h2>
            <div className="task__list">
                {items.map(item => (
                    <TodoItem
                    key={item.id}
                    item={item}
                    onDelete={() => onDeleteItem(item.id)}
                    updateTitle={updateTitle}
                    onSaveItem={onSaveItem}
                    />
                ))}
            </div>
        </div>
    );
  };
  
  const TodoItem = ({ item, onDelete, updateTitle, onSaveItem }) => {
    const handleTitleChange = (e) => {
      const newTitle = e.target.value;
      if (updateTitle) {
        updateTitle(item.id, newTitle);
      }
    };
  
    const handleSaveClick = () => {
      if (onSaveItem) {
        onSaveItem(item.id, item.title, item.content);
      }
    };
  
    return (
        <div className="task__item block">
            <input
            type="text"
            className="task__item-title-input"
            value={item.title}
            onChange={handleTitleChange}
            />
            <textarea className="task__item-textarea" defaultValue={item.content} />
            <div className="task__item-btn__wrap">
                <button className="task__item-btn" id="taskItemSave" onClick={handleSaveClick}>
                    Сохранить
                </button>
                <button className="task__item-btn" id="taskItemDel" onClick={onDelete}>
                    Удалить
                </button>
            </div>
        </div>
    );
  };
 
export default TodoList;