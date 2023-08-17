import React, { useState, useEffect } from 'react'
import { HashScroll } from "react-hash-scroll";
import { motion } from "framer-motion";
import laptopIcon from "../images/laptop.png"
import mentorIcon from "../images/bootcamp-mentor.png"
import gameIcon from "../images/unity.jpg"

const variants = {
    offscreen: {
        y: 250,
        opacity: 0
    },
    onscreen: {
        y: 0,
        transition: {
            duration: 0.8
        },
        opacity: 1
    }
};

const liStyle = {
    float: "left",
    margin: "0 10px"
}
const liRStyle = {
    float: "right",
    margin: "0 10px"
}

function Experience() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const setImageSize = () => {
        if (windowWidth < 720) {
            return 'hidden';
        } else {
            return "w-1/3 relative"
        }
    };

    const setContentSize = (isRight) => {
        if (windowWidth > 720) {
            if (isRight) {
                return "w-2/3 mr-10 text-end text-right"
            }
            return "w-2/3 ml-10"
        } else {
            if (isRight) {
                return "w-full mx-10 text-right"
            }
            return "w-full mx-10"
        }
    }

    return (
        <HashScroll hash="#experience">
            <div className='grid place-content-center'>
                <motion.div
                    id='full-stack-web-developer'
                    className='w-full flex flex-row my-20'
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{
                        once: true
                    }}
                    variants={variants}
                >
                    <div className={`${setContentSize()}`}>
                        <p className='font-bold text-xl text-info'>Full Stack Web Developer (Oct 2022 - Present)</p>
                        <p className='italic font-thin'>Tradelink Electronic Commerce Limited • Hong Kong SAR</p>
                        <div>
                            <ul className="list-disc text-accent-content">
                                <li style={liStyle}>Spring Boot (JAVA)</li>
                                <li style={liStyle}>React (JavaScript / TypeScript)</li>
                                <li style={liStyle}>MySQL / OracleDB</li>
                                <li style={liStyle}>ArgoCICD / Kubernetes</li>

                            </ul>
                        </div>
                        <p>
                            <br />
                            <br />
                            I contributed to several projects related to Hong Kong's exports and imports,
                            including the revamping of the <span className='italic'>Hong Kong Origin Certificate system</span> .
                            I developed front-end features using <span className='italic'>React and a back-end CRUD application with Java Spring Boot</span>,
                            and was involved in every stage of the software life cycle.
                            Additionally, I provided ongoing maintenance and support and ensured the system was user-friendly
                            for over 100,000 users from both government and private sectors.
                            Through my contributions, I played an important role in the success of these critical projects.
                        </p>
                    </div>
                    <div className={`${setImageSize()}`}>
                        <img className={`h-full right-0`} src={laptopIcon} alt='laptop-icon'></img>
                    </div>
                </motion.div>

                <motion.div
                    id='web-development-course-mentor'
                    className='w-full flex flex-row my-20'
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{
                        once: true
                    }}
                    variants={variants}
                >

                    <div className={`${setImageSize()}`}>
                        <img className='h-full left-0' src={mentorIcon} alt='mentor-icon'></img>
                    </div>
                    <div className={`${setContentSize(true)}`}>
                        <p className='font-bold text-xl text-info text-right'>Full-stack Web Development Mentor (May 2023 - Present)</p>
                        <p className='italic font-thin text-right'>Xccelerate Org • Hong Kong SAR</p>
                        <div>
                            <ul className="list-disc text-accent-content">
                                <li style={liRStyle}>AWS deployment</li>
                                <li style={liRStyle}>PostgreSQL</li>
                                <li style={liRStyle}>ReactJS</li>
                                <li style={liRStyle}>NodeJS</li>
                                <li style={liRStyle}>HTML / CSS / JavaScript</li>
                            </ul>
                        </div>
                        <p className='text-right'>
                            <br />
                            <br />
                            As an instructor, I mentored 10 students per class while updating teaching materials.
                            I taught <span className='italic'>HTML/CSS/JavaScript, Bootstrap/jQuery/Ajax, NodeJS, SQL/PostgresSQL/KnexJS/Redis,
                                React/Route/Redux/JWT, and AWS deployment</span>. My goal was to provide comprehensive instruction
                            and help students develop the skills they need to succeed.
                            I created a supportive learning environment that allowed students to
                            thrive and drew on my extensive experience as a web developer and passion for teaching.
                            I am proud of the impact I had on my students and look forward to continuing to
                            work in this field in the future.</p>
                    </div>
                </motion.div>

                <motion.div
                    id='front-end-game-developer'
                    className='w-full flex flex-row my-20'
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{
                        once: true
                    }}
                    variants={variants}
                >
                    <div className={`${setContentSize()}`}>
                        <p className='font-bold text-xl text-info'>Front-end Game Developer (Jun 2021 - Jun 2022)</p>
                        <p className='italic font-thin'>Szeka Limited • Hong Kong SAR</p>
                        <div>
                            <ul className="list-disc text-accent-content">
                                <li style={liStyle}>Unity3D (C#)</li>
                                <li style={liStyle}>Cocos-2D (Lua)</li>
                                <li style={liStyle}>Git</li>
                                <li style={liStyle}>UI / UX design</li>
                                <li style={liStyle}>Android Studio</li>
                            </ul>
                        </div>
                        <p>
                            <br />
                            <br />
                            The individual has experience in game development for mobile platforms,
                            including iOS and Android, using various tools such as <span className='italic'>Unity3D, Cocos2D-Lua, C#, and Android Studio</span>.
                            They possess skills in programming animation software to predefined specifications for interactive video games,
                            internet, and mobile applications. Additionally, they have experience in developing,
                            implementing, modifying, and maintaining gameplay features that are integrated effectively into the software system.
                        </p>
                    </div>
                    <div className={`${setImageSize()}`}>
                        <img className='h-full right-0' src={gameIcon} alt='game-icon'></img>
                    </div>
                </motion.div>
            </div>
        </HashScroll >
    )
}

export default Experience

