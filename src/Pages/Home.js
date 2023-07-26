import React from 'react'
import About from '../components/AboutMe'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Project from '../components/Project'

function Home() {
    return (
        <div>
            <About></About>
            <Experience></Experience>
            <Skills></Skills>
            <Project></Project>
        </div>
    )
}

export default Home