import { Task } from '../Task/Task'
import './TaskList.css'

export function TaskList({ tasks }) {
  return (
      tasks.map(task => <Task key={task.id} title={task.title} completed={task.completed} />)
  )
}