function verdata(){
    let res = document.getElementById('res');
    let sysDate = new Date();
    let dia = sysDate.getDate();
    let _semana = sysDate.getDay();
    let _mes = sysDate.getMonth();
    let ano = sysDate.getFullYear();
    let hora = sysDate.getHours();
    let minutos = sysDate.getMinutes();
    let segundos = sysDate.getSeconds();
    console.log(sysDate, dia, _semana, _mes, ano, hora, minutos, segundos)
    switch(_semana) {
        case 0: 
            _semana = "Dom";
            break
        case 1:
            _semana = "Seg";
            break
        case 2:
            _semana = "Ter";
            break
        case 3:
            _semana = "Qua";
            break
        case 4:
            _semana = "Qui";
            break
        case 5:
            _semana = "Sex";
            break
        case 6:
            _semana = "Sab";
            break
    }

    switch(_mes) {
        case 0:
            _mes = "Jan";
            break
        case 1:
            _mes = "Fev";
            break
        case 2:
            _mes = "Mar";
            break
        case 3:
            _mes = "Abr";
            break
        case 4:
            _mes = "Mai";
            break
        case 5:
            _mes = "Jun";
            break
        case 6:
            _mes = "Jul";
            break
        case 7:
            _mes = "Ago";
            break
        case 8:
            _mes = "Set";
            break
        case 9:
            _mes = "Out";
            break
        case 10:
            _mes = "Nov";
            break
        case 11:
            _mes = "Dez";
            break
    }

    res.innerHTML = null
    res.innerHTML += `<p>Dia: <mark>${dia}</mark></p>`;
    res.innerHTML += `<p>Mês: <mark>${_mes}</mark></p>`;
    res.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`;
    res.innerHTML += `<p>Dia da Semana: <mark>${_semana}</mark></p>`;
    res.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`;
    res.innerHTML += `<p>Minutos: <mark>${minutos}</mark></p>`;
    res.innerHTML += `<p>Segundos: <mark>${segundos}</mark></p>`;
    
}