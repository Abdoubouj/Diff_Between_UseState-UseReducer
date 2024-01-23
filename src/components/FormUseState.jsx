import React, { useState } from 'react'

const FormUseState = () => {
    const [name,setName] = useState("");
    const [age , setAge]  =useState("");
    const handleChangeName = (e)=>{
        setName(e.target.value)
    }
    
    const handleChangeAge = (e)=>{
        setAge(e.target.value)
    }
    
  return (
    <div>
        <h1>Using use state</h1>
    <div style={{display:"flex",flexDirection:"column" , gap:"10px" , alignItems:"center" , marginTop:"20px"}}>
      <input type="text" placeholder='name' onChange={handleChangeName} value={name} />
      <input type="text" placeholder='age' onChange={handleChangeAge} value={age} />
      <h1>name:{name} age:{age}</h1>
    </div>
</div>  )
}

export default FormUseState