import React from 'react'
import { HashScroll } from "react-hash-scroll";
import Lottie from "lottie-react";
import animatedSkill from "../images/animation_lkezquxu.json"
import csIcon from "../images/c-sharp-icon.png"
import mySQLIcon from "../images/mysql-icon.png"
import nodeJSIcon from "../images/node-js-icon.png"
import reactIcon from "../images/react-icon.png"
import springBootIcon from "../images/spring-icon.svg"

function SkillItems(props) {
    return (
        <div className="my-4 grid grid-flow-col">
            <div className='col-span-1 w-[24px] justify-self-start h-[24px] mr-1 flex items-center' >
                <img className='h-[24px]' src={props.icon} alt="csharp icon" />
                <span className='text-primary-content'>{props.title}</span>
            </div>
            <div className="col-span-6  bg-slate-700 relative mt-[8px] h-[10px] w-[90%] rounded-2xl top-50 align-self-center">
                <div
                    className={`${props.color} top-0 left-0 h-full ${props.value} rounded-2xl align-self-center`}
                ></div>
            </div>
        </div>
    )
}

function Skills() {
    return (
        <HashScroll hash="#skills">
            <div className='flex justify-center'>
                <div className='flex-initial'><Lottie className='w-[400px]' animationData={animatedSkill} loop={true} /></div>
                <div className="flex-initial w-full px-4 lg:w-7/12 self-center">
                    <SkillItems title={"C#"} icon={csIcon} color={`bg-primary`} value={`w-[50%]`} />
                    <SkillItems title={"MySQL"} icon={mySQLIcon} color={`bg-warning`} value={`w-[75%]`} />
                    <SkillItems title={"NodeJS"} icon={nodeJSIcon} color={`bg-success `} value={`w-[60%]`} />
                    <SkillItems title={"ReactJS"} icon={reactIcon} color={`bg-warning`} value={`w-[80%]`} />
                    <SkillItems title={"SpringBoot"} icon={springBootIcon} color={`bg-warning`} value={`w-[70%]`} />
                </div>
            </div>
        </HashScroll>

    )
}

export default Skills