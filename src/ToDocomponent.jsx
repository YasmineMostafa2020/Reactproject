import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";
import { addtodo, Delete } from "./todoredux";
import { useDispatch } from "react-redux";
function Todo() {
  const todostate = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const addTodo = (task) => {
    dispatch(addtodo(task));
  };
  const deleteTodo = (i) => {
    dispatch(Delete(i));
  };

  return (
    <div className="text-center">
      <TodoForm addTodo={addTodo}></TodoForm>
      <TodoList todos={todostate} deleteTodo={deleteTodo}></TodoList>
    </div>
  );
}
export default Todo;
