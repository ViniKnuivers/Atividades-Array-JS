//11
const numeros = [1, 6, 12, 18, 60];
console.log(numeros);
const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(soma);

//12
const numeros = [1, 6, 12, 18, 60];
const maior = Math.max(...numeros);
console.log(maior);

//13
const numeros = [1, 6, 12, 18, 60];
const menor = Math.min(...numeros);
console.log(menor);

//14
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

//15
const numeros = [1, 6, 12, 16, 60, 'a']
console.log(numeros.includes(1));
console.log(numeros.includes(5));
console.log(numeros.includes('a'));

//16
const numeros = [1, 6, 12, 16, 60, 'a']
console.log(numeros.indexOf(1));
console.log(numeros.indexOf(5));
console.log(numeros.indexOf('a'));

//17
const numeros = [1, 6, 12, 16, 60, 'a']
console.log(numeros);
numeros.reverse();
console.log(numeros);
numeros.reverse();
console.log(numeros);

//18
const numeros = [12, 18, 1, 6, 60]
console.log(numeros);
numeros.sort((a, b) => a - b);
console.log(numeros);

//19
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
console.log(nome);
nome.sort();
console.log(nome);

//20
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
console.log(nome);
const nomes = nome.slice();
console.log(nomes);