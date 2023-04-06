const path = require('path');

module.exports = {
	build: {
		outDir: 'dist',
		rollupOptions: {
			input: {
				page1: path.resolve(__dirname, 'index.html'),
				page2: path.resolve(__dirname, 'hours.html'),
				page3: path.resolve(__dirname, 'contact.html'),
			},
			output: {
				format: 'es',
			},
		},
	},
};
