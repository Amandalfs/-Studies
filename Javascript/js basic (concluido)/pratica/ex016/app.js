function iniciar(){
    let res = document.getElementById("res");
    let sysDate = new Date();
    let anoAtual = sysDate.getFullYear();
    let nasc = Number(prompt("Em que ano você nasceu ?"));
    let idade = anoAtual-nasc;
    res.innerHTML = "";
    res.innerHTML += `<p>Resultando vai aparecer aqui em baixo &#x1F447; </p>`; 
    res.innerHTML += `<p>Quem nasceu em ${nasc} vai completar <strong>${idade}</strong> em ${anoAtual}</p>`;
    
}