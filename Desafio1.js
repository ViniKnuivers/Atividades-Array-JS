const produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 120 },
    { nome: "Monitor", preco: 900 }
];
console.log(produtos);
const precomaior = Math.max(...produtos.map(conferir => conferir.preco));
const caro = produtos.filter(conferir => conferir.preco === precomaior);
console.log(caro);
