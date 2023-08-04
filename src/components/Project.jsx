import React from 'react'
import { HashScroll } from "react-hash-scroll";
import csIcon from "../images/c-sharp-icon.png"
import unityIcon from "../images/unity-icon.png"
import reactIcon from "../images/react-icon.png"
import nodeJSIcon from "../images/node-js-icon.png"
import postgreIcon from "../images/postgre-icon.png"
import awsIcon from "../images/aws-icon.png"
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
        <motion.div className="card w-96 bg-slate-700 shadow-xl m-2 sm:w-100" variants={item} >
            <a href={props.url} target="_blank" rel="noreferrer">
                <div className="card-body">
                    <h2 className="card-title text-neutral-50">{props.title}</h2>
                    <p>{props.content}</p>
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
                className="w-full flex flex-wrap justify-center mt-20 mb-10 container"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <ProjectItem title={"Demon Slayer Crossing"} content={"A 2d simple game on Google Play."} url={"https://play.google.com/store/apps/details?id=com.customer.colorjump&pli=1"} icon={[csIcon, unityIcon]} />
                <ProjectItem title={"Todo Application"} content={"To-do React Application with PostgresDB"} url={"https://github.com/ChrisWU012/ReactJS-todo-application-with-DB"} icon={[reactIcon, nodeJSIcon, postgreIcon]} />
                <ProjectItem title={"Office Timer"} content={"Practice for AWS Deployment tools"} url={"https://github.com/ChrisWU012/react-office-timer"} icon={[reactIcon, awsIcon]} />
            </motion.ul>
        </HashScroll>

    )
}

export default Project