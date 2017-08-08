import * as types from "./mutation-types";

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
	}
}
export default mutations