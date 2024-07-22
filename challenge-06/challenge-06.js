 /*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
let championship = 'Brasileirão 2024'

console.log( championship ); // Brasileirão 2024

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
let teams = [ 'Botafogo', 'Palmeiras', 'Vasco da Gama', 'Internacional', 'Fluminense' ];

console.log( teams ); 
/*
  [
  'Botafogo',
  'Palmeiras',
  'Vasco da Gama',
  'Internacional',
  'Fluminense'
  ]
*/

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition( posiçao ) {
  switch( posiçao ) {
    case 1:
    console.log( 'O time que está em ' + posiçao + 'º lugar é o ' + teams[0] + '.' );
    break;
    case 2:
    console.log( 'O time que está em ' + posiçao + 'º lugar é o ' + teams[1] + '.' );
    break;
    case 9:
    console.log( teams[2] );
    break;
    case 13:
    console.log( teams[3] );
    break;
    case 20:
    console.log( teams[4] );
    break;
    default:
    console.log( 'Não temos a informação do time que está nessa posição.' );
  }
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition( 1 ); // O time que está em 1º lugar é o Botafogo.
showTeamPosition( 2 ); // O time que está em 2º lugar é o Palmeiras.
showTeamPosition( 9 ); // Vasco da Gama
showTeamPosition( 20 ); // Fluminense

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
let num = 20
while(num < 30) {
  console.log( num );
  ++num;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex( cor ) {
  let hex;
  
  switch( cor ) {
    case 'red':
      hex = '#ff0000';
      console.log( 'O hexadecimal para a cor ' + cor + ' é ' + hex + '.' );
      break;
    case 'blue':
      hex = '#0000ff';
      console.log( 'O hexadecimal para a cor ' + cor + ' é ' + hex + '.' );
      break;
    case 'green':
      hex = '#008000';
      console.log( 'O hexadecimal para a cor ' + cor + ' é ' + hex + '.' );
      break;
    case 'orange':
      hex = '#ffa500';
      console.log( 'O hexadecimal para a cor ' + cor + ' é ' + hex + '.' );
      break;
    case 'yellow':
      hex = '#ffff00';
      console.log( 'O hexadecimal para a cor ' + cor + ' é ' + hex + '.' );
      break;
    default:
      console.log( 'Não temos o equivalente hexadecimal para ' + cor + '.' );
  }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('red'); // O hexadecimal para a cor red é #ff0000.
convertToHex('blue'); // O hexadecimal para a cor blue é #0000ff.
convertToHex('green'); // O hexadecimal para a cor green é #008000.
convertToHex('orange'); // O hexadecimal para a cor orange é #ffa500.
convertToHex('yellow'); // O hexadecimal para a cor yellow é #ffff00.
convertToHex('purple'); // Não temos o equivalente hexadecimal para purple.
convertToHex('gray'); // Não temos o equivalente hexadecimal para gray.
convertToHex('black'); // Não temos o equivalente hexadecimal para black.
