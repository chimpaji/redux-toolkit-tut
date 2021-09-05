import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/feature/counter/counterSlice";

export function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{counter}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
