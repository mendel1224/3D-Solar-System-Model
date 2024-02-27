import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
const Moon  = () => {

    const moonRef = useRef()

    const [moonTexture] = useTexture(
        [ '/assets/moon_map.jpeg' ] )
      

        useFrame( ({clock}) => {
        // Orbit Rotation
        moonRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.2) * 4
        // Axis rotation
        moonRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.2) * 4
        
        moonRef.current.rotation.y += 0.002
        })
    return (
    <mesh ref = {moonRef} position = { [4, 0, 0 ]} >
        <sphereGeometry args = {[0.5, 32, 32]} /> {/* args correspondance: [radius, x-axis,y-axis] */ }
        <meshPhongMaterial 
        map = {moonTexture} />
    </mesh>
    )
}
export default Moon