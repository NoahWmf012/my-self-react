import React from 'react'
import Typewriter from 'typewriter-effect';
import ParallaxText from './ParallaxText';
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
        <div>
            <div id='intro' className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='self pic' />
                    <div>
                        <h1 className="text-5xl font-bold"><Typewriter
                            options={{
                                strings: ["I'm Chris WU", 'A full-stack web developer'],
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
            <section>
                <ParallaxText baseVelocity={5}>More</ParallaxText>
            </section>
            <div id='personality' className='w-full'>
                <motion.div
                    className="card-container"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <motion.div className="card w-3/5" variants={cardVariants}>
                        <Radar data={data} options={options} />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutMe