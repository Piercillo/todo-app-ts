import './App.css'
import Icono from '../src/assets/todo-app-icon.png'
import { TodoPendient } from './components/TodoPendient'
import { TodoComplete } from './components/TodoComplete'
import useTodo from './hooks/useTodo'


function App() {

  const { handleAddTodo, inputValue, setInputValue, todos, 
        handleCompleteTodo, deleteTodo, restartTodo } = useTodo()

  return (
    <>
      <header className='font-roboto bg-amber-300'>
        <div  className='flex items-center justify-between p-5'>
          <div className="flex items-center">
            <img src={Icono} alt="Icon" className='w-9 y-9 ml-3'/>
            <div className='text-2xl font-black ml-2 '>Todo app list</div>
          </div>
        
          <button 
            className='bg-red-500 text-white px-4 py-2 rounded' 
            type="submit"
            onClick={restartTodo}
            >
            Reiniciar
          </button>
        </div>
      </header>

      <main className='font-quicksand bg-amber-200 flex items-center justify-center m-2 rounded-2xl p-9'>
        <div className=''>
          <h2 className=' font-medium text-3xl p-3'>Digita la tarea:</h2>
        </div>
        <form onSubmit={handleAddTodo} className='pl-3'>
          <div className="w-full max-w-sm min-w-[400px]">
            <div className="relative">
              <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className='pr-24 w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2  transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="...'/>
              <button
                type="submit"
                className=" absolute right-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Agregar
              </button>
            </div>
          </div>
        </form>
      </main>


      <TodoPendient
      todos={todos}
      handleCompleteTodo= {handleCompleteTodo}
      deleteTodo={deleteTodo}
      />

      <TodoComplete
      todos={todos}
      deleteTodo={deleteTodo}
      />


    </>
  )
}

export default App
