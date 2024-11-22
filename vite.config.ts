import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'BugSie-UI',
      formats: ['es', 'umd'],
      fileName: (format) => `bugsie-ui.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        },
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css') {
            return 'style.css'; // Ensure CSS is output correctly
          }
          return '[name].[ext]';
        }
      }
    },
    outDir: './dist', // Output in the same dist directory
    emptyOutDir: false // Do not remove `dist` directory before building
  }
});
