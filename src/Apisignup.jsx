import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Apisignup = () => {
   let navigate=useNavigate()
   let [signup,setsignup]=useState({
    mail:"",
    pwd:"",
    gender:"",
    name:""

   })
   function inputdet(e){
      setsignup({...signup,[e.target.name]:e.target.value})
      console.log(signup);
      
   }
   function forsave(e){
     e.preventDefault();
    if(signup.mail&&signup.pwd){
   
axios.post(" http://92.205.109.210:8070/api/signup",signup)
        .then(res=>{
console.log(res.data)
// setApi(res.data.data)
        })
        

}}
let[api,setApi]=useState()
 


  return (
    <div>Apisignup<br/>
    <form onSubmit={forsave}>
        <input  type='text ' placeholder='email' name='mail' onChange={inputdet} /><br/>
        <input  type='text' placeholder='password'name="pwd" onChange={inputdet}/><br/>
        <input type='text'   placeholder='name' name='name' onChange={inputdet}  /><br/>
        <input type='text' placeholder='gender' name='gender' onChange={inputdet}/><br/>
             <button >click</button>
</form>
{/* <DataTable
columns={col}
data={api}
highlightOnHover
pagination
/> */}
    </div>
  )
}

export default Apisignup