import './Task.css';

export function Task({ title, completed, onCompletion }) {
  return (
    <div className="task-container">
      <input
        type="checkbox"
        checked={completed}
        onChange={onCompletion}
        className="checkbox"
      />
      <span
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
        className="task-title"
      >
        {title}
      </span>
    </div>
  );
}
