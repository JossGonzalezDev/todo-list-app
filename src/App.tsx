import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

// Interface para el tipo Todo que es un objeto con id, text y done
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

function App() {

  /**
   * UseState para guardar los todos
   */
  const [todos, setTodos] = useState<Todo[]>(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')!) : []);

  /**
   * UseEffect para guardar los todos en el localStorage
   */
  useEffect(() => {
    if (todos.length === 0) {
      localStorage.removeItem('todos');
      return;
    }
    console.log('First render')
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  /**
   * Función para agregar un todo a la lista
   * @param todo Todo a agregar
   */
  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  }

  /**
   * Función para marcar un todo como completado o no completado
   * @param id Id del todo a marcar como completado o no completado
   */
  const toggleComplete = (id: number) => {
    // Recorremos los todos y si el id coincide con el id del todo
    // Cambiamos el valor de done a su valor contrario
    // Y retornamos el todo modificado
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done
        }
      }
      return todo;
    });
    setTodos(newTodos);
  }

  /**
   * Función para eliminar un todo de la lista
   * @param id Id del todo a eliminar
   */
  const removeTodo = (id: number) => {
    // Filtramos los todos y retornamos todos los todos cuyo id sea diferente al id pasado
    const newTodos = todos.filter(todo => todo.id !== id);
    console.log(newTodos);
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    </div>
  )
}

export default App
