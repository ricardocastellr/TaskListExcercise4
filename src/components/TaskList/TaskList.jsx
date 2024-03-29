import { Task } from '../Task/Task';
import './TaskList.css';

export function TaskList({ tasks, onChangeTaskCompleted }) {
  // Contador para almacenar el número de tareas completadas y pendientes
  const completedCount = tasks.filter(task => task.completed).length;
  const pendingCount = tasks.filter(task => !task.completed).length;

  return (
    <div>
      {/* Renderiza cada tarea con su respectivo estado */}
      {tasks.map(task => (
        <Task
          key={task.id}
          title={task.title}
          completed={task.completed}
          onCompleted={() => onChangeTaskCompleted(task.id)}
        />
      ))}
      {/* Muestra el contador de tareas completadas y pendientes */}
      <p>Total de tareas completadas: {completedCount}</p>
      <p>Total de tareas pendientes: {pendingCount}</p>
    </div>
  );
}
