import React from 'react'
import Typewriter from 'typewriter-effect';
import SelfPic from '../images/self-pic.jpg'
import { HashScroll } from 'react-hash-scroll';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

// Radar Chart
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
                            <h1 className="text-5xl font-bold text-accent h-24">
                                <Typewriter
                                    options={{
                                        strings: ["I'm Noah", 'A full-stack web developer', 'in ReactJS, NodeJS & Java'],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 12,
                                        delay: 50
                                    }}
                                />
                            </h1>
                            <p className="py-6 text-slate-200">
                                As a 3 year-experienced web developer with solid skills
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