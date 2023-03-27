import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState("")

  let info;
  let url = 'http://127.0.0.1:8000/user/api/'
  // info = fetch(url)

//   fetch(url, {
//     method : "GET",
//     mode: 'cors',
//     headers: {}
// })
//   .then(response => console.log(response))
//   .then(data => console.log(data));
// useEffect(()=>axios.get(url).then((response) =>{
//   setCount(((response.data)))
// }))

useEffect(()=>{
  axios.get(url).then((r)=>{
    setCount(r.data)
  })
},[])


  return (
    <div className="App">
      {count.resp}
    </div>
  )
}

export default App
