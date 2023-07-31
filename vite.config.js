import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactDom from 'react-dom';
import reactRedux from 'react-redux'; // Add this line
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [react, reactDom, reactRedux], // Add reactRedux here
    },
  },

})
