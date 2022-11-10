function fibonnaci(quantidadeNumeros) {
    var n1, n2, sucessor;
    n1 = 0;
    n2 = 1;

    if (quantidadeNumeros <= 0 ) {
        return []
    } else if (quantidadeNumeros == 1) {
        return [0]
    } else if (quantidadeNumeros == 2) {
        return [0, 1]
    }
    
    numeros = [0, 1]
    for (i = 2; i < quantidadeNumeros; i ++){
        sucessor = n1 + n2;
        n1 = n2;
        n2 = sucessor;
        numeros.push(sucessor);
    }
    return numeros

}
module.exports = fibonnaci;