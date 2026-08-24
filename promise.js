const promise = new Promise((resolve,reject)=>{
    let success = true
    if(success){
        resolve({
            id: 2930309,
            username: "john doe"
        })
    }else{
        reject(new Error("data not fetched"))
    }
})

promise.then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error.message);
});

