// Não altere os nomes das funções

function getBiggest (x, y) {
  // x e y são inteiros. Retorne o maior inteiro
  // se eles forem iguais retorne um dos dois
}

function greeting (language) {
  // retorne uma saudação para um dos três idiomas:
  // idioma: 'German' -> 'Guten Tag!'
  // idioma: 'English' -> 'Hello!'
  // idioma: 'Spanish' -> 'Hola!'
  // se idioma for undefined, retorne 'Hello!'
}

function isTenOrFive (num) {
  // retorne true se num for 10 ou 5
  // caso contrário, retorne false
}

function isInRange (num) {
  // retorne true se num é menor que 50 e maior que 20
}

function isInteger (num) {
  // retorne true se num é um inteiro
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // caso contrário retorne false
  // dica: Math.floor
}

function fizzBuzz (num) {
  // se num é divisível por 3, retorne 'fizz'
  // se num é divisível por 5, retorne 'buzz'
  // se num é divisível por 3 e 5, retorne 'fizzbuzz'
  // caso contrário, retorne num
}

function isPrime (num) {
  // retorne true se num é primo
  // caso contrário, retorne false
  // dica: número primo só é divisível por 1 e ele mesmo
  // dica: você pode resolver isso usando um laço
  // nota: 0 e 1 não são considerados primos
}

function returnFirst (arr) {
  // retorne o primeiro item do array
}

function returnLast (arr) {
  // retorne o último item do array
}

function getArrayLength (arr) {
  // retorne o comprimento do array
}

function incrementByOne (arr) {
  // arr é um array de inteiros
  // incremente cada inteiro por um
  // retorne o array
}

function addItemToArray (arr, item) {
  // adicione item ao final do array
  // retorne o array
}

function addItemToFront (arr, item) {
  // adicione item ao início do array
  // retorne o array
  // dics: use o método unshift() 
}

function wordsToSentence (words) {
  // words é um array de strings
  // retorne uma string que contém todas as palavras concatenadas
  // por espaço
  // exemplo: ['Hello', 'world!'] -> 'Hello world!'
}

function contains (arr, item) {
  // verifique se item está no arr
  // retorne true se estiver, caso contrário false
}

function addNumbers (numbers) {
  // numbers é um array de inteiros
  // some todos os inteiros e retorne o valor
}

function averageTestScore (testScores) {
  // testScores é um array. Itere em testScores e compute e média
  // retorne a média
}

function largestNumber (numbers) {
  // numbers é um array de inteiros
  // retorne o maior inteiro
}

// NÃO ALTERE O CÓDIGO ABAIXO DESSA LINHA
// --------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
}
