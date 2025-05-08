// import React, { Suspense, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

// function Model() {
//   const { scene } = useGLTF("/models/moon.glb");
//   const modelRef = useRef();

//   useFrame(() => {
//     if (modelRef.current) {
//       modelRef.current.rotation.y += 0.010;
//     }
//   });

//   return <primitive ref={modelRef} object={scene} scale={2} />;
// }

// const MoonViewer = () => {
//   return (
//     <div className="h-[30vh] w-full md:h-[50vh] md:w-[50%] flex items-center">
//       <Canvas camera={{ position: [0, 0, 5], fov: 65 }}>
//         <ambientLight intensity={0.8} />
//         <directionalLight position={[5, 5, 5]} />
//         <Suspense fallback={null}>
//           <Model />
//           <OrbitControls enableZoom={false} />
//           <Environment preset="night" />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// };

// export default MoonViewer;
