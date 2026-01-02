import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, marksAsDone } from "../features/todo/todoSlice";

export default function Todo () {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    const dispatch = useDispatch();

    const clickHandler = (id) => {
        console.log("delete", id);
        dispatch(deleteTodo(id));
    };

    const doneHandler = (id) => {
        console.log("done", id);
        dispatch(marksAsDone(id));
        
    }

    return (
        <>
        <AddForm />
        <h2>Todo List App</h2>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}> <span style={{textDecoration: todo.isDone ? "line-through" : "none"}}><b>{todo.task}</b></span>
                <button onClick={() => clickHandler(todo.id)}>Delete</button>
                &nbsp;
                {todo.isDone ?(<button onClick={() => doneHandler(todo.id)}> Un Mark</button>) : (<button onClick={() => doneHandler(todo.id)}>Mark</button>)}
                </li>
            ))}
        </ul>
        </>
    );
}