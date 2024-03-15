import { Task } from '../Task/Task';
import './TaskList.css';

export function TaskList({ tasks, onTaskCompletion }) {
  // Contador para almacenar el número de tareas completadas
  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div>
      {/* Renderiza cada tarea con su respectivo estado */}
      {tasks.map(task => (
        <Task
          key={task.id}
          title={task.title}
          completed={task.completed}
          onCompletion={() => onTaskCompletion(task.id)}
        />
      ))}
      {/* Muestra el contador de tareas completadas */}
      <p>Total de tareas completadas: {completedCount}</p>
    </div>
  );
}
