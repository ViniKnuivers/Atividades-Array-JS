# 📦 Exercícios de Manipulação de Arrays em JavaScript

Lista com **40 exercícios** organizados do nível básico ao avançado, cobrindo os principais métodos de arrays em JavaScript.

---

## 🟢 Básico

1. Crie um array com 5 nomes e exiba todos os elementos no console.
2. Adicione um novo elemento ao final de um array usando `push()`.
3. Remova o último elemento de um array usando `pop()`.
4. Adicione um elemento no início do array usando `unshift()`.
5. Remova o primeiro elemento usando `shift()`.
6. Descubra quantos elementos existem em um array usando `length`.
7. Acesse e exiba o terceiro elemento de um array.
8. Substitua o valor de um elemento específico do array.
9. Percorra um array utilizando um loop `for`.
10. Percorra um array utilizando `for...of`.

---

## 🟡 Intermediário

11. Crie um array de números e calcule a soma de todos os elementos.
12. Encontre o maior número de um array.
13. Encontre o menor número de um array.
14. Conte quantas vezes um determinado valor aparece no array.
15. Verifique se um valor existe no array usando `includes()`.
16. Descubra o índice de um elemento usando `indexOf()`.
17. Inverta a ordem dos elementos usando `reverse()`.
18. Ordene um array de números em ordem crescente.
19. Ordene um array de strings em ordem alfabética.
20. Crie uma cópia de um array usando `slice()`.

---

## 🔵 Map, Filter e Reduce

21. Dado um array de números, crie outro contendo todos os valores multiplicados por 2 usando `map()`.
22. Converta um array de nomes para letras maiúsculas usando `map()`.
23. Filtre apenas os números pares usando `filter()`.
24. Filtre apenas os números maiores que 50.
25. Filtre palavras com mais de 5 caracteres.
26. Some todos os elementos utilizando `reduce()`.
27. Encontre o maior valor utilizando `reduce()`.
28. Conte quantos elementos existem utilizando `reduce()`.
29. Gere um array contendo apenas os nomes de pessoas maiores de idade.
30. Calcule a média dos valores de um array usando `reduce()`.

---

## 🔴 Manipulação Avançada

31. Una dois arrays utilizando o operador spread (`...`).
32. Remova elementos duplicados de um array.
33. Converta um array de strings em uma única string usando `join()`.
34. Transforme uma string em array usando `split()`.
35. Extraia apenas uma parte do array usando `slice()`.
36. Remova elementos específicos utilizando `splice()`.
37. Insira novos elementos em posições específicas usando `splice()`.
38. Crie uma função que receba um array e retorne outro sem valores *falsy* (`false`, `0`, `null`, `undefined`, `''`, `NaN`).

---

## 🏆 Desafios

**39.** Dado um array de objetos representando produtos, encontre o produto mais caro.

```js
const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 120 },
  { nome: "Monitor", preco: 900 }
];
```

---

**40.** Dado um array de objetos representando alunos, agrupe os alunos por turma.

```js
const alunos = [
  { nome: "Ana", turma: "A" },
  { nome: "João", turma: "B" },
  { nome: "Maria", turma: "A" },
  { nome: "Pedro", turma: "B" }
];
```

Resultado esperado:

```js
{
  A: [
    { nome: "Ana", turma: "A" },
    { nome: "Maria", turma: "A" }
  ],
  B: [
    { nome: "João", turma: "B" },
    { nome: "Pedro", turma: "B" }
  ]
}
```

---

## 📌 Métodos abordados

`push` · `pop` · `shift` · `unshift` · `slice` · `splice` · `map` · `filter` · `reduce` · `find` · `some` · `every` · `sort` · `reverse` · `join` · `includes` · `indexOf` · spread `...`

> Esses 40 exercícios são suficientes para construir uma base sólida para entrevistas e desenvolvimento real.
