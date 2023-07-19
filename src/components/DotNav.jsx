import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const navbarItems = (
    <React.Fragment>
        <li><Link to={"#about"}>About Me</Link></li>
        <li><Link to={"#skills"}>Skills</Link></li>
        <li><Link to={"#experience"}>Experience</Link></li>
        <li><Link to={"#project"}>Projects</Link></li>
    </React.Fragment>)

function DotNav() {
    const [selectedPage, setSelectedPage] = useState("home")

    return (
        <div className='flex flex-col gap-3 fixed top-[50%] right-7'>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <input type="radio" name="radio-10" className="radio radio-xs checked:bg-blue-500" checked />
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <input type="radio" name="radio-10" className="radio radio-xs checked:bg-blue-500" />
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <input type="radio" name="radio-10" className="radio radio-xs checked:bg-blue-500" />
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <input type="radio" name="radio-10" className="radio radio-xs checked:bg-blue-500" />
                </label>
            </div>
        </div>
    )
}

export default DotNav