import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room.jsx";
import HeroLights from "./HeroLights.jsx";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 924px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      style={{
        pointerEvents: isMobile ? "none" : "auto", // ✅ KEY FIX
      }}
    >
      {!isMobile && (
        <OrbitControls
          enablePan={false}
          enableZoom={!isTablet}
          enableRotate={!isMobile}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />
      )}

      <HeroLights />

      <group
        scale={isMobile ? 0.6 : 1}
        position={isMobile ? [0, -2.5, 0] : [0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
