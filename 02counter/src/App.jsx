import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
// useState = propogates the changes in the variable to the UI
// whenever the variable changes, the UI will be updated automatically
// useState returns an array of two values
// first value is the current state (variable)
// second value is a function to update the state (variable)

  const [counter,setCounter] = useState(15)
  // let counter = 12;

  const addValue = () => {
    console.log("updated to : " + counter)
    if(counter>=20){
      alert("Counter cannot be more than 20")
      return;
    }
    setCounter(counter+1);
  }
  const removeValue = () => {
    console.log("updated to : " + counter)
    if(counter<=0){
      alert("Counter cannot be less than zero")
      return;
    }
    setCounter(counter-1);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
