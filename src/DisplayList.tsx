function DisplayList({filteredTodos,toggleTodo}:any){
    return <ul>
    {filteredTodos.value.map((todo: { id: number; completed: boolean; text: string; }) => (
      <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
        {todo.completed ? <s>{todo.text}</s> : todo.text}
      </li>
    ))}
  </ul>
}

export default DisplayList