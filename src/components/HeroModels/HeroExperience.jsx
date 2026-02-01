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

//
// import { OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { useMediaQuery } from "react-responsive";
//
// import { Room } from "./Room";
// import HeroLights from "./HeroLights";
// import { Suspense } from "react";
//
// const HeroExperience = () => {
//     const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
//     const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
//
//     return (
//         <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
//             {/* deep blue ambient */}
//             <ambientLight intensity={0.2} color="#1a1a40" />
//             {/* Configure OrbitControls to disable panning and control zoom based on device type */}
//             <OrbitControls
//                 enablePan={false} // Prevents panning of the scene
//                 enableZoom={!isTablet} // Disables zoom on tablets
//                 maxDistance={20} // Maximum distance for zooming out
//                 minDistance={5} // Minimum distance for zooming in
//                 minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
//                 maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
//             />
//
//             <Suspense fallback={null}>
//                 <HeroLights />
//                 <group
//                     scale={isMobile ? 0.7 : 1}
//                     position={[0, -3.5, 0]}
//                     rotation={[0, -Math.PI / 4, 0]}
//                 >
//                     <Room />
//                 </group>
//             </Suspense>
//         </Canvas>
//     );
// };
//
// export default HeroExperience;