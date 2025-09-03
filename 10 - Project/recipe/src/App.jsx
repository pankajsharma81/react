import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/nav'

export default function App() {
  return (
    <div className='h-screen w-screen bg-gray-800 text-white'>
      <Navbar/>
      <Mainroutes/>
    </div>
  )
}
