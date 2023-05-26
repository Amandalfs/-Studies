const url="https://api-newlabs.cyclic.app/dados";


/* const btn = document.querySelector('.btn')
btn.addEventListener('click', ()=>{
    getProducts();
}) */

function getProducts(){
    fetch(url)
        .then(result=> result.json())
        .then((data) =>{
            renderApiResult.textContent = JSON.stringify(data[0])
        }
        )
        .catch(error=>console.error(error))
}
getProducts();