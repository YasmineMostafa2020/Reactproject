const TodoList = ({ todos, deleteTodo}) => {
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <div className="m-auto ">
            <ul key={i} className="list-unstyled justify-content-center px-2  ">
              <li className="border ">
                <div className="text ">
                  <p>Title : {todo.title}</p>
                  <p>Content : {todo.content}</p>
                  <button className="btn btn-danger mb-2" type="submit" onClick={() => deleteTodo(i)}>
                   delete
                  </button>
                </div>
              </li>
            </ul>
          </div>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-center">
      <h5 className="mx-5 text-muted ">Todos List</h5>
      {todosList}
    </div>
  );
};

export default TodoList;
