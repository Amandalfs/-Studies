function contar(){
    let res = window.document.getElementById('res');
    let i = window.document.getElementById('ini');
    let f = window.document.getElementById('fim');
    let p = window.document.getElementById('passo');
    if (p == 0) {
        alert("Passo invalido, considerando passo 1")
        p = 1;
    }   
    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        res.innerHTML = "Impossivel contar";
        //alert("[ERROR] Falta Dados")
    } else {
        i = Number(i.value); f = Number(f.value);
        if (p.value == 0) {
            alert("[Passo Invalido] o passo vai ser considerado 1")
            res.innerHTML = "";
            p = 1;
        } else {
            p = Number(p.value);
            res.innerHTML = ("Contando.... ")
            if (i<f) {
                for (let c = i; c<=f; c += p) {
                    res.innerHTML += (` ${c} \u{1F449} `);
    
                }
            } else {
                for (let c = i; c>=f; c -= p) {
                    res.innerHTML += (` ${c} \u{1F449} `);

                } 
            }
            res.innerHTML += (` \u{1F3C1}`);
        }

    }

}