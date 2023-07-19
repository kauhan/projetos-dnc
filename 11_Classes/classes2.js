class jogador{
    constructor(nome,posicao,numGol){
        this.nome = nome
        this.posicao = posicao
        this.numGol = numGol
    }
    golsMarcados(){
        console.log(`O ${this.nome} já marcou ${this.numGol} gols em sua carreira`)
    }
}

const neymar = new jogador('neymar','atacante', 400)
neymar.golsMarcados()
const pele = new jogador('pele','atacante', 400)
pele.golsMarcados()

console.log(typeof jogador)