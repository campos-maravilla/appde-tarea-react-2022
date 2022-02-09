import React from 'react';
import './TodoItem.css';


const TodoItem = ({ tarea, onCompleted, onDeleteItem }) => {


    return <div className={tarea.completed ? 'todo-marcado' : 'none '} >
        <input type="checkbox" name="" id="" checked={tarea.completed}
            onChange={() => onCompleted(tarea.id)}

        />
        {

            tarea.task
        }
        <button className="delete-btn" onClick={() => onDeleteItem(tarea.id)}>X</button>
    </div>;
};

export default TodoItem;
