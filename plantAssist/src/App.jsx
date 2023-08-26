// import { useState } from 'react'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Register from './components/pages/Register'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/signup" element={<Register/>} />
      </Routes>
    </>
  )
}

export default App
