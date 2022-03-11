const userlistReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USERLIST':
            return action.payload;  
        default:
            return state
    }
}


export default userlistReducer;