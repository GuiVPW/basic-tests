const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	entry: './src/index.js',
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'public', 'index.html')
		})
	],
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'build'),
		clean: true
	}
}
