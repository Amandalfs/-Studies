import axios from "axios";

axios.get('http://api.github.com/users/Amandalfs')
    .then(res => {
        const user  = res.data
        return axios.get(user.repos_url)
    })
    .then(res  => {
        const repositorio =  res.data
        const names = repositorio.map((el) => {
            return `Name: ${el.name}, Description: ${el.description}`;
        })  
        console.log(names);      
    })
    .catch(error  =>{
        console.log(`Error ${error}`)
    })

/* Promise.all([
    axios.get('http://api.github.com/users/Amandalfs'),
    axios.get('http://api.github.com/users/Amandalfs/repos')
    .then(responses =>{
        console.log(responses[0].data.login)

    })
]) */