const exercices = require('../exercicios/e02-1')

describe('ES5 func()', () => {
  it('deve retornar 54999', () => {
    expect(exercices()).toBe(54999)
  })
})
