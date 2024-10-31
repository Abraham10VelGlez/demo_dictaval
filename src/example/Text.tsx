'use client';

import { Text as DreiText } from '@react-three/drei';

import abc_font from '@/assets/abc-normal.ttf';
import decay_font from '@/assets/decay.otf';

const Text = () => {
    return (
        <group position-y={0.2}>
            <DreiText
                letterSpacing={-0.07}
                font={decay_font}
                fontSize={0.94}
                renderOrder={1}
                position-y={0.8}
                color='#ffffff'>
                DEMO DICTAVAL
            </DreiText>

            <DreiText
                letterSpacing={-0.07}
                font={decay_font}
                position-y={-0.12}
                fontSize={0.94}
                color='#ffffff'>
                BIENVENIDOS A LA NUEVA ERA
            </DreiText>

            <DreiText
                font={abc_font}
                maxWidth={4.2}
                textAlign='center'
                fontSize={0.1}
                lineHeight={1.5}
                position-y={-1}
                color='white'>
               ESTE DEMO ESTA HECHO CON EL FIN DE HACER PRUEBAS DE SISTEMAS POR PARTE DEL AUTOR ABRAHAM VELAZQUEZ GONZALEZ, EN COLABORACION CON EL Instituto de Información e Investigación Geográfica, Estadística y Catastral del Estado de México IGECEM.                
            </DreiText>
        </group>
    );
};

export default Text;
