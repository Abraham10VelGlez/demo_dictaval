import { useTexture } from '@react-three/drei';
import { EffectComposer } from '@react-three/postprocessing';
import { Fluid } from '../../lib/Fluid';
import { ThreeTunnel } from './tunel';
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'

import img from '@/assets/24770152_101.png';
import Text from './Text';

const Image = () => {
    const texture = useTexture(img);
   
    /*
      <mesh position-z={-4}>
                <planeGeometry args={[7, 10, 20, 20]} attach='geometry' />
                <meshBasicMaterial map={texture} color='#fff' />
            </mesh>
             */

    function Box(props) {
        // This reference will give us direct access to the mesh
        const meshRef = useRef()
        // Set up state for the hovered and active state
        const [hovered, setHover] = useState(false)
        const [active, setActive] = useState(false)
        // Subscribe this component to the render-loop, rotate the mesh every frame
        useFrame((state, delta) => (meshRef.current.rotation.x += delta))
        // Return view, these are regular three.js elements expressed in JSX
        return (
            <mesh
                {...props}
                ref={meshRef}
                scale={active ? 1.5 : 1}
                onClick={(event) => setActive(!active)}
                onPointerOver={(event) => setHover(true)}
                onPointerOut={(event) => setHover(false)}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
            </mesh>
        )
    }

    return (
        <>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </>

    );
};

const Example1 = () => {
    return (
        <ThreeTunnel.In>
            <Text />
            <Image />
            <EffectComposer>
                <Fluid />
            </EffectComposer>
        </ThreeTunnel.In>
    );
};

export default Example1;