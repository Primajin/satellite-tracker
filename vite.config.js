import path from 'node:path';
import process from 'node:process';
import {fileURLToPath} from 'node:url';
import {defineConfig, searchForWorkspaceRoot} from 'vite';
import react from '@vitejs/plugin-react-swc';
import cesium from 'vite-plugin-cesium';
import {configDefaults} from 'vitest/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => ({
	base: '/',
	build: {
		outDir: 'build',
	},
	plugins: [react(), cesium()],
	resolve: {
		preserveSymlinks: true,
	},
	server: {
		port: 3000,
		fs: {
			allow: [searchForWorkspaceRoot(process.cwd()), __dirname],
		},
	},
	test: {
		exclude: [
			...configDefaults.exclude,
			'src/index.jsx',
		],
		coverage: {
			all: true,
		},
		globals: true,
		// Use jsdom to simulate a browser environment, preventing "ReferenceError: window is not defined"
		// in tests that rely on browser globals (e.g. components using Cesium/DOM APIs).
		environment: 'jsdom',
		setupFiles: './setup-tests.js',
	},
}));
