const catsReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_CATS':
            return action.cats
        default:
            return state

    }
}

export default catsReducer