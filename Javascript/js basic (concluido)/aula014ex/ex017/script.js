function tabuada() {
    let num = document.getElementById('txtN');
    let tab = document.getElementById('seltab');
    if (num.value.length == 0) {
        window.alert("por favor, digite um numero");
    } else {
        let result = 0;
        let n = Number(num.value); 
        tab.innerHTML = '';
        for (let c =0; c<=10; c++) {
            result = n*c;
            let item = document.createElement('option');
            item.text = (`${n} x ${c} = ${result}`);
            tab.appendChild(item);
        }      
    }
}    
