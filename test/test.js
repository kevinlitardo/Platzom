
const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function () {

  it ('Si la palabra termina en "ar", se le quitan esos dos caracteres', function () {
    const translation = platzom('Programar')
    expect(translation).to.equal('Program')
  })
  it ('Si inicia con "z" se le añade "pe" al final', function () {
    const translation = platzom('Zorro')
    const translation2 = platzom('Zarpar')
    expect(translation).to.equal('Zorrope')
    expect(translation2).to.equal('Zarppe')
  })
  it ('Si la palabra tiene 10 o más letras llevara cun guion en la mitad', function () {
    const translation = platzom('Abecedario')
    expect(translation).to.equal('Abece-dario')
  })
  it ('Si la palabra original es un palindromo se intercalan mayusculas y minusculas y nada mas cuenta', function () {
    const translation = platzom('sometemos')
    expect(translation).to.equal('SoMeTeMoS')
  })

})