import { TaskList } from './components/TaskList/TaskList'
import './App.css'

const tasks = [
  {
    id: 1,
    title: 'Terminar el curso de React',
    completed: false
  },
  {
    id: 2,
    title: 'Task 2',
    completed: false
  },
  {
    id: 3,
    title: 'Task 3',
    completed: true
  }
]

function App() {
  return (
    <>
      <TaskList tasks={tasks}/>
      <p className='text-made-by'>Elaborado por Ricardo Castell Rodríguez</p>
    </>
  )
}

export default App
