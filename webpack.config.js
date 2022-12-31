const path = require('path')
const {BannerPlugin} = require('webpack')

const banner = `
// ==UserScript==
// @name         Search Enhance
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  搜索引擎增强
// @author       You
// @match        *://*.baidu.com/*
// @grant        none
// ==/UserScript==
`

module.exports = {
	mode: 'production',
	entry: './src/index.ts',
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new BannerPlugin({
			banner,
			raw: true,
			entryOnly: true,
		}),
	],
	optimization: {
		minimize: false,
	},
}