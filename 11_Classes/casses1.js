const jogador = function(nome,posicao,numGol){
    Nome = nome,
    posicao = posicao,
    Gols = numGol

    this.getNome = function(){
        return  Nome
    }
    this.getPos = function(){
        return posicao
    }
    this.getGols = function(){
        return Gols
    }
}

const neymar = new jogador("neymar","atacante",400)
console.log(neymar.getNome())
const renato = new jogador("renato","meio campo",80)
console.log(renato.getNome())