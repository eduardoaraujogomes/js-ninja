'use strict';

//npm install -g mocha ( para instalar o mocha em dependencia global)
//npm install --sabe-dev chai

let expect = require('chai').expect;
let sum = require('../src/sum');

describe('# SUM', function () {
  it('Should SUM module to be a function', function () {
    expect(sum).to.be.a('function');
  });

  //Aqui é no formato BDD (Behavior-driven development)
  it('Should SUM return 10 when I pass 1 and 9', function () {
    expect(sum(1, 9)).to.be.equal(10);
  });

  it('Should SUM return 5 when I pass 2 and 3', function () {
    expect(sum(2, 3)).to.be.equal(5);
  });

  it('Shoul SUM return an error if it receive just one parameter', function () {
    expect(sum(1)).to.be.an('error');
  });

  it('Should SUM return an error if the parameter has not a number', function () {
    expect(sum('a', 'b')).to.be.an('error');
  });

  //No formato TDD (Test-driven development) ficaria assim
  it('Assert', function () {
    let assert = require('assert');
    assert.strictEqual(sum(20, 30), 50, 'Message'); //usando o equal ele faz com 2 sinais de igual e usando o strictEqual ele faz com 3 sinais de igual
  });
});

/*
Cobertura de testes usando o istanbul

npm i -g istanbul
npm install --save-dev mocha (para instalar o mocha localmente)
istanbul cover node_modules/mocha/bin/_mocha ( para executar o istanbul) passar os arquivos que você quiser fazer o coverage se tiver mais de 1


Ele cria uma pasta coverage que tem um arquivo index.html e nele você pode ver melhor os testes

*/
