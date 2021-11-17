//O operador in é utilizado para verificar se uma propriedade existe em um objeto.



let pessoa = {
    nome: 'Jean',
    idade: 29
}

console.log('nome' in pessoa) //retorna true
console.log('sobrenome' in pessoa) //retorna false