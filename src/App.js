
import './App.css';
import { useState } from 'react';
import data from './data.json';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm ';




function App() {

  const [tareas, setTareas] = useState(data);

  console.log(tareas);

  const onCompleted = (id) => {
    //console.log(id);

    setTareas(tareas.map((tarea) => {
      return tarea.id === Number(id) ? { ...tarea, completed: !tarea.completed } : { ...tarea };
    }))
  }

  const onDeleteItem = (id) => {
    //console.log('deleted', id);
    setTareas([...tareas].filter(tarea => tarea.id !== id));
  }

  const agregrarTarea = (nuevaTarea) => {
    console.log('nueva tarea', nuevaTarea);
    let nuevoItem = { id: +new Date(), task: nuevaTarea, completed: false };
    setTareas([...tareas, nuevoItem]);
  }
  return (
    <div className="container">

      <TodoForm agregrarTarea={agregrarTarea} />
      <TodoList tareas={tareas} onCompleted={onCompleted} onDeleteItem={onDeleteItem} />
    </div>
  );
}

export default App;
