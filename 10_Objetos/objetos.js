let jogador = {
    nome : 'renato',
    idade : 30,
    numGol: 80,
    Gol(g=0){
        console.log('renato fez gol')
        this.numGol +=g
    }
}
console.log(jogador.nome)
console.log(jogador.numGol)
jogador.Gol(2)
console.log(jogador.numGol)

jogador.posicao = 'meio campo'
console.log(jogador)

delete jogador.idade

console.log(jogador)