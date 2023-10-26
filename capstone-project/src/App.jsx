import React from 'react'
import { useState, useContext, createContext } from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './HomePage'
import SignUpPage from './SignUpPage'




const App = () => {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='signUp' element={<SignUpPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App