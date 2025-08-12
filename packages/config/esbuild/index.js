const esbuild = require('esbuild');

esbuild
	.build({
		entryPoints: ['src/index.ts'], // punto de entrada
		bundle: false, // sin bundle, solo transpilar
		platform: 'node', // plataforma Node.js
		target: ['node16'], // target versión Node.js compatible con ESM
		format: 'esm', // salida en formato ES Modules
		outdir: 'dist', // carpeta de salida
		sourcemap: true, // opcional, para debugging
		splitting: false, // si tienes varios archivos, podrías usar true
		external: [], // aquí puedes excluir paquetes externos (node_modules)
		logLevel: 'info',
		// define si quieres cambiar extensiones TS por JS en import
		// Pero esbuild hace esto automáticamente en la salida .js
	})
	.catch(() => process.exit(1));
