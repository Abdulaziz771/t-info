export default {
    actions: {},
    mutations: {},
    state: {
        test: 'Hello'
    },
    getters: {
        showText(state) {
            return state.test
        }
    }
}