import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from "react"

import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Protected from './Protected'

// import LoginLogoutLogic from './LoginLogoutLogic'

const Root = () => {

    const [ isLoggedIn, setIsLoggedIn ] = useState(false)

    return (
        <>
            <Router>
                <Navbar />

                {isLoggedIn ? <button onClick={() => {
                    setIsLoggedIn (!isLoggedIn)
                }}>Logout</button> : <button onClick={() => {
                    setIsLoggedIn (!isLoggedIn)
                }}>Login</button>}

                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={ 
                        <Protected isLoggedIn = {isLoggedIn}>
                            <About />
                        </Protected>
                    }></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default Root