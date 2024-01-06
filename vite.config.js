import path from 'node:path';
import process from 'node:process';
import {fileURLToPath} from 'node:url';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import react from '@vitejs/plugin-react-swc';
import cesium from 'vite-plugin-cesium';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cesium()],
  server: {
    port: 3000,
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd()), __dirname],
    },
  },
})
