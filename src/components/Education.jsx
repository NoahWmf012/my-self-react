import React from 'react'
import { HashScroll } from 'react-hash-scroll'

function Education() {
    return (
        <HashScroll hash="#education">
            <div>
                <ul className="list-disc text-accent-content">
                    <li>Spring Boot (JAVA)</li>
                    <li>React (JavaScript / TypeScript)</li>
                    <li>MySQL / OracleDB</li>
                    <li>ArgoCICD / Kubernetes</li>

                </ul>
            </div>
        </HashScroll>
    )
}

export default Education