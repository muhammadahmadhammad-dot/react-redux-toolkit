import AddTodo from "./components/AddTodo";
import List from "./components/List";

function App() {
  return (
    <div className="flex justify-center mt-5">
      <div className="w-1/3">
        <AddTodo />
        <List />
      </div>
    </div>
  );
}

export default App;
