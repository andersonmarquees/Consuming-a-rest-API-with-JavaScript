function verificaCpfValido(cpf) {

    const foo = cpf
    const bar = cpf[0].repeat(11)

    if(foo === bar) {
        return false
    }else{
        return true
    }
}

function somaNumerosCPF(cpf, totalDigitos, peso) {
    let soma = 0
    for(let indice = 1; indice <= totalDigitos; indice++) {
        soma += parseInt(cpf.substring(indice - 1, indice)) * (peso - indice)
    }
    return soma
}

function varificaDigito(cpf, totalDigitos, peso, digitoVerificacao) {
    const soma = somaNumerosCPF(cpf, totalDigitos, peso)
    const resto = (soma * 10) % 11
    return resto === digitoVerificacao
}

function verificaPrimeiroDigito(cpf) {
    const peso = 11
    const totalDigitosPrimeiraParte = 9
    const digitoVerificacao = parseInt(cpf.substring(9, 10))

    return varificaDigito(
        cpf,
        totalDigitosPrimeiraParte,
        peso,
        digitoVerificacao
    )
}

function verificaSegundoDigito(cpf) {
    const peso = 12
    const totalDigitosSegundaParte = 10
    const digitoVerificacao = parseInt(cpf.substring(10, 11))

    return varificaDigito(
        cpf,
        totalDigitosSegundaParte,
        peso,
        digitoVerificacao
    )
}

function validaCPF(cpf) {
    return (
        verificaPrimeiroDigito(cpf),
        verificaSegundoDigito(cpf),
        verificaCpfValido(cpf)
    )
}

