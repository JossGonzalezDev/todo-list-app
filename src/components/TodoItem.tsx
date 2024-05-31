import { Todo } from "../App";

/**
 * Interface para el componente TodoItem
 */
interface TodoItemProps {
    todo: Todo;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}

/**
 * Componente para mostrar un todo en la lista
 * @param param0 
 * @returns 
 */
const TodoItem = ({ todo, onToggle, onRemove }: TodoItemProps) => {
    return (
        <li style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggle(todo.id)}
            />
            {todo.text}
            <button onClick={() => onRemove(todo.id)}>Delete</button>
        </li>
    )
}

export default TodoItem;