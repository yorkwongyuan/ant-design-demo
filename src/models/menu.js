export default {
    namespace: 'menu',
    state: {},
    reducers: {
        send(state, actions) {
            return state.map(item => ({ ...item, ...{ title: actions.payload } }))
        }
    }
}