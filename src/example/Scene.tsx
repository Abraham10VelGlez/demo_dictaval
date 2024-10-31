/*import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';

export default function Scene(props: JSX.IntrinsicElements['group']) {

  const { scene } = useGLTF('/scene.gltf');
  const modelRef = useRef();

  // Rota el modelo en cada frame
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Ajusta la velocidad de rotación
    }
  });

  //rotation={[0, Math.PI / 4, 0]} 
  return (
    
      <primitive ref={modelRef} position={[0, -1, -6]} object={scene} scale={2} />      
    

  );

}

useGLTF.preload('/scene.gltf');*/