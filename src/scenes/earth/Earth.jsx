import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import Moon from "./Moon"
import ISS from "./ISS"
import * as THREE from 'three'


const Earth  = ({ displacementScale }) => {

    const earthRef = useRef()
    const earthPositionRef = useRef( new THREE.Vector3 (8,0,0) ) // Create a reference to Earth's position vector

    const [earthTexture, earthNormalMap, earthSpecularMap, earthDisplacementMap, earthEmissiveMap] = useTexture(
        ['/assets/earth_day.jpeg', 
        '/assets/earth_normal.jpg', 
        '/assets/earth_specular.jpg', 
        '/assets/earth_displacement.jpeg',
        '/assets/earth_night.jpeg'                          
        ])

        useFrame( ({clock}) => {
            // calculate Earth's postion based on  its angle from Sun
            const angle = clock.getElapsedTime() * 0.5 
            const distance = 8
            const x = Math.sin(angle) * distance
            const z = Math.cos(angle) * distance
            earthRef.current.position.set(x, 0, z)
            earthRef.current.rotation.y += 0.002
            
        })
    
    return (
    <group >
    <mesh castShadow receiveShadow ref = {earthRef}>
        <sphereGeometry args = {[1, 32, 32]} /> {/* args correspondance: [radius, x-axis,y-axis] */ }
        <meshPhongMaterial 
        map = {earthTexture} 
        normalMap={earthNormalMap} 
        specularMap = {earthSpecularMap} 
        shininess={1000}
        displacementMap={earthDisplacementMap}
        displacementScale={ displacementScale }
        emissiveMap={earthEmissiveMap}
        
        emissive={0xffffff}
        emissiveIntensity={1.5}

        />
    </mesh>
    <ISS/>
    <Moon/>
    </group>
    )
}
export default Earth