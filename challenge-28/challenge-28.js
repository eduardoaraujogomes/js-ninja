(function () {
  'use strict';


  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."
  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://ws.apicep.com/cep/[cepCode].json", onde [cepCode] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [cepCode]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [cepCode]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [cepCode]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

  function DOM(elements) {
    this.elements = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(eventType, callback) {
    this.elements.forEach(function (element) {
      element.addEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.off = function off(eventType, callback) {
    this.elements.forEach(function (element) {
      element.removeEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.elements;
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.elements, arguments);
  };
  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.elements, arguments);
  };
  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.elements, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.elements, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.elements, arguments);
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.elements, arguments);
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.elements, arguments);
  };

  DOM.isArray = function isArray(param) {
    return Object.prototype.toString.call(param) === '[object Array]';
  };

  DOM.isObject = function isObject(param) {
    return Object.prototype.toString.call(param) === '[object Object]';
  };

  DOM.isFunction = function isFunction(param) {
    return Object.prototype.toString.call(param) === '[object Function]';
  };

  DOM.isNumber = function isNumber(param) {
    return Object.prototype.toString.call(param) === '[object Number]';
  };

  DOM.isString = function isString(param) {
    return Object.prototype.toString.call(param) === '[object String]';
  };

  DOM.isBoolean = function isBoolean(param) {
    return Object.prototype.toString.call(param) === '[object Boolean]';
  };

  DOM.isNull = function isNull(param) {
    return Object.prototype.toString.call(param) === '[object Null]' ||
      Object.prototype.toString.call(param) === '[object Undefined]';
  };

  let $formCEP = new DOM('[data-js="form-cep"]');
  let $inputCEP = new DOM('[data-js="input-cep"]');
  let $logradouro = new DOM('[data-js="logradouro"]');
  let $bairro = new DOM('[data-js="bairro"]');
  let $estado = new DOM('[data-js="estado"]');
  let $cidade = new DOM('[data-js="cidade"]');
  let $cep = new DOM('[data-js="cep"]');
  let $status = new DOM('[data-js="status"');
  $formCEP.on('submit', handleSubmitFormCEP);
  let ajax = new XMLHttpRequest();



  function handleSubmitFormCEP(event) {
    event.preventDefault();
    let url = getUrl();
    ajax.open('GET', url);
    ajax.send();
    getMessage('loading');
    ajax.addEventListener('readystatechange', handleReadyStateChange);

  }

  function getUrl() {
    return replaceCEP('https://ws.apicep.com/cep/[cepCode].json');
  }

  function clearCEP() {
    return $inputCEP.get()[0].value.replace(/\D/g, '');
  }

  function handleReadyStateChange() {
    if (isRequestOk()) {
      getMessage('ok');
      fillCEPFields();
    }
  }

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function fillCEPFields() {
    let data = JSON.parse(ajax.responseText);

    if (data.status !== 200) {
      getMessage('error');
      data = clearData();
    }

    $logradouro.get()[0].textContent = data.address;
    $bairro.get()[0].textContent = data.district;
    $estado.get()[0].textContent = data.state;
    $cidade.get()[0].textContent = data.city;
    $cep.get()[0].textContent = data.code;
  }

  function clearData() {
    return {
      address: '-',
      district: '-',
      state: '-',
      city: '-',
      code: '-'
    };
  }



  function getMessage(type) {
    let messages = {
      loading: replaceCEP('Buscando informações para o CEP [cepCode]...'),
      ok: replaceCEP('Endereço referente ao CEP [cepCode]:'),
      error: replaceCEP('Não encontramos o endereço para o CEP [cepCode].')
    };

    $status.get()[0].textContent = messages[type];
  }

  function replaceCEP(message) {
    return message.replace('[cepCode]', clearCEP());
  }


})();
