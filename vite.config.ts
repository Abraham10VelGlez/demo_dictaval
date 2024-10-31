import * as path from 'path';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import tsConfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import glsl from 'vite-plugin-glsl';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [react(), glsl(), dts({ include: 'lib', insertTypesEntry: true }), tsConfigPaths()],

    server: {//configuraciones para desarrollo en docker-compose.yml
        watch: {//configuraciones para desarrollo en docker-compose.yml
            usePolling: true,//configuraciones para desarrollo en docker-compose.yml
        },//configuraciones para desarrollo en docker-compose.yml
        host: '0.0.0.0',//configuraciones para desarrollo en docker-compose.yml
        port: 5173//configuraciones para desarrollo en docker-compose.yml
    },//configuraciones para desarrollo en docker-compose.yml  


    resolve: {
        alias: [
            {
                find: '@',
                replacement: fileURLToPath(new URL('./src', import.meta.url)),
            },
        ],
    },
    build: {
        lib: {
            // eslint-disable-next-line no-undef
            entry: path.resolve(__dirname, 'lib/index.ts'),
            name: 'reactFluidDistortion',
            formats: ['es', 'umd'],
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: [
                'react',
                '@react-three/fiber',
                '@react-three/drei',
                'three',
                'leva',
                'postprocessing',
            ],
            output: {
                globals: {
                    react: 'React',
                    '@react-three/fiber': 'reactThreeFiber',
                    '@react-three/drei': 'drei',
                    three: 'THREE',
                    leva: 'leva',
                    postprocessing: 'postprocessing',
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
        copyPublicDir: false,
    },
});
