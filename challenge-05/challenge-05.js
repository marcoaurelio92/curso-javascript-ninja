/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let arr = [ 'família', 'deus', 89, true, 100 ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction( x ){
... return x;
... }

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myFunction(arr)[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2( x, y ) {
  return x[y];
  }

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let dif = [
  1,
  'vasco',
  true,
  { prop1: 'carro', prop2: true, prop3: 49 },
  undefined
  ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2( dif, 0 )); // 1
console.log(myFunction2( dif, 1 )); // 'vasco'
console.log(myFunction2( dif, 2 )); // true
console.log(myFunction2( dif, 3 )); // { prop1: 'carro', prop2: true, prop3: 49 }
console.log(myFunction2( dif, 4 )); // undefined

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book( livro ){
  let livros = {
    'Harry Potter' : {
      quantidadePaginas: 264,
      autor: 'J. K. Rowling',
      editora: 'Rocco'
    },
    'Pinóquio' : {
      quantidadePaginas: 192,
      autor: 'Carlo Collodi',
      editora: 'Pelicano'
    },
     'The Witcher' : {
      quantidadePaginas: 320,
      autor: 'Andrzej Sapkowski',
      editora: 'WMF Martins Fontes'
    }
  };
  
  return !livro ? livros : livros[ livro ];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
let livro = 'Harry Potter';
console.log('O livro ' + livro + ' tem ' + book(livro).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + livro + ' é ' + book(livro).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + livro + ' foi publicado pela editora ' + book(livro).editora + '.');
