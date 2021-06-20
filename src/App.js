import './App.css';
import React from "react";
import Header from "./header/Header"
import {Canvas} from "@react-three/fiber";
function App() {
  return (
  <React.Fragment>
      <Header />
      <Canvas>
          <mesh>
              <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
              <meshStandardMaterial attach='material'/>
          </mesh>
      </Canvas>
  </React.Fragment>
  );
}

export default App;
