/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
// import { defineConfig } from "vitest/config";
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		css: true,
		setupFiles: './test/setup.ts',
	},
	resolve: {
		alias: [
			{
				find: '@components',
				replacement: resolve(__dirname, './src/components/'),
			},
			{
				find: '@hooks',
				replacement: resolve(__dirname, './src/hooks/'),
			},
			{
				find: '@assets',
				replacement: resolve(__dirname, './src/assets/'),
			},
			{
				find: '@layouts',
				replacement: resolve(__dirname, './src/layouts/'),
			},
			{
				find: '@middleware',
				replacement: resolve(__dirname, './src/middleware/'),
			},
			{
				find: '@pages',
				replacement: resolve(__dirname, './src/pages/'),
			},
			{
				find: '@utils',
				replacement: resolve(__dirname, './src/utils/'),
			},
			{
				find: '@scripts',
				replacement: resolve(__dirname, './scripts/'),
			},
		],
	},
});
