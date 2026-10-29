import React, { useState } from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function Experience() {

    const cubeRef = useRef(null);
    // useFrame((state, delta) => {
    //     cubeRef.current.rotation.y += delta;
    // });
    // const [color,setColor] = useState("red");

    // const texture = useLoader(TextureLoader, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb_KhHg-zPrxW38PFRcMbBCw3xNp6AkgPIz92Q5VXSjRFfareppz1h4M8PfBTCzpQuMmLxdK4f1gxHWGapzFu5CSPMu79XZEmBk3Eynw&s=10");
  return (
    <>


      {/* <mesh onClick={() => setColor(color === "red" ? "blue" : "red")}> */}
    <mesh ref={cubeRef}>
        <boxGeometry />
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
}

export default Experience;
