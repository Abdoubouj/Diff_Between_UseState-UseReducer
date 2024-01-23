import React, { useReducer } from "react";
import { useState } from "react";

const UseReducer = () => {
  const countReducer = (state, action) => {
    if (action.type === "increment") {
      return { count: state.count + 1 };
    } else if (action.type === "decrement") {
      return { count: state.count - 1 };
    }else{
        return state
    }
  };

  const [state,dispatch] = useReducer(countReducer,{count:0});
  return (
    <div>
      <h1>Using useReducer</h1>
      <div style={{display:"flex" , gap:"10px" , alignItems:"center" , marginTop:"20px"}}>
        <button style={{padding:"8px 15px"}} onClick={()=>{dispatch({type:"decrement"})}}>-</button>
        <p style={{fontSize:"20px"}}>{state.count}</p>
        <button style={{padding:"8px 15px"}} onClick={()=>{dispatch({type:"increment"})}}>+</button>
        </div>
    </div>
  );
};

export default UseReducer;
