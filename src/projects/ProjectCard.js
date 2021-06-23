import React from "react";
import styles from "./Projects.module.css"
import imgReact from '../static/atom.svg'
import imgJS from '../static/javascript.svg'
import imgVue from '../static/vue.svg'
export default function ProjectCard(props){
    function whatIcon(){
        switch(props.Project){
            case "React":
                return imgReact
            case "JS":
                return imgJS
            case "Vue":
                return imgVue
        }
    }
    return(
        <div className={styles.card}>
            <img width={"128px"} src={whatIcon()} alt="icon" />
            <span className={"text-2xl font-bold"}>{props.ENG}</span>
            <a href={props.href}><div className={styles.href}>Try it!</div></a>
        </div>
    )
}