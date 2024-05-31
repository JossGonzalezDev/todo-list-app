import { Todo } from "../App";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    toggleComplete: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoList = ({ todos, toggleComplete, removeTodo } : TodoListProps) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onToggle={toggleComplete} onRemove={removeTodo} />
            ))}
        </ul>
    )
}

export default TodoList;