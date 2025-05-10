import type { Todos } from "../types"
type Props = {
  todos: Todos[],
  deleteTodo: (id: Todos["id"]) => void
};

export const TodoComplete = ({todos, deleteTodo} : Props) => {
  const completadas = todos.filter(todo => todo.status);
  return (
    <>
      <section className="max-w-3xl mx-auto my-6 p-6 bg-white shadow-md rounded-xl border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
      ✅ Tareas Completadas
      </h2>

      {completadas.length === 0 ? (
        <p className="text-gray-500 text-center py-4">⏳ Aún no has completado alguna tarea.</p>
      ) : (
        <ul className="space-y-3">
          {completadas.map(todo => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-amber-100 px-4 py-2 rounded-lg shadow-sm hover:bg-amber-200 transition"
            >
              <div className="flex-1 pr-2 overflow-hidden">
                <span className="text-gray-700 break-words line-clamp-none">{todo.todo}</span>
              </div>

              <div className="grid items-center grid-cols-2 gap-2">
                <span className="text-sm text-green-600 font-medium">✔️ Hecho</span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                >
                  X
                </button>
              </div>
              
            </li>
          ))}
        </ul>
      )}
    </section>
    </>
  )
}
