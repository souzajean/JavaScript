let nome = 'Jean';
let sobrenome = 'Souza';
let nameCompleto = 'Nome Completo: ${nome} ${sobrenome}';

console.log(nome);
console.log(sobrenome);
console.log(nameCompleto);


let inteiro = 10;
let real = 10.5;
let nan = 10/'a';
let infinity = Number.POSITIVE_INFINITY;
console.log(inteiro);
console.log(real);
console.log(nan);
console.log(infinity);


//Boolean
let verdadeiro = true;
let falso = false;
console.log(verdadeiro);
console.log(falso);


/*
Symbol

O tipo Symbol é utilizado para criar valores únicos. 
Ele pode ser usado como chave de uma propriedade de objeto quando este tem a intenção de ser privada, 
para uso interno da classe ou do tipo do objeto em questão.

Apesar de ser amplamente no core da linguagem, esse tipo é pouco utilizado por desenvolvedores no dia-a-dia.
*/

let symb = Symbol.for('abc');
console.log(symb); // Resultado: Symbol(abc)
console.log(Symbol.for('abc')); // Resultado: Symbol(abc)
console.log(Symbol.keyFor(symb)); // Resultado: abc



let bigint = 1234n;
let bigint2 = BigInt('1234');
console.log(bigint);
console.log(bigint2);



let obj = {
    nome: 'Jean',
    sobrenome: 'Souza',
    idade: 28,
    getNomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
}
console.log(obj.getNomeCompleto());



//Array
var cadastro = ['Jean', '1', 'Souza', 'Cardoso', 29,'987654321'];
console.log(cadastro);


//Map
let map =new Map();
map.set('Item1',10);
map.set('Item2', 48);
console.log(map.get('Item2'));

//set
//O tipo set é similar ao array, porém não armazena valores que já existem no conjunto.
let set = new Set();
set.add(1);
set.add(2);
console.log(set);



let dataAtual = new Date();
console.log(dataAtual);

let dataEspecifica = new Date (2021, 12, 31);
console.log(dataEspecifica);


const somarFunc = function(valor1, valor2) {
    return valor1 + valor2;
}

const soma = somarFunc(9,1);
console.log(soma);