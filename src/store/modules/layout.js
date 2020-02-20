export default {
    actions: {},
    mutations: {
        setLocalStorageBooleanValue(state, value) {
            state.localStorageBooleanValue = value
        },
        chnageValueAvatarImage(state, value) {
            state.avatarImg = value
        },
        setToLocalStorage(state, authData) {
            localStorage.setItem(state.isAccountExist, JSON.stringify(authData));
        }
    },
    state: {
        isAccountExist: 'auth',
        localStorageBooleanValue: null,
        avatarImg: null
    },
    getters: {
        valueAccountExist(state) {
            return state.isAccountExist
        },
        valueavatarImg(state) {
            return state.avatarImg
        },
        valueLocalStorageBoolean(state) {
            return state.localStorageBooleanValue
        }
    }
}