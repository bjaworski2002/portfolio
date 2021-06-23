import React from "react";
import styles from "./Projects.module.css"
import ProjectCard from "./ProjectCard";
export default function Projects(){

    let projects = [
        {PL: "Piętnastka", ENG: "Taquin", project: "JS", href: "https://game-fifteen.netlify.app/", id: 1},
        {PL: "Dr Mario", ENG: "Dr Mario", project: "JS", href: "https://dr-mario.netlify.app/", id: 2},
        {PL: "Noclegi", ENG: "Hotel App", project: "React", href: "https://noclegi.netlify.app/", id: 3},
    ]
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <span className={"text-4xl p-3 py-12 font-bold"}>Example projects</span>
            </div>
            <div className={styles.elements}>
                {projects.map((e) => <ProjectCard key={e.id} ENG={e.ENG} Project={e.project} href={e.href}/>)}
            </div>
        </div>
    )
}
