import { useState } from 'react';
import './App.css';

function App() {
  const [headingName, setHeading]=useState("")
  const [name, setName]=useState("")

  function updateHeading(event){
    setHeading(name);
    event.preventDefault();
  }
 
  function updateName(event){
    setName(event.target.value)
   
  }
  return (
    <div className="App">
     <h1>Hello {headingName}</h1>
     <form onSubmit={updateHeading}>
     <input onChange={updateName} type="text" placeholder="Yourname"></input>
     <button >Submit</button>
     </form>
    </div>
  );
} 
export default App;
