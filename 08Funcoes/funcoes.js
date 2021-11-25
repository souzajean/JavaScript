//Função Soma
function somar(x1,x2){
    cont = x1 + x2;
    console.log(cont)
    return somar
}


somar(5,5)
somar(1,4)

//Função boas vindas
function boasVindas(nome) {
    const mensagem = 'Olá ${nome} !';
    console.log(mensagem)
    return mensagem;
}

boasVindas("Jean");

//função Par ou Impar
function parimp(n) {
    if(n%2==0){
        return console.log('par')
    }
        else {
            return console.log('impar')
        }
}
let res = parimp(11)

parimp(10)


//função sexo masculino ou feminino
let m = 'Maculino'
let f = 'Feminino'

function logar(sexo) {
    if (sexo === m || sexo !== f){
        return console.log('Masculino')
    }
    if (sexo === f){
        return console.log('Feminino')
    }
    else{ 
        return console.log('Digite "F" para feminino e "M" para masculino')
    }
        
}
logar(m)
logar(f)


//função exponencial usando variavel

    let valor = function(x){
        return x*2
    }
    console.log(valor(5))




//Fatorial !5 = 5 x 4 x 3 x 2 x1 = 120
function Fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(Fatorial(5))





