//11 Crie um array de números e calcule a soma de todos os elementos.
const numeros = [1, 6, 12, 18, 60];
console.log(numeros);
const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(soma);

//12 Encontre o maior número de um array.
const numeros = [1, 6, 12, 18, 60];
const maior = Math.max(...numeros);
console.log(maior);

//13 Encontre o menor número de um array.
const numeros = [1, 6, 12, 18, 60];
const menor = Math.min(...numeros);
console.log(menor);

//14 Conte quantas vezes um determinado valor aparece no array
const numeros = [1, 1, 12, 18, 60];
const totalnumero = {};

    for (const numero of numeros){
        if (totalnumero[numero]){
            totalnumero[numero]++;
        } else{
            totalnumero[numero] = 1;
        }
    }
console.log(totalnumero)

//15 Verifique se um valor existe no array usando includes()
const numeros = [1, 6, 12, 16, 60, 'a']
console.log(numeros.includes(1));
console.log(numeros.includes(5));
console.log(numeros.includes('a'));

//16 Descubra o índice de um elemento usando indexOf().
const numeros = [1, 6, 12, 16, 60, 'a']
console.log(numeros.indexOf(1));
console.log(numeros.indexOf(5));
console.log(numeros.indexOf('a'));

//17 Inverta a ordem dos elementos usando reverse().
const numeros = [1, 6, 12, 16, 60, 'a']
console.log(numeros);
numeros.reverse();
console.log(numeros);
numeros.reverse();
console.log(numeros);

//18 Ordene um array de números em ordem crescente.
const numeros = [12, 18, 1, 6, 60]
console.log(numeros);
numeros.sort((a, b) => a - b);
console.log(numeros);

//19 Ordene um array de strings em ordem alfabética.
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
console.log(nome);
nome.sort();
console.log(nome);

//20 Crie uma cópia de um array usando slice()
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
console.log(nome);
const nomes = nome.slice();
console.log(nomes);