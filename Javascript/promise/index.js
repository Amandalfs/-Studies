console.log('Pedir uber');

let aceitar = false;

const promesa = new Promise((resolve, reject)=>{
    if(aceitar){
        return resolve('Carro chegou')
    } else {
        return reject('pedido negado');

    }
});

console.log('aguardando');

promesa.then(result =>{console.log(result)})
.catch(result =>{console.log(result)})
.finally(()=>{console.log('Finalizada')}); 