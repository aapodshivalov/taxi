export default(state = [], action) => {
    switch(action.type) {
        case 'ADD_CARS_LIST':
            return action.payload;
        default:
            return state;
    }
}