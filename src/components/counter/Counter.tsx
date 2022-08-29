import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from '../../redux/counterSlice';
import { RootState } from '../../redux/store';
export const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
    <div></div>
    <div>
      <button
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      Current Count: {count}
      <button
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </div>
  </div>
  )
}
