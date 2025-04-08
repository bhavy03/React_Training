const initialState = 0;
const changeNumber = (state = initialState, action) => {
    switch (action.type) {
        case "increment": return state + action.payload;
        case "decrement": return state - 1;
        default: return state;
    }
}

export default changeNumber