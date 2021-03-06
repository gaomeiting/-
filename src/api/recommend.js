import { jsonp } from "common/js/jsonp";
import { commonParams, options } from "api/config";
import axios from 'axios';
export function getRecommend() {
	let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
	let data = Object.assign({}, commonParams, {
		platform: 'h5',
		uin: 0,
		needNewCode: 1
	} )
	return jsonp(url, data, options)
}
export function getDiscList() {
	let url ="/api/getDiscList";
	let data= Object.assign({}, commonParams, {
		rnd: Math.round(),
		loginUin: 0,
		hostUin: 0,
		platform: 'yqq',
		needNewCode: 0,
		categoryId: 10000000,
		sortId: 5,
		sin: 0,
		ein: 29,
		format: 'json'
	})
	return axios( url, {
		params: data
	}).then((res)=> {
		return Promise.resolve(res.data)
	}).catch(err => {
		return Promise.reject(res.data)
	});
}
export function getDiscDetail(disstid) {
	let url='https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
	
	let data = Object.assign({}, {
		disstid,
		type: 1,
		onlysong: 0,
		loginUin: 0,
		hostUin: 0,
		notice: 0,
		platform: 'yqq',
		needNewCode: 0,
	}, commonParams)
	return jsonp(url, data, options)
}