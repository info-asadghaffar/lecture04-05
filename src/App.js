import React from 'react';
import { useState } from 'react';
import Nav from './comp/Nav';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function App() {

  const [good,setGoods] = useState("");
  const [firstname,setFirstname] = useState("")
  const [lastname,setLastname] = useState("")
  const [age,setAge] = useState("")
  const[count,setCount]= useState(0)
  function Counter (){
    setCount(count+1)
  }

  return (
    <div>

      <Nav name="Asad" age={20}/>
      <Nav name="Waqas Ghaffar" age={26}/>
      <Nav name="Zeeshan" age={19}/>
      <TextField id="standard-basic" label="Name" variant="standard"/>
      <TextField id="standard-basic" label="Email" variant="standard"/>
      <Button variant="contained">Submit</Button>
      <h1>{count}</h1>
      <button onClick={Counter}>Click me</button>
      <label htmlFor="goods">Goods</label>
      <input type="text" placeholder='Enter Your Goods' value={good} onChange={(e)=>setGoods(e.target.value)}/>
      <label htmlFor="goods">First Name</label>
      <input type="text" placeholder='Enter Your First Name' value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
      <label htmlFor="goods">Last Name</label>
      <input type="text" placeholder='Enter Your Last Name' value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
      <label htmlFor="goods">Age</label>
      <input type="text" placeholder='Enter Your Age' value={age} onChange={(e)=>setAge(e.target.value)}/>
    </div>
  )
}

export default App;