import React, { useState, useEffect } from 'react'
import { HashScroll } from "react-hash-scroll";
import { motion } from "framer-motion";
import laptopIcon from "../images/laptop.png"
import mentorIcon from "../images/bootcamp-mentor.png"
import gameIcon from "../images/unity.jpg"
import rifoIcon from "../images/rifo-icon.jpg"

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
// const liRStyle = {
//     float: "right",
//     margin: "0 10px"
// }

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
                    id='administrative-assistant'
                    className='w-full flex flex-row my-20'
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{
                        once: true
                    }}
                    variants={variants}
                >
                    <div className={`${setContentSize()}`}>
                        <p className='font-bold text-xl text-info'>Administrative Assistant(Jun 2024 – Present)</p>
                        <p className='italic font-thin text-slate-300'>Rifo Realty Group | <a className='text-info' href="https://www.rifo.com/" target="_blank">Website</a></p>
                        <div>
                            <ul className="list-disc text-gray-100">
                                <li style={liStyle}>Realty Industry</li>
                            </ul>
                        </div>
                        <p className='text-gray-400'>
                            <br />
                            <br />
                            • Providing 50+ IT support including software & hardware setup and troubleshooting.
                            <br />
                            • Processing and digitizing over 1,000 historical receipts for financial documentation and internal audits, using Excel
                            for data tracking.
                            <br />
                            • Handling 20+ daily inbound calls and 10+ email inquiries related to commission and deposit processes.
                        </p>
                    </div>
                    <div className={`${setImageSize()}`}>
                        <img className='h-full right-0' src={rifoIcon} alt='mentor-icon'></img>
                    </div>
                </motion.div>

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

                    <div className={`${setImageSize()}`}>
                        <img className={`h-full left-0`} src={laptopIcon} alt='laptop-icon'></img>
                    </div>
                    <div className={`${setContentSize()}`}>
                        <p className='font-bold text-xl text-info'>Software Engineer(Oct 2022 - Jun 2024)</p>
                        <p className='italic font-thin text-slate-300'>Tradelink Electronic Commerce Limited | <a className='text-info' href="https://www.tradelink.com.hk/en/index.html" target="_blank">Website</a></p>
                        <div>
                            <ul className="list-disc text-gray-100">
                                <li style={liStyle}>Spring Boot (JAVA)</li>
                                <li style={liStyle}>React (JavaScript / TypeScript)</li>
                                <li style={liStyle}>MySQL / OracleDB</li>
                                <li style={liStyle}>ArgoCICD / Kubernetes</li>

                            </ul>
                        </div>
                        <p className='text-gray-400'>
                            <br />
                            <br />
                            • Led full software development lifecycle for web applications and RESTful APIs, improving system reliability andenhancing development efficiency by 50% through streamlined debugging and testing workflows.
                            <br />
                            • Managed end-to-end revamp of full-stack CRUD applications used by 10,000+ users, including government andprivate sector clients, resulting in 40% faster load times and improved user experience.
                            <br />
                            • Contributed to UAT, code reviews, and technical documentation, supporting project delivery and consistent codequality.
                            <br />
                            • Collaborated with cross-functional teams including developers, testing team, and PMs to ensure feature alignmentand reduce rework by 15%.
                            <br />
                            • Assisted in gathering and documenting government project requirements, improving clarity and reducingdevelopment bottlenecks.
                            <br />
                            • Utilized modern tech stack: HTML/CSS/JavaScript, React, REST APIs, MySQL, Oracle, Spring Boot, Docker,Kubernetes, Argo CD, and CI/CD pipelines; cut deployment time by 30% through automation
                        </p>
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
                    <div className={`${setContentSize()}`}>
                        <p className='font-bold text-xl text-info'>Administrative Assistant (Mentor) (May 2021 – Sep 2023)</p>
                        <p className='italic font-thin text-slate-300'>Xccelerate Org | <a className='text-info' href="https://www.xccelerate.co/" target="_blank">Website</a></p>
                        <div>
                            <ul className="list-disc text-gray-100">
                                <li style={liStyle}>AWS deployment</li>
                                <li style={liStyle}>PostgreSQL</li>
                                <li style={liStyle}>ReactJS</li>
                                <li style={liStyle}>NodeJS</li>
                                <li style={liStyle}>HTML / CSS / JavaScript</li>
                            </ul>
                        </div>
                        <p className='text-gray-400'>
                            <br />
                            <br />
                            • Mentored a cohort of more than 5 students per class, providing unwavering support and assigning weekly assignments to optimize their learning experience
                            <br />
                            • Instructed on different areas, including DOM, ReactJS, NodeJS, Database/PostgreSQL, Authentication/JWT, AWS deployment etc.
                            <br />
                            • Conducted over 50 group consultations, offering invaluable guidance and advice to students regarding their career planning and program participation.
                            <br />
                            • Oversaw the comprehensive onboarding process for new students, managing promotional materials, student records, and graduation procedures for more than 100+ students.
                        </p>
                    </div>
                    <div className={`${setImageSize()}`}>
                        <img className='h-full right-0' src={mentorIcon} alt='mentor-icon'></img>
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
                    <div className={`${setImageSize()}`}>
                        <img className='h-full left-0' src={gameIcon} alt='game-icon'></img>
                    </div>
                    <div className={`${setContentSize()}`}>
                        <p className='font-bold text-xl text-info'>Game Developer</p>
                        <p className='italic font-thin text-slate-300'>Self Learning</p>
                        <div>
                            <ul className="list-disc text-gray-100">
                                <li style={liStyle}>Unity3D (C#)</li>
                                <li style={liStyle}>Cocos-2D (Lua)</li>
                                <li style={liStyle}>Git</li>
                                <li style={liStyle}>UI / UX design</li>
                                <li style={liStyle}>Android Studio</li>
                            </ul>
                        </div>
                        <p className='text-gray-400'>
                            <br />
                            <br />
                            The individual has experience in game development for mobile platforms,
                            including iOS and Android, using various tools such as <span className='italic'>Unity3D, C#, and Android Studio</span>.
                            They possess skills in programming animation software to predefined specifications for interactive video games,
                            internet, and mobile applications. Additionally, they have experience in developing,
                            implementing, modifying, and maintaining gameplay features that are integrated effectively into the software system.
                        </p>
                    </div>
                </motion.div>
            </div>
        </HashScroll >
    )
}

export default Experience

