function verhora(){
    let res = document.getElementById('res')
    let data = new Date();
    let atualdata = data.getDate
    res.innerHTML = `<p>O que eu recebi do sistema foi <mark>${data}</mark></p>`
}