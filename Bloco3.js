//21
const numeros = [1, 6, 12, 18, 60];
console.log(numeros);
const dobrado = numeros.map(num => num * 2);
console.log(dobrado);

//22
const letras = ['a', 'e', 'i', 'o', 'u'];
console.log(letras);
const maiuscula = letras.map(letras => letras.toUpperCase());
console.log(maiuscula);

//23
const numeros = [1, 6, 12, 19, 60];
console.log(numeros);
const pares = numeros.filter(numeros => numeros % 2 === 0);
console.log(pares);

//24
const numeros = [1, 6, 50, 91, 60];
console.log(numeros);
const valores = numeros.filter(numeros => numeros > 50);
console.log(valores);

//25
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'João', 'Ana'];
console.log(nome);
const palavras = nome.filter(nome => nome.length > 5);
console.log(palavras);

//26
const numeros = [1, 6, 50, 91, 60];
console.log(numeros);
const soma = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);
console.log(soma);

//27
const numeros = [1, 6, 50, 91, 60];
console.log(numeros);
const maior = numeros.reduce((acumulador, numero) => Math.max(acumulador, numero));
console.log(maior);

//28
const numeros = [1, 6, 50, 91, 60, 77, 67, 23, 12, 1, 123];
console.log(numeros);
const contar = numeros.reduce((contador) =>  contador + 1, 0);
console.log(contar);

//29
const pessoas = [
                {nome: "Gabriela", idade: 17},
                {nome: "Vinicius", idade: 21},
                {nome: "Marcelo", idade: 48},
                {nome: "Ana", idade: 12},
                {nome: "João", idade: 10}
                ];
console.log(pessoas);
const maioral = pessoas.filter(pessoas => pessoas.idade >= 18);
console.log(maioral);

//30
const numeros = [1, 6, 50, 91, 60, 77, 67, 23, 12, 1, 123];
console.log(numeros);
const media = numeros.reduce((soma, atual) => soma + atual , 0) / numeros.length;
console.log(media);