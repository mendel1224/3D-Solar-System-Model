import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import Moon from "./Moon"
import ISS from "./ISS"

const Earth  = ({ displacementScale }) => {

    const earthRef = useRef()

    const [earthTexture, earthNormalMap, earthSpecularMap, earthDisplacementMap] = useTexture(
        ['/assets/earth_day.jpeg', 
        '/assets/earth_normal.jpg', 
        '/assets/earth_specular.jpg', 
        '/assets/earth_displacement.jpeg'])

        useFrame( () => {
            earthRef.current.rotation.y += 0.002
        })
    
    return (
    <group>
    <mesh receiveShadow ref = {earthRef}>
        <sphereGeometry args = {[1, 64, 64]} /> {/* args correspondance: [radius, x-axis,y-axis] */ }
        <meshPhongMaterial 
        map = {earthTexture} 
        normalMap={earthNormalMap} 
        specularMap = {earthSpecularMap} 
        shininess={1000}
        displacementMap={earthDisplacementMap}
        displacementScale={ displacementScale }/>
    </mesh>
    <ISS/>
    <Moon/>
    </group>
    )
}
export default Earth