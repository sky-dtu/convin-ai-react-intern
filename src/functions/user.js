export const getUserListAPI = (callback) => {
    const url = "https://reqres.in/api/users";
    
    fetch(url).then(res => 
        res.json()
        ).then(res => {
            // console.log(res);
            callback(null, res)
        })

    
}


export const getUserDetailAPI = (userid, callback) => {
    const url = "https://reqres.in/api/users/" + userid;
    
    fetch(url).then(res => 
        res.json()
        ).then(res => {
            // console.log(res);
            callback(null, res)
        })

    
}