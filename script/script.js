let list = document.querySelectorAll('.item')
let pass = document.getElementById('pass')
let volt = document.getElementById('volt')
let contagem = list.length
let ativo = 0 
pass.onclick = () =>{
    let desat = document.querySelector('.ativado')
    desat.classList.remove('ativado')
    ativo = ativo >= contagem -1 ? 0 : ativo +1
    list[ativo].classList.add('ativado')
}
volt.onclick = () =>{
    let desat = document.querySelector('.ativado')
    desat.classList.remove('ativado')
    ativo = ativo <= 0 ? contagem -1 : ativo -1
    list[ativo].classList.add('ativado')
}
console.log(contagem)