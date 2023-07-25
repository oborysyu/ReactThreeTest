import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";

import { RingTwo } from "./models/RingTwo";
import { RingThree } from "./models/RingThree";


function App() {

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [-15, 5, 15], zoom: 2 }}>
        <OrbitControls />
        <color attach="background" args={["green"]} />
        <hemisphereLight intensity={0.35} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.5}
          penumbra={1}
          intensity={2}
          castShadow
        />
        <Suspense fallback={null}>
          <>
            <RingThree position={[-5, 0.5, 0.5]} />
            <RingTwo position={[5, 0.5, 0.5]} />
          </>
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}

export default App;
