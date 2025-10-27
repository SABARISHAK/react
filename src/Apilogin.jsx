import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Apilogin = () => {
           let navigate= useNavigate()

     
    let [reg,setreg]=useState(
             {
           name:"",
           pwd:"",
           
          }
          
         )
         function inputde(e){
      setreg({...reg,[e.target.name]:e.target.value})
     
         }
    let data=JSON.parse(localStorage.getItem("details"))
     function forsa(e){
    e.preventDefault(e);

    if(data.name==reg.name&&data.pwd==reg.pwd){
    navigate("/success")
    }
    else{
        alert('fill the correct user and pass')
    }
     axios.post(" http://92.205.109.210:8070/api/login",reg)
        .then(res=>{
console.log(res.data)
setreg(res.data)
        })
}

  
 
  return (
    <div>Apilogin

      <form onSubmit={forsa}>
      <label> name<input type='text' name='name' onChange={inputde}/></label>
      <label> password <input  type='text' name='pwd' onChange={inputde}/></label>
      <br/>
      <button >login</button>
     
</form>
    

    </div>
  )
}

export default Apilogin