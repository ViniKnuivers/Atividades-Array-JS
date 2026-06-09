//31
const numeros = [1, 6, 12, 18, 60];
const numero = [1, 2, 3, 4, 5];
const juntos = [...numero, ...numeros];

console.log(juntos, numero, numeros);

//32
const numeros = [1, 1, 6, 6, 12, 18, 60];
console.log(numeros);
const arrumado = numeros.filter((numero, acumulador) => {
    return numeros.indexOf(numero) === acumulador;
});
console.log(arrumado);

//33
const frase =['Vinicius', 'gosta', 'de', 'jogar', 'no', 'computador!'];
console.log(frase.join());

//34
const frase =['Vinicius gosta de jogar no computador!'];
const palavra = frase[0].split(" ");
console.log(palavra);

//35
const frase = ['Vinicius', 'gosta', 'de', 'jogar', 'no', 'computador!'];
console.log(frase);
const palavra =  frase.splice(1, 3);
console.log(palavra);

//36
const frase = ['Vinicius', 'gosta', 'de', 'jogar', 'no', 'computador!'];
console.log(frase);
const computador = frase.splice(5, 1);
const jogar = frase.splice(3, 1);
const vinicius = frase.splice(0, 1);
console.log(vinicius, jogar, computador);

//37
const frase = ['Vinicius', 'gosta', 'de', 'no', 'computador!'];
console.log(frase);
frase.splice(3, 0, 'jogar');
console.log(frase);

//38
const palavras = [1, false, 'oi', 0, null, 42, '', undefined];
const teste = palavras.filter(testando => testando !== null && testando !== undefined && testando !== '' && testando !== NaN && testando !== 0 && testando !== false);
console.log(teste);
