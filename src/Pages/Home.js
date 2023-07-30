import React from 'react'
import About from '../components/AboutMe'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Project from '../components/Project'
import Education from '../components/Education'

function Home() {
    return (
        <div>
            <About />
            <Experience />
            <Skills />
            <Education />
            <Project />
        </div>
    )
}

export default Home