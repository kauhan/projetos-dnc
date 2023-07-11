function presente(dinheiro,valor) {
    if (dinheiro < valor){
        return 'não da pra comprar..'
    } else {
        return 'voce realmente precisa fazer essa compra?'
    }
}

let x = presente(100,90)
console.log(x)