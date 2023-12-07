// JS Basics:

// JS é case-sensitive
// podem ser definidas várias variáveis ao mesmo tempo
// camelcase (boa prática): nomeCidade (primeiro nome da variável em lowercase, segundo nome em uppercase)

//Tipagem dinâmica e fraca:
// Tipagem dinâmica: as variáveis não estão diretamente associadas a um tipo de valor específico.
//- Uma variável let pode ter seu valor reatribuído para um outro tipo de dado
// Ex.: let nome = "Fulano" (String)
//let nome = 1 (número)
//- Nesse momento, a variável nome terá seu valor reatribuído, e o tipo de dado passa a ser número.

// Tipagem fraca:permite a conversão implícita de tipo quando uma operação envolve tipos incompatíveis, em vez de gerar erros de tipo

// Declaração de variáveis:
// A declaração é feita digitando let ou const
// let: variável que pode ter ser reatribuído valores
// const: variável que não pode ter seu valor alterado após ser feita a atribuição

// let x const:
// Deve-se dar preferência para utilizar const (boas práticas), usando let apenas quando for necessário posteriormente mudar o valor da variável.

// Atribuição de variáveis:
// Atribuir um valor a uma variável.
// Pode ser feito já no momento da declaração de variáveis.
// Pode ser feita a reatribuição de variáveis, mudando inclusive o tipo de dado (exceto para const).

//Tipos de dados primitivos no JS:
//let nome = "Rafael" // String
//let idade = 23 // Number
//const sexo = true // Boolean
//let nome {} // null
// undefined
// symbol
// objetc
//- Array é um tipo de objeto

let nome = 'Stephane'; //string literal
let idade = 23; //number literal
let aprovadaConcuso = true; //boolean
let nomeCidade; //undefined (any)
let fotoUsuario = null; //null (utilizado em casos em que se quer redefinir um valor, por exemplo a foto do usuário quando ele for redefiní-la)

//pq não consegui reatribuir? (escopo de bloco)

let pessoa = {
	//objeto
	idade: 10,
	sexo: true,
	nome: 'Fulana',
};

console.log(pessoa);

//array, como funciona?
