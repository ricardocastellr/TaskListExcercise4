import { TaskList } from './components/TaskList/TaskList'
import './App.css'

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
]

function App() {
  return (
    <>
    <div>
      <TaskList tasks={tasks}/>
      <p className='text-made-by'>Elaborado por Ricardo Castell Rodríguez</p>
    </div>
    </>
  )
}

export default App
