import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Exhibitions from './pages/Exhibitions'
import CV from './pages/CV'
import Blog from './pages/Blog'
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/exhibitions">
            <Exhibitions />
          </Route>
          <Route path="/cv">
            <CV />
          </Route>

        </Switch>
      </Router>


    </div>
  )
}

export default App
