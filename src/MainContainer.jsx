
import { useHelper } from "@react-three/drei"
import AnimatedStars from "./AnimatedStars"

import { useRef } from "react"
import * as THREE from 'three'
import Earth from "./scenes/earth/Earth"

const MainContainer = () =>
{
    const directionalLightRef = useRef()
    const directionalLightRefTwo = useRef()


    useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink')
    useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, 'hotpink')

    return <>
        <color attach = 'background' args = {['black']} />
       
       

        <AnimatedStars /> 
        <directionalLight castShadow 
        ref = {directionalLightRef} position={[0, 0, 10]} intensity={1} />
       
        <directionalLight 
        castShadow ref = {directionalLightRefTwo} position = { [0, 0, -10] } 
        />
        {/*color={0xff0000}  */}
        {/* A directional light is a light emitted from a specific location, similar to day light */} 
       
        {/*<ambientLight/> */}
        

        <Earth displacementScale={ 0.15 } />

    </>
   
}
export default MainContainer 