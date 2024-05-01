import React from 'react'
import Navbar from './Components/Navbar'
// import Backimage from './Pages/Home'
// import Profile from './Accesories/Profile'
// import Backimage from './Pages/Home'
// import Products from './Pages/Products'
// import Backimage from './Pages/Home/Home'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import Footbar from './Components/Footbar'
import Solutions from './Pages/OurSolutions/Solutions'
import Projects from './Pages/Projects/Projects'
import Careers from './Pages/Careers/Careers'
import Benefits from './Pages/Careers/Benefits'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
// import ContextAPIProvider from './ContextAP1/ContextAPI'
import ContextAPIProvider  from './ContextAP1/ContextAPI'
// import BodyGrid from './Body/BodyGrid'

function Project1App() {
    return (
        < >
           <ContextAPIProvider>
            <BrowserRouter>
            <div style={{zIndex:'150', position:'sticky', top:'0'}}><Navbar/></div>
            <Routes>
                <Route  path='/' element={<Home/>} />
                <Route  path='/Products' element={<Products/>} />
                <Route  path='/Projects' element={<Projects/>} />
                <Route  path='/Solutions' element={<Solutions/>} />
                <Route  path='/Careers' element={<Careers/>} />
                <Route  path='/About' element={<About/>} />
                <Route  path='/Contact' element={<Contact/>} />
            </Routes>
            </BrowserRouter>
            </ContextAPIProvider>
        
        </>
    )
}

export default Project1App