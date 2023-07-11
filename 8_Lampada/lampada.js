var lamp = window.document.getElementById('lampada')

function estaQuebrada(){
    return lamp.src.indexOf('lampadaQuebrada') > -1
}

function  ligar(){
    if(!estaQuebrada()){
    lamp.src = 'lampadaLigada.svg'}
}

function desligar(){
    if(!estaQuebrada()){
    lamp.src = 'lampadaDesligada.svg'}  
}
lamp.addEventListener('click',Quebrar)
function Quebrar(){
    lamp.src = 'lampadaQuebrada.svg'

}