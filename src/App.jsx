import { useState } from 'react';
import { TaskList } from './components/TaskList/TaskList';
import './App.css';

const tasks = [
  {
    id: 1,
    title: 'Terminar el curso de React.',
    completed: false
  },
  {
    id: 2,
    title: 'Leer al menos dos capítulos de un libro.',
    completed: false
  },
  {
    id: 3,
    title: 'Hacer ejercicio por 30 minutos.',
    completed: true
  }
];

function App() {
  // Estado para almacenar las tareas y su estado
  const [taskState, setTaskState] = useState(tasks);

  // Función para manejar el cambio de estado de una tarea específica (ID)
  const handleTaskCompletion = (taskId) => {
    const updatedTasks = taskState.map(task => {
      // Si el ID coincide....
      if (task.id === taskId) {
        // Invierte el estado de la tarea
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    // Actualiza el estado con las tareas modificadas
    setTaskState(updatedTasks);
  };

  return (
    <div>
      <TaskList tasks={taskState} onTaskCompletion={handleTaskCompletion} />
      <p className='text-made-by'>Elaborado por Ricardo Castell Rodríguez</p>
    </div>
  );
}

export default App;
