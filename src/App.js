import React from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import axios from 'axios'
import {originals,actions} from './urls'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={originals}  title="Netflix Originals"/>
      <RowPost url={actions} title="Action" isSmall/>
    </div>
  )
}

export default App
