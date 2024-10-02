
import './App.css'
import AddTodo from './components/AddTodo'
import TodosList from './components/TodosList'


function App() {
 

  return (
    <>
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div>
    <AddTodo></AddTodo>
    </div>
    <div>
      <TodosList></TodosList>
    </div>
      </>
  )
}

export default App
