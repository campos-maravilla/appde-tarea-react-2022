import React from 'react';
import TodoItem from './TodoItem ';

const TodoList = ({ tareas, onCompleted, onDeleteItem }) => {
    return <div>
        {
            tareas.map((tarea, index) => (
                <TodoItem key={`todo-${index}`} tarea={tarea} onCompleted={onCompleted} onDeleteItem={onDeleteItem} />
            ))
        }
    </div>;
};

export default TodoList;
