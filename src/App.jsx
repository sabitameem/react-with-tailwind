import { useState } from 'react'

import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import PhoneBar from './components/PhoneBar/PhoneBar'
import PriceList from './components/PriceList/PriceList'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className="App">
      <Navbar></Navbar>
    <h1 className='text-5xl text-purple-500'>Hello from Tailwind</h1>
    <PriceList></PriceList>
    <Dashboard></Dashboard>
    <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
