import "./App.css";
import { useState } from "react";

function sayHello() {
  for (var i = 0; i <= 100; i++) {
    console.log(i);
    console.log('wasup!');
  }
}

const App = () => {
  const [counter, setCounter] = useState(-5);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter ((prevCount) => prevCount +1)}>+</button>
      <button onClick={sayHello()}>clikc&checkConsole</button>
    </div>
  );
};

export default App;
