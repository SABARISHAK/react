import axios from 'axios'
import { Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

const Student = () => {
      let [book,setBook]=useState()

     let [isEdit,setIsEdit]=useState(false)

     let [stud,setStud]=useState({
        name:'',
        year:'',
        department:"",
        rollno:'',
        gender:'male'
     })


    function getdel(){
        axios.get("http://92.205.109.210:8051/api/getall")
        .then(res=>{
            console.log(res.data);
            setBook(res.data.data)
            
        })
    }
    useEffect(()=>{
        getdel()
    },[]
    )
    let col=[
         {
               name:'studentId',
            selector:row=>row.studentId
         },
         {
               name:'name',
            selector:row=>row.name
         },
         {
            name:'year',
            selector:row=>row.year
        },
        {
               name:'department',
            selector:row=>row.department
        },
        {
               name:'gender',
            selector:row=>row.gender
        },
        {
            name:"Delete",
            selector:row=><Button variant='danger' onClick={()=>handledelete(row.studentId)}>Delete</Button>
        },
        {
            name:"Edit",
            selector:row=><Button variant='dark' onClick={()=>Edithandler(row)} >Edit</Button>
        }
    ]

    function Edithandler(data){
        setStud(data)
        console.log(stud);
     setIsEdit(true)
      

    }
    function handledelete(id){
        axios.post(`http://92.205.109.210:8051/api/delete/${id}`)
        .then(res=>{
            console.log(res);
alert('add successfully')
            
        })
        getdel()
    }

    function changehandler(e){
        setStud({...stud,[e.target.name]:e.target.value})
    }

    function submitHandler(e){
        e.preventDefault()
     console.log(stud);

     if (isEdit){
        console.log(stud.studentId);
        const {studentId,name,rollno,year,department,gender}=stud


        console.log({name,rollno,year,department,gender});
         axios.post(`http://92.205.109.210:8051/api/update/${studentId}`,{name,rollno,year,department,gender})
         .then(res=>{
             alert('successfully edited')
             setStud({
        name:'',
        year:'',
        department:"",
        rollno:'',
        gender:''
     })

     setIsEdit(false)
         }

         )
        
        

     }else{
        axios.post('http://92.205.109.210:8051/api/create',stud)
     .then(res=>{
        console.log(res);
        alert('successfully added')
        
     })
     }
     

     getdel()
    }
  return (
    <div>Student
        <form onSubmit={submitHandler}>

    <input name='name' value={stud.name} placeholder='name' onChange={changehandler} />
        <input name='department' value={stud.department} placeholder='dept' onChange={changehandler} />

    <input name='rollno' value={stud.rollno} onChange={changehandler}  placeholder='rollno'/>

    <input name='year' value={stud.year} onChange={changehandler} placeholder='year'/>

    <select name='gender' onChange={changehandler}>

        <option>male</option>
        <option>female</option>

        </select>

        <button>{isEdit?'Update':'Create'}</button>



    </form>


        <DataTable
columns={col}
data={book}
highlightOnHover
pagination

/>

    </div>
  )
}

export default Student