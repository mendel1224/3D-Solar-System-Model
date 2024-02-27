import { useTexture } from "@react-three/drei"


const Earth  = () => {
    const [earthTexture, earthNormalMap, earthSpecularMap, earthDisplacementMap] = useTexture(
        ['/assets/earth_day.jpeg', 
        '/assets/earth_normal.jpg', 
        '/assets/earth_specular.jpg', 
        '/assets/earth_displacement.jpeg'])
    return <mesh>
        <sphereGeometry args = {[1, 32, 32]} /> {/* args correspondance: [radius, x-axis,y-axis] */ }
        <meshPhongMaterial 
        map = {earthTexture} 
        normalMap={earthNormalMap} 
        specularMap = {earthSpecularMap} 
        displacementMap={earthDisplacementMap}
        displacementScale={0.1}/>
    </mesh>
}
export default Earth