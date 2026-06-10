//21 Dado um array de números, crie outro contendo todos os valores multiplicados por 2 usando map()
const numeros = [1, 6, 12, 18, 60];
console.log(numeros);
const dobrado = numeros.map(num => num * 2);
console.log(dobrado);

//22 Converta um array de nomes para letras maiúsculas usando map()
const letras = ['a', 'e', 'i', 'o', 'u'];
console.log(letras);
const maiuscula = letras.map(letras => letras.toUpperCase());
console.log(maiuscula);

//23 Filtre apenas os números pares usando filter().
const numeros = [1, 6, 12, 19, 60];
console.log(numeros);
const pares = numeros.filter(numeros => numeros % 2 === 0);
console.log(pares);

//24 Filtre apenas os números maiores que 50
const numeros = [1, 6, 50, 91, 60];
console.log(numeros);
const valores = numeros.filter(numeros => numeros > 50);
console.log(valores);

//25 Filtre palavras com mais de 5 caracteres.
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'João', 'Ana'];
console.log(nome);
const palavras = nome.filter(nome => nome.length > 5);
console.log(palavras);

//26 Some todos os elementos utilizando reduce()
const numeros = [1, 6, 50, 91, 60];
console.log(numeros);
const soma = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);
console.log(soma);

//27 Encontre o maior valor utilizando reduce()
const numeros = [1, 6, 50, 91, 60];
console.log(numeros);
const maior = numeros.reduce((acumulador, numero) => Math.max(acumulador, numero));
console.log(maior);

//28 Conte quantos elementos existem utilizando reduce()
const numeros = [1, 6, 50, 91, 60, 77, 67, 23, 12, 1, 123];
console.log(numeros);
const contar = numeros.reduce((contador) =>  contador + 1, 0);
console.log(contar);

//29 Gere um array contendo apenas os nomes de pessoas maiores de idade.
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

//30 Calcule a média dos valores de um array usando reduce()
const numeros = [1, 6, 50, 91, 60, 77, 67, 23, 12, 1, 123];
console.log(numeros);
const media = numeros.reduce((soma, atual) => soma + atual , 0) / numeros.length;
console.log(media);