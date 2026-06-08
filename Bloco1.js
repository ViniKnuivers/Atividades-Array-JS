// 1
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
console.log(nome);

//2
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
nome.push('Robson');
console.log(nome);

//3
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
nome.pop();
console.log(nome);

//4
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
nome.unshift('Robson');
console.log(nome);  

//5
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
nome.shift();
console.log(nome);

//6
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
console.log(nome.length);

//7
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
console.log(nome[2]);

//8
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
nome[2] = 'Robson';
console.log(nome);

//9
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

//10
const nome = ['Gabriela', 'Vinícius', 'Marcelo', 'Luciane', 'Gustavo'];
for (const nomes of nome) {
    console.log(nomes);
}
