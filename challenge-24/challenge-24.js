(function (win, doc) {
  'use strict';
  /*
  Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
  o código, conforme vimos na aula anterior. Quebrar as responsabilidades
  em funções, onde cada função faça somente uma única coisa, e faça bem feito.
  - Remova as duplicações de código;
  - agrupe os códigos que estão soltos em funções (declarações de variáveis,
  listeners de eventos, etc);
  - faça refactories para melhorar esse código, mas de forma que o mantenha com a
  mesma funcionalidade.
  */

  let $visor = doc.querySelector('[data-js="visor"]');
  let $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
  let $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
  let $buttonCE = doc.querySelector('[data-js="clear"]');
  let $buttonEqual = doc.querySelector('[data-js="equal"]');

  function initialize() {
    initEvents();
  }

  function initEvents() {
    $buttonsNumbers.forEach(function ($button) {
      $button.addEventListener('click', handleClickNumber, false);
    });
    $buttonsOperations.forEach(function ($button) {
      $button.addEventListener('click', handleOperation, false);
    });
    $buttonCE.addEventListener('click', handleClickCE, false);
    $buttonEqual.addEventListener('click', handleClickEqual, false);
  }


  function handleClickNumber() {
    if ($visor.value == 0) {
      return $visor.value = this.value;
    }
    $visor.value += this.value;
  }

  function handleOperation() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    $visor.value += this.value;
  }

  function handleClickCE() {
    $visor.value = 0;
  }

  function isLastItemAnOperation(number) {
    let operations = getOperations();
    let lastItem = number.split('').pop();
    return operations.some(function (operator) {
      return operator === lastItem;
    });
  }

  function removeLastItemIfItIsAnOperator(string) {
    if (isLastItemAnOperation(string)) {
      return string.slice(0, -1);
    }
    return string;
  }

  function getOperations() {
    return Array.prototype.map.call($buttonsOperations, function (button) {
      return button.value;
    });
  }

  function doOperation(operator, firstValue, lastValue) {
    switch (operator) {
      case '+':
        return Number(firstValue) + Number(lastValue);
      case '-':
        return Number(firstValue) - Number(lastValue);
      case '÷':
        return Number(firstValue) / Number(lastValue);
      case 'x':
        return Number(firstValue) * Number(lastValue);
    }
  }

  function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    let allValues = $visor.value.match(getRegexOperations());
    $visor.value = allValues.reduce(calculateAllValues);
  }

  function getRegexOperations() {
    return new RegExp('\\d+[' + getOperations().join('') + ']?', 'g');
  }

  function calculateAllValues(accumulated, actual) {
    let firstValue = accumulated.slice(0, -1);
    let operator = accumulated.split('').pop();
    let lastValue = removeLastItemIfItIsAnOperator(actual);
    let lastOperator = getLastOperator(actual);
    return doOperation(operator, firstValue, lastValue) + lastOperator;
  };

  function getLastOperator(value) {
    return isLastItemAnOperation(value) ? value.split('').pop() : '';
  }

  initialize();


}(window, document));
