import React from 'react'
import { HashScroll } from "react-hash-scroll";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

function Experience() {
    return (
        <HashScroll hash="#experience">
            <div>
                <div id='full-stack-web-developer'>

                </div>
                <div id='web-development-course-mentor'>

                </div>
            </div>
        </HashScroll>
    )
}

export default Experience