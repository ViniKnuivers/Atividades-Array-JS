// 1 Crie um array com 5 nomes e exiba todos os elementos no console.
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
console.log(nome);

//2 Adicione um novo elemento ao final de um array usando push()
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
nome.push('Robson');
console.log(nome);

//3 Remova o último elemento de um array usando pop()
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
nome.pop();
console.log(nome);

//4 Adicione um elemento no início do array usando unshift()
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
nome.unshift('Robson');
console.log(nome);  

//5 Remova o primeiro elemento usando shift()
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
nome.shift();
console.log(nome);

//6 Descubra quantos elementos existem em um array usando length
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
console.log(nome.length);

//7 Acesse e exiba o terceiro elemento de um array.
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
console.log(nome[2]);

//8 Substitua o valor de um elemento específico do array.
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
nome[2] = 'Robson';
console.log(nome);

//9 Percorra um array utilizando um loop for
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

//10 Percorra um array utilizando for...of
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
for (const nomes of nome) {
    console.log(nomes);
}
