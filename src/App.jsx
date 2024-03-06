import React from 'react'
import './App.css'
import Navbar from './composants/Navbar/Navbar'
import Hero from "./composants/Hero/Hero"
import Skills from "./composants/Skills/Skills";
const App = () => {
    return (
        <>
            <Navbar />
            <div className="container" id={"Accueil"}>
                <Hero />
                <Skills />
                </div>
        </>

    )
}

export default App;
