import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState("")

  // let info;
  // let url = 'http://127.0.0.1:8000/user/api/'


// useEffect(()=>{
//   axios.get(url).then((r)=>{
//     setCount(r.data)
//   })
// },[])


  return (
    <div className="App">
      <Navbar/>
    </div>
  )
}

export default App
