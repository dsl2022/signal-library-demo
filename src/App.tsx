// import { signal, computed } from '@preact/signals-react';


import { useSignal, useComputed } from "@preact/signals-react";

function App() {
  const todos = useSignal([
    { id: 1, text: 'Buy milk', completed: false },
    { id: 2, text: 'Walk the dog', completed: true },
    // more initial todos...
  ]);

  const filter = useSignal('all'); // 'all', 'active', or 'completed'

  const filteredTodos = useComputed(() => {
    switch (filter.value) {
      case 'active':
        return todos.value.filter(todo => !todo.completed);
      case 'completed':
        return todos.value.filter(todo => todo.completed);
      default:
        return todos.value;
    }
  });

  function addTodo(text:any) {
    console.log({text,filter})
    const newTodo = { id: Date.now(), text, completed: false };
    console.log({newTodo})
    todos.value = [...todos.value, newTodo];
    console.log("to do value",todos.value)
  }

  function toggleTodo(id:number) {
    console.log({id})
    todos.value = todos.value.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  function setFilter(newFilter:any) {
    filter.value = newFilter;
  }
  console.log(todos.value)
  return (
    <div>
      <input
        type="text"
        onKeyDown={event => {
          if (event.key === 'Enter') {
            const target = event.target as HTMLInputElement;
            addTodo(target.value);
            target.value = '';
          }
        }}
      />
      <ul>
        {filteredTodos.value.map(todo => (
          <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('active')}>Active</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
    </div>
  );
}

export default App;
