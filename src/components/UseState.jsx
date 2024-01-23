import React,{useState} from 'react'

const UseState = () => {
    const [count , setCount] = useState(0);

    const handleIncrement = ()=>{
        setCount(prev=>prev+1);
    }
    const handledecrement = ()=>{
        setCount(prev=>prev - 1);
    }
  return (
    <div>
        <h1>Using UseState</h1>
        <div style={{display:"flex" , gap:"10px" , alignItems:"center" , marginTop:"20px"}}>
        <button style={{padding:"8px 15px"}} onClick={handledecrement}>-</button>
        <p style={{fontSize:"20px"}}>{count}</p>
        <button style={{padding:"8px 15px"}} onClick={handleIncrement}>+</button>
        </div>
    </div>
  )
}

export default UseState