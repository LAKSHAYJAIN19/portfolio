import { useEffect, Suspense, useState } from "react";
import TitleHeader from "../components/TitleHeader.jsx";
import { techStackIcons } from "../constants/index.js";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const TechStack = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size
    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    // Preload models
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

                {isMobile ? <MobileLayout /> : <DesktopLayout />}
            </div>
        </div>
    );
};

/* ---------------- DESKTOP ---------------- */

function DesktopLayout() {
    return (
        <>
            <div className="w-full h-[420px] mt-10">
                <Canvas
                    camera={{ position: [0, 0, 10], fov: 45 }}
                    dpr={[1, 1.5]}
                    gl={{ antialias: false, powerPreference: "high-performance" }}
                >
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <Environment preset="city" />
                    <Suspense fallback={null}>
                        <CenteredModels />
                    </Suspense>
                </Canvas>
            </div>

            <div className="grid grid-cols-5 text-center mt-8">
                {techStackIcons.map((icon) => (
                    <p key={icon.name} className="text-xl">
                        {icon.name}
                    </p>
                ))}
            </div>
        </>
    );
}

function CenteredModels() {
    const spacing = 3;
    const startX = -(spacing * (techStackIcons.length - 1)) / 2;

    return techStackIcons.map((icon, i) => (
        <TechModel
            key={icon.name}
            model={icon}
            position={[startX + i * spacing, 0, 0]}
        />
    ));
}

/* ---------------- MOBILE ---------------- */

function MobileLayout() {
    return (
        <div className="space-y-16 mt-10">
            {techStackIcons.map((icon) => (
                <div key={icon.name} className="text-center">
                    <div className="h-[200px]">
                        <Canvas
                            camera={{ position: [0, 0, 6] }}
                            dpr={[1, 1.5]}
                            gl={{ antialias: false }}
                        >
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[5, 5, 5]} intensity={1} />
                            <Environment preset="city" />
                            <Suspense fallback={null}>
                                <TechModel
                                    model={icon}
                                    position={[0, 0, 0]}
                                    mobile
                                />
                            </Suspense>
                        </Canvas>
                    </div>
                    <p className="text-lg mt-4">{icon.name}</p>
                </div>
            ))}
        </div>
    );
}

/* ---------------- MODEL ---------------- */

function TechModel({ model, position, mobile }) {
    const { scene } = useGLTF(model.modelPath);

    return (
        <Float speed={3} rotationIntensity={0.6} floatIntensity={0.8}>
            <group
                position={position}
                scale={mobile ? model.scale * 0.9 : model.scale}
                rotation={model.rotation}
            >
                <primitive object={scene.clone()} />
            </group>
        </Float>
    );
}

export default TechStack;
