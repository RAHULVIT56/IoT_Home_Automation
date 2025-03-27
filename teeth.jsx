import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Tooth({ position, size }) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

function Jaw({ teethPositions, teethSizes }) {
  return (
    <group>
      {teethPositions.map((position, index) => (
        <Tooth key={index} position={position} size={teethSizes[index]} />
      ))}
    </group>
  );
}

function Jaws() {
  // Define positions and sizes for upper jaw teeth
  const upperTeethPositions = [
    [0, 0, 0], [1, 0, 0], [2, 0, 0], [3, 0, 0], [4, 0, 0],
    [5, 0, 0], [6, 0, 0], [7, 0, 0], [8, 0, 0], [9, 0, 0],
    [10, 0, 0], [11, 0, 0], [12, 0, 0], [13, 0, 0], [14, 0, 0]
  ];
  const upperTeethSizes = [
    [0.5, 0.5, 1], [0.5, 0.5, 1], [0.5, 0.5, 1], [0.5, 0.5, 1], [0.5, 0.5, 1],
    [0.5, 0.5, 1], [0.5, 0.5, 1], [0.5, 0.5, 1], [0.5, 0.5, 1], [0.5, 0.5, 1],
    [0.5, 0.5, 1], [0.5, 0.5, 1], [0.5, 0.5, 1], [0.5, 0.5, 1], [0.5, 0.5, 1]
  ];

  // Define positions and sizes for lower jaw teeth
  const lowerTeethPositions = [
    [0, 0, -1], [1, 0, -1], [2, 0, -1], [3, 0, -1], [4, 0, -1],
    [5, 0, -1], [6, 0, -1], [7, 0, -1], [8, 0, -1], [9, 0, -1],
    [10, 0, -1], [11, 0, -1], [12, 0, -1], [13, 0, -1], [14, 0, -1]
  ];
  const lowerTeethSizes = [
    [0.5, 0.5, 1], [0.5, 0.5, 1], [0.5, 0.5, 1], [0.5, 0.5, 1], [0.5, 0.5, 1],
    [0.5, 0.5, 1], [0.5, 0.5, 1], [0.5, 0.5, 1], [0.5, 0.5, 1], [0.5, 0.5, 1],
    [0.5, 0.5, 1], [0.5, 0.5, 1], [0.5, 0.5, 1], [0.5, 0.5, 1], [0.5, 0.5, 1]
  ];

  return (
    <>
      <Jaw teethPositions={upperTeethPositions} teethSizes={upperTeethSizes} />
      <Jaw teethPositions={lowerTeethPositions} teethSizes={lowerTeethSizes} />
    </>
  );
}

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [10, 10, 10], fov: 25 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Jaws />
        <OrbitControls />
      </Canvas>
    </div>
  );
}