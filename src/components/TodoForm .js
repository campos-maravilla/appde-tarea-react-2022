import React, { useState } from 'react';

const TodoForm = ({ agregrarTarea }) => {

    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput === '') {
            alert('deber escribir una tarea');
            return;
        }
        if (userInput.trim !== '') {
            agregrarTarea(userInput);
            setUserInput('');
        }
    }


    return <div className="form">
        <form onSubmit={handleSubmit}>
            <input type="text" className="sombra" value={userInput} onChange={handleChange} />
            <button className="add-btn">Agregar tarea</button>
        </form>
    </div>;
};

export default TodoForm;
