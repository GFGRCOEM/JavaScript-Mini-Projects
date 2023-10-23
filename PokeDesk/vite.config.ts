import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'#lib': '/src/lib',
			'@': path.resolve(__dirname, './src'),
		},
	},
});
