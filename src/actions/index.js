export const setUserList = (res) => {
    return {
        type : 'USERLIST',
        payload : res || {}
    };
};