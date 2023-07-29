import React from 'react'
import { HashScroll } from "react-hash-scroll";
import { motion } from "framer-motion";
import laptopIcon from "../images/laptop.png"

const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const liStyle = {
    float: "left",
    margin: "0 20px"
}

function Experience() {
    return (
        <HashScroll hash="#experience">
            <div className='grid place-content-center'>
                <div id='full-stack-web-developer' className='w-max flex flex-row'>
                    <div className='w-2/3 m-1'>
                        <p className='font-bold text-xl text-info'>Full Stack Web Developer (Oct 2022 - current)</p>
                        <p className='italic font-thin'>Tradelink Electronic Commerce Limited • Hong Kong SAR</p>
                        <div>
                            <ul class="list-disc">
                                <li style={liStyle}>Spring Boot (JAVA)</li>
                                <li style={liStyle}>React (JavaScript / TypeScript)</li>
                                <li style={liStyle}>MySQL / OracleDB</li>
                                <li style={liStyle}>ArgoCICD / Kubernetes</li>
                            </ul>
                        </div>
                        <p>
                            <br />
                            <br />
                            In this company, I was handling the project involves revamping the front-end and back-end of the Certificate of Hong Kong Origin system,
                            <br />
                            conducting the entire software life cycle, providing ongoing maintenance and support,
                            <br />
                            and ensuring user-friendliness for over 100,000 users from both government and private sectors.
                        </p>
                    </div>
                    <div className='w-1/3 relative'>
                        <img className='h-full object-cover absolute right-0' src={laptopIcon} alt='laptop-icon'></img>
                    </div>
                </div>
            </div>
        </HashScroll>
    )
}

export default Experience

{/* <div id='web-development-course-mentor' className='justify-self-center'>
web-development-course-mentor
</div>
<div id='front-end-game-developer' className='justify-self-center'>
front-end-game-developer
</div> */}