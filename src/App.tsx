import "./App.css";
import Input from "./components/Input";
import People from "./components/People";
import Counter from "./features/counter/Counter";

function App() {
  return (
    <div className="App">
      {/* <div>
        <Input />
        <People />
      </div> */}
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
