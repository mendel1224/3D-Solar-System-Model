import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

const Sun  = () => {

    const sunRef = useRef()

    const [sunTexture] = useTexture(
        [ '/assets/sun_map.jpeg' ] )
      
       
        useFrame( () => {
      
        
        sunRef.current.rotation.y -= 0.002
        })
    return (
    <mesh 
     ref = {sunRef} position = { [0, 0, 0 ]} >
        <sphereGeometry args = {[1.5, 32, 32]} /> {/* args correspondance: [radius, x-axis,y-axis] */ }
        <meshPhongMaterial 
        map = {sunTexture} emissiveMap={sunTexture} emissiveIntensity={0.6} emissive={0xffffff}/>
        <pointLight castShadow intensity={700} distance = {100} decay={2} />
    </mesh>
    )
}
export default Sun