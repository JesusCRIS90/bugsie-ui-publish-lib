import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Beexy-UI',
      formats: ['es', 'umd'],
      fileName: (format) => `beexy-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css') {
            return 'style.css'; // Ensure CSS is output correctly
          }
          return '[name].[ext]';
        },
      },
    },
    outDir: './dist',
    emptyOutDir: false,
  },
  css: {
    modules: {
      scopeBehaviour: 'local', // Ensure CSS modules use local scoping
      generateScopedName: '[name]__[local]___[hash:base64:5]', // Class name pattern
    },
  },
});
