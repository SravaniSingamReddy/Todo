import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./components/ToDo-List";
import AddToDo from "./components/Add-Todo";

function App() {
  return (
    <div style={{margin:'30px'}}>
      <AddToDo />
      <ToDoList />
    </div>
  );
}

export default App;
