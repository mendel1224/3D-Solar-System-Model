import { Canvas } from "@react-three/fiber"
import MainContainer from "./MainContainer"
import { OrbitControls } from "@react-three/drei"
import { Perf } from "r3f-perf"


function App() {
 

  return (
    <Canvas shadows 
    camera = { {fov:75, near: 0.1, far: 1000, position: [10, 8.5, 15.5] } }>
     {/* <Perf/> */ }
      <OrbitControls/>
      <MainContainer/>
    </Canvas>
  )
}

export default App
