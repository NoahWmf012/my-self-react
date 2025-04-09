import React from 'react'
import { Link } from 'react-router-dom';
import { Form, Radio } from 'react-daisyui';

const navbarItems = (
    <React.Fragment>
        <li><Link to={"#about"}>About Me</Link></li>
        <li><Link to={"#skills"}>Skills</Link></li>
        <li><Link to={"#experience"}>Experience</Link></li>
        <li><Link to={"#project"}>Projects</Link></li>
    </React.Fragment>)

function DotNav() {

    return (
        <div className='flex flex-col gap-3 fixed top-[50%] right-7'>
            <Form>
                <Radio className="radio radio-xs checked:bg-blue-500 m-1" name="radio1" defaultChecked />
                <Radio className="radio radio-xs checked:bg-blue-500 m-1" name="radio1" />
            </Form>
        </div>
    )
}

export default DotNav