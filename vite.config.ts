import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// function pathResolve(dir?: string) {
//   return resolve(__dirname, '.', `src${dir ? '/' + dir : ''}`);
// }

export default defineConfig({
  resolve: {
    alias: {
      // '@': pathResolve(),
      // '@components': pathResolve('components'),
      // '@interfaces': pathResolve('interfaces'),
      // '@pages': pathResolve('pages'),
      // '@router': pathResolve('router'),
      // '@services': pathResolve('services'),
      // '@store': pathResolve('store'),
    },
  },
  plugins: [vue()],
});
