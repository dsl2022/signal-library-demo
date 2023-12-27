import { addTodo,filteredTodos,setFilter,toggleTodo} from './signalStore/todos'
import NavBar from './NavBar';
import Input from './Input';
import DisplayList from './DisplayList';
import ButtonsGroup from './ButtonsGroup';
function App() {
  return (
    <>
    <div className="flex flex-col align items-center h-3/5" >
      <NavBar filteredTodos={filteredTodos}/>
      <Input addTodo={addTodo}/>
      <DisplayList filteredTodos={filteredTodos} toggleTodo={toggleTodo}/>
      <ButtonsGroup setFilter={setFilter}/>
    </div>

    </>
  );
}

export default App;
