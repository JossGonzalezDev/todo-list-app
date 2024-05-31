import React from "react";
import { Todo } from "../App";

/**
 * Interface for TodoForm component
 * @interface TodoFormProps
 * @property {Function} addTodo - Función para agregar un todo a la lista
 */
interface TodoFormProps {
    addTodo: (todo: Todo) => void;
}

/**
 * Componente para agregar un todo a la lista
 * @component
 * @param {TodoFormProps} props Propiedades para el componente TodoForm
 */
const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {

    // UseState para guardar el valor del input
    // Se guarda el valor del input para poder agregarlo a la lista de todos al hacer submit
    const [todo, setTodo] = React.useState<string>('');

    /**
     * Función para manejar el submit del formulario
     * @param {React.FormEvent} e Evento del formulario
     */
    const handleSubmit = (e: React.FormEvent) => {
        // Prevenimos que el formulario haga un submit por defecto y recargue la página al hacer submit
        e.preventDefault();
        // Si el valor del input está vacío retornamos
        if (todo.trim() === '') return;
        // Llamamos a la función addTodo que viene por props desde el componente padre y le pasamos el valor del input
        addTodo({
            id: Date.now(),
            text: todo,
            done: false
        });
        // Limpiamos el valor del input
        setTodo('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={todo}
                onChange={e => setTodo(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm;