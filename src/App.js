
import React,{useState}  from 'react';
import './App.css';


function App() {
 const [input,setInput]=useState("");
 const [list,setList]=useState([]);
 
 
 const  inputEventHandler=(e)=> {
    setInput(e.target.value);

  }
 const listShowEvent=()=>
 {
   setList((prevVal)=>{
    return [input,...prevVal]
   
   }) 
   setInput("")
    
 }
   const deleteItems=(id)=> {
     setList((prevVal)=>{
      
      return prevVal.filter((item,index)=>{

return index!==id;  } )  })}    
      
     
    
   
 
  return (
    <div className="App">
       <div className='box'>
         <br></br>
         <h1>ToDoList</h1>
         <input type="text" placeholder='add an items' onChange={inputEventHandler} value={input}/>
         <button onClick={listShowEvent}></button>
         </div>
        { list.map((item,index)=>{
           return <div className='result'><button onClick={()=>deleteItems(index)}></button><p>{item}</p></div>
         })}

        </div>
    
  )
}


export default App;
