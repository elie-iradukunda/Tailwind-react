import React from 'react'
import Navbar from './components/navbar'
import './App.css'
import Main from './components/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Addfood from './components/Addfood';
import FoodList from './components/Listfood';

function App() {


  return (
    <>

    
   
<Navbar/>
{/* <Main/> */}

      <BrowserRouter>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/" element={<FoodList />} />
        <Route path='/addfood' element={<Addfood/>}/>
        <Route path='/main' element={<Main/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
