'use client';

import { Text as DreiText } from '@react-three/drei';

import abc_font from '@/assets/abc-normal.ttf';
import decay_font from '@/assets/decay.otf';

const Text = () => {
    return (
        <group position-y={0.2}>
            <DreiText
                letterSpacing={0}
                font={decay_font}
                fontSize={0.94}
                renderOrder={1}
                position-y={2}
                color='#ffffff'>
                DEMO
            </DreiText>
            
            <DreiText
                letterSpacing={0.5}
                font={decay_font}
                fontSize={0.94}
                renderOrder={1}
                position-y={0.8}
                color='#ffffff'>
                DICTAVAL
                
            </DreiText>
            
            <DreiText
                letterSpacing={-0}
                font={decay_font}
                position-y={-0.12}
                fontSize={0.50}
                color='#ffffff'>
                BIENVENIDOS A LA INNOVACIÓN
            </DreiText>

            <DreiText
                font={abc_font}
                maxWidth={4.2}
                textAlign='center'
                fontSize={0.1}
                lineHeight={1.5}
                position-y={-1}
                color='white'>
                DEMO HECHO PARA PRUEBAS DE SITIO WEB POR AUTOR ABRAHAM VELAZQUEZ GONZALEZ {"\n"}  EN COLABORACION CON {"\n"} {"\n"} Instituto de Información e Investigación Geográfica, Estadística y Catastral del Estado de México IGECEM.{"\n"} {"\n"} 2025
            </DreiText>
        </group>
    );
};

export default Text;
