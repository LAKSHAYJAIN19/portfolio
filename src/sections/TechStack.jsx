// import { useEffect } from "react";
// import TitleHeader from "../components/TitleHeader.jsx";
// import {techStackIcons} from "../constants/index.js";
// import TechIcon from "../components/Models/TechLogos/TechIcon.jsx";
// import {useGSAP} from "@gsap/react";
// import {gsap} from 'gsap'
// import { useGLTF } from "@react-three/drei";

// const TechStack = () => {

//     useEffect(() => {
//         techStackIcons.forEach((icon) => {
//             useGLTF.preload(icon.modelPath);
//         });
//     }, []);
    
//     useGSAP(()=>{
//         gsap.fromTo('.tech-card',{y:50, opacity:0},{
//             y:0,
//             opacity:1,
//             duration:1,
//             ease:'Power2.easeInOut',
//             stagger:0.2,
//             scrollTrigger: {
//                 trigger: '#skills',
//                 start: 'top center'
//             }
//         })
//     })

//     return (
//         <div id="techstack" className="flex-center section-padding">
//             <div className="w-full h-full md:px-10 px-5">
//                 <TitleHeader
//                     title="My Preferred TechStack"
//                     sub="🤹🏻 The Skills I bring to the Table"
//                 />

//                 <div className="tech-grid">
//                     {techStackIcons.map((icon)=>(
//                         <div key={icon.name} className="card-border tech-card
//                         overflow-hidden group xl:rounded-full rounded-lg">
//                             <div className="tech-card-animated-bg"/>
//                             <div className="tech-card-content">
//                               <div className="tech-icon-wrapper">
//                                 <TechIcon model={icon}/>
//                               </div>

//                               <div className="padding-x w-full">
//                                  <p>{icon.name}</p>
//                               </div>

//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default TechStack


import { useEffect, Suspense } from "react";
import TitleHeader from "../components/TitleHeader.jsx";
import { techStackIcons } from "../constants/index.js";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const TechStack = () => {

    // ✅ Preload all models once
    useEffect(() => {
        techStackIcons.forEach((icon) => {
            useGLTF.preload(icon.modelPath);
        });
    }, []);

    useGSAP(() => {
        gsap.fromTo(
            ".tech-card",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top center",
                },
            }
        );
    });

    return (
        <div id="techstack" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="My Preferred TechStack"
                    sub="🤹🏻 The Skills I bring to the Table"
                />

                {/* Responsive container */}
                <div className="w-full h-[400px] md:h-[450px] mt-10">
                    <Canvas
                        camera={{ position: [0, 0, 10], fov: 45 }}
                        dpr={[1, 1.5]}
                        gl={{ antialias: false, powerPreference: "high-performance" }}
                    >
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[5, 5, 5]} intensity={1} />
                        <Environment preset="city" />

                        <Suspense fallback={null}>
                            <ResponsiveModels />
                        </Suspense>
                    </Canvas>
                </div>

                {/* Labels */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center mt-8">
                    {techStackIcons.map((icon) => (
                        <p key={icon.name} className="text-lg md:text-xl">
                            {icon.name}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

function ResponsiveModels() {
    const { viewport } = useThree();
    const isMobile = viewport.width < 8;

    const spacing = isMobile ? 2.2 : 3;
    const startX = -(spacing * (techStackIcons.length - 1)) / 2;

    return techStackIcons.map((icon, i) => (
        <TechModel
            key={icon.name}
            model={icon}
            position={[startX + i * spacing, 0, 0]}
            isMobile={isMobile}
        />
    ));
}

const TechModel = ({ model, position, isMobile }) => {
    const { scene } = useGLTF(model.modelPath);

    return (
        <Float speed={3} rotationIntensity={0.6} floatIntensity={0.8}>
            <group
                position={position}
                scale={isMobile ? model.scale * 0.8 : model.scale}
                rotation={model.rotation}
            >
                <primitive object={scene.clone()} />
            </group>
        </Float>
    );
};

export default TechStack;

