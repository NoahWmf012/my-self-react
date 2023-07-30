import React from 'react'
import Typewriter from 'typewriter-effect';
import ParallaxText from './ParallaxText';
import SelfPic from '../images/self-pic.jpg'
import { HashScroll } from 'react-hash-scroll';
import { motion } from "framer-motion";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);
const data = {
    labels: ['Passion', 'Creativity', 'Patience', 'Easy-going', 'Optimism', 'Independence'],
    datasets: [
        {
            label: 'Personalities',
            data: [7, 9, 5, 8, 10, 7],
            backgroundColor: 'rgba(58, 191, 248, 0.2)',
            borderColor: 'rgba(58, 191, 248, 1)',
            borderWidth: 1,
        },
    ],
};
const options = {
    scales: {
        r: {
            min: 0,
            max: 10,
            ticks: {
                beginAtZero: true,
                maxTicksLimit: 4
            }
        }
    }
}

const cardVariants = {
    offscreen: {
        x: 0
    },
    onscreen: {
        x: 100,
        // rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

function AboutMe() {
    return (
        <HashScroll hash="#about">
            <div>
                <div id='about-me' className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={SelfPic} className="max-w-sm rounded-lg shadow-2xl" alt='self pic' />
                        <div>
                            <h1 className="text-5xl font-bold text-accent"><Typewriter
                                options={{
                                    strings: ["I'm Chris", 'A full-stack web developer', 'in ReactJS, NodeJS & Spring Boot'],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 12,
                                    delay: 50
                                }}
                            /></h1>
                            <p className="py-6">
                                As a 2 year-experienced web developer with solid skills
                                in Front-end and Back-end developement.
                                I am confident in my ability to create dynamic and high-quality web applications.
                                With hands-on experience in deployment tools such as Kubernetes and Argo,
                                I am capable of delivering scalable and reliable
                                solutions that meet the needs of clients and end-users.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <section>
                    <ParallaxText baseVelocity={10}>More About Me  ↓  ↓  ↓ </ParallaxText>
                </section> */}
                {/* <div id='personality' className='w-1/2'>
                <Radar data={data} options={options} />
            </div> */}
            </div>
        </HashScroll>
    )
}

export default AboutMe