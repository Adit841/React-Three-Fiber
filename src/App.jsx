import { Canvas } from "@react-three/fiber";
import React from "react";

const App = () => {
  return (
    <div className="App">
      <Canvas>
        <mesh>
          <boxGeometry />
          <meshBasicMaterial color="red" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default App;
