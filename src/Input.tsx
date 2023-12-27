function Input({addTodo}:any){
    return <input
    type="text"
    onKeyDown={event => {
      if (event.key === 'Enter') {
        const target = event.target as HTMLInputElement;
        addTodo(target.value);
        target.value = '';
      }
    }}
  />
}
export default Input