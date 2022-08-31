const receitas = [25, 64, 93]
const despesas = [119, 228, 415]

somarArray = function(lista){
    let soma = 0
    lista.forEach(function(valor){
        soma = soma + valor
    }
    )
    return soma
}

calcularTotal = function(){
    const totalReceitas = somarArray(receitas)
    const totalDespesas = somarArray(despesas)
    const saldo = totalReceitas - totalDespesas
    if (saldo > 0){
        console.log('O saldo é positivo')
    } else if (saldo < 0){
        console.log('O saldo é negativo')
    } else {
        console.log('O saldo é nulo')
    }
    console.log(saldo)
}