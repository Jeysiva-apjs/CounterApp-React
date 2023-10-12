function Counter() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);
  }

  function decrease() {
    setCounter(counter - 1);
  }

  return (
    <div className="counter">
      <h3>Counter Value: {counter}</h3>
      <div className="counter">
        <button onClick={increase}>Add Value</button>
        <h3>{counter}</h3>
        <button onClick={decrease}>Sub Value</button>
      </div>
    </div>
  );
}

export default Counter;
