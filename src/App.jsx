import { useState } from 'react'
import './App.css'

function App() {
  const [objData, setObjData] = useState({})

  const handleValue = (value,name) =>{
    const data = {[name]:value}
    setObjData({...objData,...data})  
  }
  console.log(objData);

  return (
    <>
      <div>
        <h1>Form</h1>
        <form action="">
          <input 
          placeholder='Name'
          name="name"
          type="text"
          onChange={(e) =>handleValue(e.target.value, e.target.name)} />

          <input 
          placeholder='Age'
          name="age"
          type="number"
          onChange={(e) =>handleValue(e.target.value, e.target.name)} />

          <input 
          placeholder='phone'
          name="phone"
          type="tel"
          onChange={(e) =>handleValue(e.target.value, e.target.name)} />

          <input 
          placeholder='Email'
          name="email"
          type="email"
          onChange={(e) =>handleValue(e.target.value, e.target.name)} />
        </form>
      </div>
    
      <ul>
        {Object.entries(objData).map(([name, value], index) => (
          <li key={index}>
            {name}: {value}
          </li>
        ))}
      </ul>
     
    </>
  )
}

export default App
