const path = require('path')
const {BannerPlugin} = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: './src/index.ts',
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new BannerPlugin({
			raw: true,
			banner: () => `
// ==UserScript==
// @name         Search Enhance
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  搜索引擎增强
// @author       You
// @match        *://*.baidu.com/*
// @grant        none
// ==/UserScript==
			`,
			entryOnly: true,
		}),
	],
	optimization: {
		minimize: false,
		// minimizer: [
		// 	new TerserPlugin({
		// 		terserOptions:{
		// 			output: {
		// 				comments: false // 此配置最重要，无此配置无法删除声明注释
		// 			},
		// 			format: {
		// 				comments: false,
		// 			},
		// 		},
		// 		extractComments: false,
		// 	}),
		// ],
	},
}