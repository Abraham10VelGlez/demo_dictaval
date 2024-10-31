import { useTexture } from '@react-three/drei';
import { EffectComposer } from '@react-three/postprocessing';
import { Fluid } from '../../lib/Fluid';
import { ThreeTunnel } from './tunel';
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import { Suspense } from 'react';
//import img from '@/assets/24770152_101.png';
import Text from './Text';
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';

const Image = () => {


    const Carbmw = () => {

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

    return (
        <>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <Suspense fallback={null}>
                <Carbmw />
            </Suspense>

        </>

    );
};

const Example1 = () => {
    return (
        <ThreeTunnel.In>
            <Text />
            <Suspense fallback={null}>
                <Image />
            </Suspense>
            <EffectComposer>
                <Fluid />
            </EffectComposer>
        </ThreeTunnel.In>
    );
};

export default Example1;
