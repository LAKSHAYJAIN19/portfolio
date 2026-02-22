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

const TechStack = () => {

    // 🔥 Preload all models immediately
    useEffect(() => {
        techStackIcons.forEach((icon) => {
            useGLTF.preload(icon.modelPath);
        });
    }, []);

    // GSAP animation
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

                {/* 🔥 Single Shared Canvas */}
                <div className="tech-grid">
                    <Canvas
                        frameloop="demand"
                        dpr={[1, 1.5]}
                        camera={{ position: [0, 0, 8] }}
                    >
                        <ambientLight intensity={0.4} />
                        <directionalLight position={[5, 5, 5]} intensity={1} />
                        <Environment preset="city" />

                        <Suspense fallback={null}>
                            {techStackIcons.map((icon, index) => (
                                <TechModel
                                    key={icon.name}
                                    model={icon}
                                    position={[
                                        (index - 2) * 3, // spread horizontally
                                        0,
                                        0
                                    ]}
                                />
                            ))}
                        </Suspense>
                    </Canvas>

                    {/* Labels below */}
                    <div className="flex justify-center gap-10 mt-6 flex-wrap">
                        {techStackIcons.map((icon) => (
                            <p key={icon.name}>{icon.name}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const TechModel = ({ model, position }) => {
    const { scene } = useGLTF(model.modelPath);

    return (
        <Float speed={3} rotationIntensity={0.6} floatIntensity={0.8}>
            <group
                position={position}
                scale={model.scale}
                rotation={model.rotation}
            >
                <primitive object={scene.clone()} />
            </group>
        </Float>
    );
};

export default TechStack;
