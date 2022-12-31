const path = require('path')
const {BannerPlugin} = require('webpack')

const banner = `
// ==UserScript==
// @name         搜索引擎增强
// @namespace    search-enhance
// @version      1.0.0
// @description:zh-cn  搜索引擎增强、百度搜索广告去除
// @author       zhengtan2003
// @match        *://*.baidu.com/*
// @match        *://*.bing.com/*
// @license      MIT
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