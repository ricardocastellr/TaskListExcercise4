import { Task } from '../Task/Task'
import './TaskList.css'

export function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map(task => <Task key={task.id} title={task.title} completed={task.completed} />)}
    </ul>
  )
}