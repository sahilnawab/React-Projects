
import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]=useState("olive");
  
const changeBG=(evt)=>{
 let buttontext= getButtonData(evt);
 console.log(buttontext);
 
  setColor(buttontext);
}

let getButtonData=(evt)=>evt.target.innerText
  

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    
    </div>
    <div className="container">
    <button onClick={changeBG} style={{backgroundColor:'green'}} >green</button>
    <button onClick={changeBG} style={{backgroundColor:'red'}} >Red</button>
    <button onClick={changeBG} style={{backgroundColor:'yellow'}} >yellow</button>
    <button onClick={changeBG} style={{backgroundColor:'pink'}} >pink</button>
    <button onClick={changeBG} style={{backgroundColor:'grey'}} >grey</button>
    <button onClick={changeBG} style={{backgroundColor:'black'}} >black</button>
</div>
    </>
  )
}

export default App
