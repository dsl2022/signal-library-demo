import { computed,signal } from "@preact/signals-react";

export const todos = signal([{id:2,text:"test",completed:false}]);
export const filter = signal('all');
export const filteredTodos = computed(() => {
  switch (filter.value) {
    case 'active':
      return todos.value.filter(todo => !todo?.completed);
    case 'completed':
      return todos.value.filter(todo => todo?.completed);
    default:
      return todos.value;
  }
});
export function addTodo(text:any) {
  const newTodo = { id: Date.now(), text, completed: false };  
  todos.value = [...todos.value, newTodo];
}
export function toggleTodo(id:number) {
  console.log({id})
  todos.value = todos.value.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
}
export function setFilter(newFilter:any) {
  filter.value = newFilter;
}