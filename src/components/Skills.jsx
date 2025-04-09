import React, { useState, useEffect } from 'react'
import { HashScroll } from "react-hash-scroll";
import Lottie from "lottie-react";
import animatedSkill from "../images/animation_lkezquxu.json"
import csIcon from "../images/c-sharp-icon.png"
import mySQLIcon from "../images/mysql-icon.png"
import nodeJSIcon from "../images/node-js-icon.png"
import reactIcon from "../images/react-icon.png"
import springBootIcon from "../images/spring-icon.svg"
import pythonIcon from "../images/python-icon.png"
import typescriptIcon from "../images/typescript-icon.svg"
import { motion } from 'framer-motion';

const ContainerVariants = {
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

function SkillItems(props) {

    return (
        <div className="my-4 grid grid-flow-col">
            <div className='col-span-1 w-[24px] justify-self-start h-[24px] mr-1 flex items-center' >
                <img className='w-[24px] mr-1' src={props.icon} alt="csharp icon" />
                <span className={`text-primary-content ${props.spanClass}`}>{props.title}</span>
            </div>
            <motion.div
                className='col-span-6  bg-slate-700 relative mt-[8px] h-[10px] w-[90%] rounded-2xl top-50 align-self-center'
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100%" }}
                transition={{ duration: 1.7 }}
            >
                <div
                    className={`${props.color} top-0 left-0 h-full ${props.value} rounded-2xl align-self-center`}
                ></div>
            </motion.div>
        </div>
    )
}

function Skills() {
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

    const setTextSize = () => {
        if (windowWidth < 900) {
            return 'hidden';
        }
    };

    const setImageSize = () => {
        if (windowWidth > 720) {
            return 'w-[400px]';
        } else if (windowWidth > 480) {
            return 'w-[300px]'
        } else {
            return 'w-[180px]'
        }
    }

    return (
        <HashScroll hash="#skills">
            <motion.div
                id='full-stack-web-developer'
                className='flex justify-center'
                initial="offscreen"
                whileInView="onscreen"
                viewport={{
                    once: true
                }}
                variants={ContainerVariants}
            >
                <div className='flex-initial'><Lottie className={`${setImageSize()}`} animationData={animatedSkill} loop={true} /></div>
                <div className="flex-initial w-full px-4 lg:w-7/12 self-center">
                    <SkillItems spanClass={setTextSize()} title={"TypeScript"} icon={typescriptIcon} color={`bg-green-500`} value={`w-[80%]`} />
                    <SkillItems spanClass={setTextSize()} title={"ReactJS"} icon={reactIcon} color={`bg-green-500`} value={`w-[80%]`} />
                    <SkillItems spanClass={setTextSize()} title={"MySQL"} icon={mySQLIcon} color={`bg-success`} value={`w-[70%]`} />
                    <SkillItems spanClass={setTextSize()} title={"JAVA"} icon={springBootIcon} color={`bg-success`} value={`w-[65%]`} />
                    <SkillItems spanClass={setTextSize()} title={"NodeJS"} icon={nodeJSIcon} color={`bg-success`} value={`w-[65%]`} />
                    <SkillItems spanClass={setTextSize()} title={"C#"} icon={csIcon} color={`bg-green-300`} value={`w-[50%]`} />
                    <SkillItems spanClass={setTextSize()} title={"Python"} icon={pythonIcon} color={`bg-green-200`} value={`w-[35%]`} />
                </div>
            </motion.div>
        </HashScroll>

    )
}

export default Skills