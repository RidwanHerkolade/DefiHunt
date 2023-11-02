import React from 'react'
import ReactDOM from 'react-dom/client'
import MarketFile from './Pages/MarketFile.jsx'
import App from './App.jsx'
import './index.css'
import Nav from './Component/Navigation/Nav.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter>
         <Nav/>  
         <Routes>
             <Route path="/" element={<App/>}/>
             <Route path="/market/:id" element={<MarketFile/>}/>
         </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
