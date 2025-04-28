import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/models/moon.glb");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.003;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={1.5} />;
}

const MoonViewer = () => {
  return (
    <div className="h-[40vh] w-full md:h-[70vh] md:w-[60%] flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5], fov: 65 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Model />
          <OrbitControls enableZoom={false} />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MoonViewer;
