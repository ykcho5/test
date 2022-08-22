//Login promise
axios.post('http://api.marktube.tv/v1/me',{
    email,
    password,
}).then(res=>{});

//Login Async_Await
const res = await axios.post('http://api.marktube.tv/v1/me',{
    email,
    password,
});