import { useState } from "react";
import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);
  }

  function decrease() {
    setCounter(counter - 1);
  }
  return (
    <>
      <Header />
      <h3>Counter Value: {counter}</h3>
      <div className="counter">
        <button onClick={increase}>Add Value</button>
        <h3>{counter}</h3>
        <button onClick={decrease}>Sub Value</button>
      </div>
      <Footer counter={counter} />
    </>
  );
}

export default App;
