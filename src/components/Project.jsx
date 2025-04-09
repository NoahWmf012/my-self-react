import React from 'react'
import { HashScroll } from "react-hash-scroll";
import csIcon from "../images/c-sharp-icon.png"
import unityIcon from "../images/unity-icon.png"
import googleMapIcon from "../images/google-map-icon.png"
import vuejsIcon from "../images/vuejs-icon.webp"
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const liStyle = {
    float: "left",
    margin: "0 10px",
    listStyleType: "none"
}

function ProjectItem(props) {
    return (
        <motion.div
            className="card w-96 bg-slate-700 shadow-xl m-2 sm:w-100"
            variants={item}
        >
            <a href={props.url} target="_blank" rel="noreferrer">
                <div className="card-body">
                    <h2 className="card-title text-neutral-50">{props.title}</h2>
                    <p className='text-gray-400'>{props.content}</p>
                    <ul className="list-disc text-accent-content">
                        {props.icon ? props.icon.map((e, key) => {
                            return (
                                <li style={liStyle} key={key}>
                                    <img className='flex h-[24px] mr-1' src={e} alt="icon" />
                                </li>
                            )
                        }) : null}

                    </ul>
                </div>
            </a>
        </motion.div>
    )
}

function Project() {
    return (
        <HashScroll hash="#project">
            <motion.ul
                className="w-full flex flex-wrap justify-center mt-20 mb-10"
                variants={container}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 2.5 }}
            >
                <ProjectItem title={"Demon Slayer Crossing"} content={"A 2d simple game on Google Play."} url={"https://www.youtube.com/watch?v=-NhENndYqpY&ab_channel=DeveloperGame"} icon={[csIcon, unityIcon]} />
                {/* {/* <ProjectItem title={"Todo Application"} content={"To-do React Application with PostgresDB"} url={"https://github.com/NoahWmf012/ReactJS-todo-application-with-DB"} icon={[reactIcon, nodeJSIcon, postgreIcon]} /> */}
                <ProjectItem title={"Google Map Application"} content={"Practice for VueJS"} url={"https://github.com/NoahWmf012/google-map-code-test"} icon={[googleMapIcon, vuejsIcon]} />
            </motion.ul>
        </HashScroll>

    )
}

export default Project