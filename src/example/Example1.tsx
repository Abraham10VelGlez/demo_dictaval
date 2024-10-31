import { OrbitControls } from '@react-three/drei';
import { EffectComposer } from '@react-three/postprocessing';
import { Fluid } from '../../lib/Fluid';
import { ThreeTunnel } from './tunel';
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Suspense } from 'react';
//import img from '@/assets/24770152_101.png';
import Text from './Text';
import { useGLTF } from '@react-three/drei';

const Image = () => {


    const Carbmw = () => {

        const modelRef = useRef<THREE.Object3D>(null);

        const { scene } = useGLTF('/scene.gltf');
        

        // Rota el modelo en cada frame
        useFrame(() => {


            if (modelRef.current) {
                modelRef.current.rotation.y += 0.01; // Ajusta la velocidad de rotación
            }
        });
        //rotation={[0, Math.PI / 4, 0]} 
        return (
            <>
                <primitive ref={modelRef} position={[0, -1, -6]} object={scene} scale={2} />
                <OrbitControls />
            </>



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
        <Canvas>
            <ThreeTunnel.In>
                <Text />

                <Image />

                <EffectComposer>
                    <Fluid />
                </EffectComposer>
            </ThreeTunnel.In>
        </Canvas>
    );
};

export default Example1;
