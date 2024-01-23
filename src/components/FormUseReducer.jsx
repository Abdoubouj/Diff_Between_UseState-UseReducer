import React, { useReducer } from 'react'

const FormUseReducer = () => {
    const FormReducer = (state,action)=>{
      if(action.type === "setName"){
        return {...state,name:action.payload}
      }else if(action.type === "setAge"){
        return {...state,age:action.payload}
      }else{
        return state
      }
    }
    const handelChangeName =(e)=>{
        dispatch({
            type:"setName",payload:e.target.value
        })
    }
    const handleChangeAge =(e)=>{
        dispatch({
            type:"setAge",payload:e.target.value
        })
    }

    const [state,dispatch] = useReducer(FormReducer,{name:"",age:""});
  return (
    <div>
        <h1>using use reducer</h1>
        <input type="text" placeholder='name' onChange={handelChangeName} />
        <input type="text" placeholder='age' onChange={handleChangeAge} />
        <h1>name: {state.name}  age: {state.age}</h1>
    </div>
  )
}

export default FormUseReducer