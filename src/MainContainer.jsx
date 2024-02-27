
import { useHelper } from "@react-three/drei"
import AnimatedStars from "./AnimatedStars"
import Earth from "./Earth"
import { useRef } from "react"
import * as THREE from 'three'

const MainContainer = () =>
{
    const directionalLightRef = useRef()
    const directionalLightRefTwo = useRef()


    useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink')
    useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, 'hotpink')

    return <>
        <color attach = 'background' args = {['black']} />
       
       

        <AnimatedStars /> 
       {/* <directionalLight ref = {directionalLightRef} position={[0, 0, 10]} intensity={1} />
        {/*color={0xff0000}  */}
        {/* A directional light is a light emitted from a specific location, similar to day light */} 
        <ambientLight/>
        

        <Earth />

    </>
   
}
export default MainContainer 