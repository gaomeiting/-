import * as types from "./mutation-types";
import { savedSearch } from "common/js/catch";

const mutations = {
	[types.SET_SINGER](state, singer) {
		state.singer=singer;
	},
	[types.SET_PLAY_LIST](state, list) {
		state.playList=list;
	},
	[types.SET_SEQUENCE_LIST](state, list) {
		state.sequenceList=list;
	},
	[types.SET_CURRENT_INDEX](state, index) {
		state.currentIndex=index;
	},
	[types.SET_MODE](state, mode) {
		state.mode=mode;
	},
	[types.SET_FULLSCREEN](state, flag) {
		state.fullScreen=flag;
	},
	[types.SET_PLAYING](state, flag) {
		state.playing=flag;
	},
	[types.SET_DISC](state, disc) {
		state.disc=disc;
	},
	[types.SET_RANK](state, rank) {
		state.rank=rank
	},
	[types.SET_SEARCH_HISTORY](state, history) {
		state.searchHistory=history;
	},
	[types.SET_PLAY_HISTORY](state, history) {
		state.playHistory=history
	},
	[types.SET_FAVORITE_LIST](state, list) {
		state.favoriteList=list
	}
}
export default mutations