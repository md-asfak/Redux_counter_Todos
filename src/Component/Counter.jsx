import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Slice/CounterSlices";

export const Counter = () => {
  const Count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  function incFunc() {
    if (Count < 20) {
      dispatch(increment());
    } else {
      alert("Sorry Guys ☹ ☹!");
    }
  }

  function decFunc() {
    if (Count > 0) {
      dispatch(decrement());
    } else {
      alert("Sorry Guys ☹ ☹");
    }
  }
  return (
    <>
      <div className="bg-slate-500 text-white w-[300px] text-center mx-auto p-[50px]">
        <h1 className="text-3xl">Counter App</h1>
        <h4 className="text-2xl">Counter {Count}</h4>
        <button className="bg-blue-900 mr-3 mt-12 p-1 px-2" onClick={incFunc}>
          Increment
        </button>
        <button className="bg-blue-900 p-1 px-2" onClick={decFunc}>
          Decrement
        </button>
      </div>
    </>
  );
};
