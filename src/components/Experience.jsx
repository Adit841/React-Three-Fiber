import React, { useState } from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Experience() {

    const cubeRef = useRef(null);
    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta;
    });
    // const [color,setColor] = useState("red");
  return (
    <>


      {/* <mesh onClick={() => setColor(color === "red" ? "blue" : "red")}> */}
    <mesh ref={cubeRef}>
        <boxGeometry />
        <meshBasicMaterial color={'red'} />
      </mesh>
    </>
  );
}

export default Experience;
