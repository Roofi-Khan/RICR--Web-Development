import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Home from "./pages/Home"
import Register from './pages/Register'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/contact" element={<Contact/>}/>
      

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App