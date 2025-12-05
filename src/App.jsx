import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [countToSet, setCountToSet] = useState(0);
  // const incrementHandler = (numVal) => {
  //   setCount((preValue) => preValue + 1);
  // };
  // const DecrementHandler = (numVal) => {
  //   setCount((preValue) => preValue - 1);
  // };

  // My own for Decrement
  /*
  <button
          onClick={() =>
            setCount((count) => {
              if (count === 0) {
                alert("Can't decrese more");
              } else {
                return count - 1;
              }
            })
          }
          style={{ margin: "0 5px" }}
        >

*/

  return (
    <>
      <h1>Counter is {count}</h1>
      <div className="card">Count is{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)} style={{ margin: "0 5px" }}>
          Increase
        </button>
        <button
          onClick={() => setCount((count) => Math.max(count - 1, 0))}
          style={{ margin: "0 5px" }}
        >
          Decrese
        </button>
        <button onClick={() => setCount(0)} style={{ margin: "0 5px" }}>
          Reset
        </button>
      </div>
      <div style={{ margin: "20px 0" }}>
        <input
          style={{
            width: "100px",
            border: "1p solid white",
            margin: "0 5px",
            padding: "0.6em 1.2em",
          }}
          type="text"
          value={countToSet}
          onChange={(e) => setCountToSet(Number(e.target.value))}
          placeholder="0"
        />
        <button
          style={{ margin: "0 5px" }}
          onClick={() => {
            setCount(Number(countToSet));
            setCountToSet(0);
          }}
        >
          Set to {countToSet}
        </button>
      </div>
    </>
  );
}
