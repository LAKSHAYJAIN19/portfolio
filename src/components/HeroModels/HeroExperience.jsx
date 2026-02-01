import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import {Room} from "./Room.jsx";
import HeroLights from "./HeroLights.jsx";

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 924px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    return (
        <Canvas camera={{position: [0, 0, 5.5], fow: 45}}>
            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />
            <HeroLights/>
            <group scale={isMobile?0.7:1}
            position={[0,-3.5,0]}
            rotation={[0,-Math.PI /4, 0]}>
                <Room/>
            </group>
            {/*<div className="sketchfab-embed-wrapper">*/}
            {/*    <iframe title="Study room 360 panorama view" frameBorder="0"*/}
            {/*            allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true"*/}
            {/*            allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking*/}
            {/*            execution-while-out-of-viewport execution-while-not-rendered web-share*/}
            {/*            src="https://sketchfab.com/models/70de24e378d64e6a8a53ad541b07157a/embed"></iframe>*/}
            {/*</div>*/}
        </Canvas>
    )
}
export default HeroExperience
