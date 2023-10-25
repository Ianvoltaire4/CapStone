import React from 'react'
import { useState, useContext, createContext } from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './HomePage'




const App = () => {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App