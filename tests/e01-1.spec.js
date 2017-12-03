const exercises = require('../exercicios/e01/e01-1')

describe('multiplyByTen(num)', function () {
  it('deve retornar o argumento após multiplicar por dez', function () {
    expect(exercises.multiplyByTen(10)).toBe(100)
    expect(exercises.multiplyByTen(0)).toBe(0)
  })
})

describe('subtractFive(num)', function () {
  it('deve retornar o argumento após subtrair cinco', function () {
    expect(exercises.subtractFive(10)).toBe(5)
    expect(exercises.subtractFive(0)).toBe(-5)
  })
})

describe('areSameLength(str1, str2)', function () {
  it('deve retornar true se os argumentos tem o mesmo tamanho', function () {
    expect(exercises.areSameLength('hi', 'there')).toBe(false)
    expect(exercises.areSameLength('javascript', 'bumfuzzled')).toBe(true)
  })
})

describe('areEqual(x, y)', function () {
  it('deve retornar true se os argumentos são iguais', function () {
    expect(exercises.areEqual(15, 15)).toBe(true)
    expect(exercises.areEqual(90, 50)).toBe(false)
    expect(exercises.areEqual('test', 'test')).toBe(true)
  })
})

describe('lessThanNinety(num)', function () {
  it('deve retornar true se os argumentos são menores que noventa', function () {
    expect(exercises.lessThanNinety(15)).toBe(true)
    expect(exercises.lessThanNinety(90)).toBe(false)
    expect(exercises.lessThanNinety(100)).toBe(false)
  })
})

describe('greaterThanFifty(num)', function () {
  it('deve retornar true se o argumento é maior que cinquenta', function () {
    expect(exercises.greaterThanFifty(15)).toBe(false)
    expect(exercises.greaterThanFifty(50)).toBe(false)
    expect(exercises.greaterThanFifty(60)).toBe(true)
  })
})

describe('add(x, y)', function () {
  it('deve retornar a soma dos dois argumentos', function () {
    expect(exercises.add(5, 5)).toBe(10)
    expect(exercises.add(-1, 5)).toBe(4)
  })
})

describe('subtract(x, y)', function () {
  it('deve retornar a diferença entre os dois argumentos', function () {
    expect(exercises.subtract(5, 5)).toBe(0)
    expect(exercises.subtract(-1, 5)).toBe(-6)
    expect(exercises.subtract(5, -5)).toBe(10)
    expect(exercises.subtract(0, 0)).toBe(0)
  })
})

describe('divide(x, y)', function () {
  it('deve retornar o a divisão dos dois argumentos', function () {
    expect(exercises.divide(5, 5)).toBe(1)
    expect(exercises.divide(10, 5)).toBe(2)
    expect(exercises.divide(11, 2)).toBe(5.5)
  })
})

describe('multiply(x, y)', function () {
  it('deve retornar o produto dos dois argumentos', function () {
    expect(exercises.multiply(5, 5)).toBe(25)
    expect(exercises.multiply(10, -5)).toBe(-50)
    expect(exercises.multiply(11, 0)).toBe(0)
  })
})

describe('getRemainder(x, y)', function () {
  it('deve retornar o resultado da divisão dos dois argumentos', function () {
    expect(exercises.getRemainder(5, 5)).toBe(0)
    expect(exercises.getRemainder(10, 5)).toBe(0)
    expect(exercises.getRemainder(11, 2)).toBe(1)
  })
})

describe('isEven(num)', function () {
  it('deve retornar true se o argumento é par, false caso contrário', function () {
    expect(exercises.isEven(6)).toBe(true)
    expect(exercises.isEven(7)).toBe(false)
    expect(exercises.isEven(0)).toBe(true)
  })
})

describe('isOdd(num)', function () {
  it('deve retornar true se o argumento é ímpar, false caso contrário', function () {
    expect(exercises.isOdd(6)).toBe(false)
    expect(exercises.isOdd(7)).toBe(true)
    expect(exercises.isOdd(0)).toBe(false)
  })
})

describe('square(num)', function () {
  it('deve retornar o argumento ao quadrado', function () {
    expect(exercises.square(6)).toBe(36)
    expect(exercises.square(7)).toBe(49)
    expect(exercises.square(0)).toBe(0)
    expect(exercises.square(-5)).toBe(25)
  })
})

describe('cube(num)', function () {
  it('deve retornar o argumento ao cubo', function () {
    expect(exercises.cube(3)).toBe(27)
    expect(exercises.cube(0)).toBe(0)
    expect(exercises.cube(-5)).toBe(-125)
  })
})

describe('raiseToPower(num, exponent)', function () {
  it('retornar o argumento depois de elevar ao expoente', function () {
    expect(exercises.raiseToPower(2, 2)).toBe(4)
    expect(exercises.raiseToPower(2, 3)).toBe(8)
    expect(exercises.raiseToPower(0, 5)).toBe(0)
    expect(exercises.raiseToPower(10, 1)).toBe(10)
  })
})

describe('roundNumber(num)', function () {
  it('retornar o argumento após arredondar', function () {
    expect(exercises.roundNumber(1.5)).toBe(2)
    expect(exercises.roundNumber(2)).toBe(2)
    expect(exercises.roundNumber(0.1)).toBe(0)
  })
})

describe('roundUp(num)', function () {
  it('retornar o argumento após arredondar pra cima', function () {
    expect(exercises.roundUp(1.5)).toBe(2)
    expect(exercises.roundUp(2)).toBe(2)
    expect(exercises.roundUp(0.1)).toBe(1)
  })
})

describe('addExclamationPoint(str)', function () {
  it('adicionar uma exclamação ao final da string', function () {
    expect(exercises.addExclamationPoint('hello world')).toBe('hello world!')
    expect(exercises.addExclamationPoint('LambdaSchool')).toBe('LambdaSchool!')
  })
})

describe('combineNames(firstName, lastName)', function () {
  it('retornar duas strings combinadas em uma, separadas por um espaço', function () {
    expect(exercises.combineNames('hello', 'world')).toBe('hello world')
    expect(exercises.combineNames('Lambda', 'School')).toBe('Lambda School')
  })
})

describe('getGreeting(name)', function () {
  it('retornar uma string \'Oi {name}!\'', function () {
    expect(exercises.getGreeting('Ben')).toBe('Hello Ben!')
    expect(exercises.getGreeting('LambdaSchool')).toBe('Hello LambdaSchool!')
  })
})

describe('getRectangleArea(length, width)', function () {
  it('retornar a área do retângulo', function () {
    expect(exercises.getRectangleArea(2, 2)).toBe(4)
    expect(exercises.getRectangleArea(3, 6)).toBe(18)
    expect(exercises.getRectangleArea(0, 2)).toBe(0)
  })
})

describe('getTriangleArea(base, height)', function () {
  it('retornar a área do triângulo', function () {
    expect(exercises.getTriangleArea(2, 2)).toBe(2)
    expect(exercises.getTriangleArea(0, 2)).toBe(0)
  })
})

describe('getCircleArea(radius)', function () {
  it('retornar a área', function () {
    expect(exercises.getCircleArea(4)).toBe(50)
    expect(exercises.getCircleArea(0)).toBe(0)
  })
})

describe('getRectangularPrismVolume(length, width, height)', function () {
  it('retornar a área', function () {
    expect(exercises.getRectangularPrismVolume(2, 2, 2)).toBe(8)
    expect(exercises.getRectangularPrismVolume(0, 5, 10)).toBe(0)
  })
})
