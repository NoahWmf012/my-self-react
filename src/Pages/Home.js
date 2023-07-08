import React from 'react'
import About from '../components/AboutMe'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Project from '../components/Project'

function Home() {
    return (
        <div>
            <About></About>
            <Skills></Skills>
            <Experience></Experience>
            <Project></Project>
        </div>
    )
}

export default Home