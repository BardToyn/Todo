import React from 'react';

import './additem.css'

import Plus from './plus';

const AddItem = ({ onAdd }) => {
    const handleClick = () => {
      if (onAdd) {
        onAdd();
      }
    };

    return ( 
        <div className='task__add-wrap block'>
            <h3 className='task__add-title'>
                Добавить организацию
            </h3>
            <button className='task__add-btn' id='buttonAdd' onClick={handleClick}>
                <Plus className='task__add-btn__icon' />
                <p className='task__add-btn__text'>добавить</p>
            </button>
        </div>
    );
}
 
export default AddItem;