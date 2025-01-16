import {useEffect, useState} from 'react'
import './App.css'

function App() {

    const[name,setName] =useState<string>("")
    const containerStyles={
        backgroundColor:"blue",
        height:"50px",
        width:"40px"
    }
    useEffect(():void=>{
        changeName()
    },[])
    const changeName =()=>{
        setName("john")
    }


  return (
    <>
        <div className={"container"} style={containerStyles}>
        </div>
        <p>{name}</p>

    </>
  )
}

export default App
