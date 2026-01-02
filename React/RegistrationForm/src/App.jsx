import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './pages/Registration'
import {Toaster} from 'react-hot-toast'
import Home from './pages/Home';
import Header from './components/Header';

const App = () => {
  return (
    <>
    
    <BrowserRouter>
    <Toaster/>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path="/register" element={<Registration />} />   
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App