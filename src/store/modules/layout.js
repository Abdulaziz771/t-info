export default {
    actions: {},
    mutations: {
        chnageValueAvatarImage(state, value) {
            state.avatarImg = value
        }
    },
    state: {
        isAccountExist: true,
        avatarImg: null
    },
    getters: {
        valueAccountExist(state) {
            return state.isAccountExist
        },
        valueavatarImg(state) {
            return state.avatarImg
        }
    }
}