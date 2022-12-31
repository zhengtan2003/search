const path = require('path')
const {BannerPlugin} = require('webpack')

const banner = `
// ==UserScript==
// @name            		搜索引擎增强
// @namespace    				https://github.com/zhengtan2003/search-enhance
// @supportURL   				https://github.com/zhengtan2003/search-enhance/issues
// @version      				1.0.0
// @description:zh-cn		搜索引擎增强、百度搜索广告去除、搜索引擎快捷跳转
// @author       				zhengtan2003
// @match        				*://*.baidu.com/*
// @match        				*://*.google.com/*
// @license      				MIT
// @grant        				none
// ==/UserScript==
`

module.exports = {
	mode: 'production',
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ['ts-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
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