export default {
    namespace: 'param',
    state: [],
    reducers: {
        'shan'(state, { payload: id }) {
            return state.filter(item => item.id !== id);
        }
    }
}