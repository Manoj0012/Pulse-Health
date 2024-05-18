
import React from 'react'
import Home from './screens/home';
import Aboutus from './screens/aboutus';
import Services from './screens/services';
import Contact from './screens/contact';
import Nav from './components/nav'
import Signup from './screens/signup';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<Aboutus/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      </>
      )}

export default App