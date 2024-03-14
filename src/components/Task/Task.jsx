import { useState } from 'react';
import './Task.css';

export function Task({ title, completed }) {
  const [isCompleted, setIsCompleted] = useState(completed);

  return (
    <div className="task-container">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => setIsCompleted(!isCompleted)}
        className="checkbox"
      />
      <span
        style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}
        className="task-title"
      >
        {title}
      </span>
    </div>
  );
}