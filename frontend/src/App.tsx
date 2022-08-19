import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import './index.css'
import About from './pages/About'
import Blog from './pages/Blog'
import CV from './pages/CV'
import Exhibitions from './pages/Exhibitions'
import Gallery from './pages/Gallery'
import Home from './pages/Home'

function App(): JSX.Element {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="exhibitions" element={<Exhibitions />} />
          <Route path="cv" element={<CV />} />
        </Routes>

      </BrowserRouter>



    </div >
  )
}

export default App
