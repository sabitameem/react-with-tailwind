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
    
    <PriceList></PriceList>
    <div className='md:flex gap-6 mt-6'>
       <Dashboard></Dashboard>
       <PhoneBar></PhoneBar>
    </div>
    </div>
  )
}

export default App
