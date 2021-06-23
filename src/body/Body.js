import React, {useRef} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import styles from "./Body.module.css"

const Box = () => {
    const mesh = useRef(null)
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
    return(
        <mesh ref={mesh}>
            <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
            <meshStandardMaterial attach='material'/>
        </mesh>
    )
}
export default function Body(){
    return(
        <div className={styles.Body}>
            <div className={styles.Text}>
                <h1 className={"text-6xl p-3 pt-12 font-bold"}>Bartosz Jaworski</h1>
                <h2 className={"text-xl p-3 pt-0"}>Hi! I'm an 18 years old programming passionate. Feel free to explore my projects! Select one below. You can also see my CV in upper right corner.</h2>
            </div>
            <div className={styles.Canvas}>
                <Canvas>
                    <Box />
                </Canvas>
            </div>
        </div>
    )
}