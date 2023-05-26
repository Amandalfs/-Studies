const arrayOriginal = [35, 320, 23, 51, 85, 24, 45, 45, 33, 35, 23]
const repetido = [];
const ArrayUnicos = [];
for(let indice = 0; indice<arrayOriginal.length; indice++){
    for(let indice2 = indice+1; indice2<arrayOriginal.length; indice2){
        if(arrayOriginal[indice]===arrayOriginal[indice2]){
            repetido[repetido.length] = arrayOriginal[indice];
        }
    }
}

for(let indice3 = 0; indice3<arrayOriginal.length; indice3++){
    let valueBoolean = true;
    for(let indice4 = 0; indice4<repetido; indice4++){
        if(arrayOriginal[indice3]===repetido[indice4]){
            valueBoolean = false;
        }
    }
    if(valueBoolean){
        ArrayUnicos[ArrayUnicos.length] = arrayOriginal[indice3];
    }
}

console.log(ArrayUnicos);