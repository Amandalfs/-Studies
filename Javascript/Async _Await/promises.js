/* const promessa = new Promise( function(resolve, reject){
    
    return resolve('ok')

})

async function start(){
    try{
        const result = await promessa
        console.log(result)
    }catch(e){
        console.log(e)
    } finally {
        console.log('finalizado')
    }
}

start() */

async function start(){
    try{
    const response = await fetch('http://api.github.com/users/Amandalfs');
    const user = await response.json();
    const reposReponse = await fetch(user.repos_url);
    const repos = await reposReponse.json();
    const names = repos.map((el)=>{
        return el.name
    })
    console.log(names)
    }catch(e){
        console.log(e)
    } finally {
        console.log('promisse finaly')
    }
}

start()