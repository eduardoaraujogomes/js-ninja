/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
let isTruthy = function (param) {
    return param ? true : false;
    //return !!param;
};


// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

console.log(isTruthy(0));
console.log(isTruthy(NaN));
console.log(isTruthy(''));
console.log(isTruthy(-0));
console.log(isTruthy(undefined));
console.log(isTruthy(null));
console.log(isTruthy(false));




/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

console.log(isTruthy(1));
console.log(isTruthy({}));
console.log(isTruthy(' '));
console.log(isTruthy("0"));
console.log(isTruthy([]));
console.log(isTruthy(true));
console.log(isTruthy(0.1));
console.log(isTruthy(-1));
console.log(isTruthy("null"));
console.log(isTruthy("false"));
/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
let carro = {
    marca: "Fiat",
    modelo: "Uno",
    placa: "FXA459",
    ano: 2020,
    cor: "Preta",
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0,
};


/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = function (cor) {
    carro.cor = cor;
};
/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function () {
    return carro.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function () {
    return carro.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function () {
    return carro.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function () {
    return `Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}.`;
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.adicionarPessoa = function (numPessoas) {
    let totalPessoas = carro.quantidadePessoas + numPessoas;
    let quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
    let pluralOuSingular = quantasPessoasCabem === 1 ? 'pessoa' : 'pessoas';

    if (carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos) {
        return 'O carro já está lotado!';
    }

    if (totalPessoas > carro.assentos) {
        return `Só cabem mais ${quantasPessoasCabem} ${pluralOuSingular}!`;
    }

    carro.quantidadePessoas += numPessoas;
    return `Já temos ${carro.quantidadePessoas} no carro!`;

    /*     if ((carro.assentos - carro.quantidadePessoas) === 1 && numPessoas > 1) {
            return `Só cabe mais ${carro.assentos - carro.quantidadePessoas} pessoa!`;
        }
        if (totalPessoas <= carro.assentos) {
            carro.quantidadePessoas += numPessoas;
            return `Já temos ${carro.quantidadePessoas}`;
        }
        if ((totalPessoas > carro.assentos) && ((carro.assentos - carro.quantidadePessoas) !== 0)) {
            return `Só cabem mais ${carro.assentos - carro.quantidadePessoas} pessoas!`;
        }
    
        return "O carro já está lotado!"; */

};


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/

console.log(carro.obterCor());
//preta


// Mude a cor do carro para vermelho.
carro.mudarCor('Vermelho');

// E agora, qual a cor do carro?

console.log(carro.obterCor());
//vermelho
// Mude a cor do carro para verde musgo.
carro.mudarCor('Verde musgo');

// E agora, qual a cor do carro?
console.log(carro.obterCor());
//verde musgo

// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo());
//Esse carro é um Fiat Uno.

// Adicione 2 pessoas no carro.
console.log(carro.adicionarPessoa(2));

// Adicione mais 4 pessoas no carro.
console.log(carro.adicionarPessoa(4));

// Faça o carro encher.
console.log(carro.adicionarPessoa(3));

// Tire 4 pessoas do carro.
console.log("aqui");
console.log(carro.adicionarPessoa(-5));

// Adicione 10 pessoas no carro.
console.log(carro.adicionarPessoa(3));
console.log(carro.adicionarPessoa(10));
console.log(carro.adicionarPessoa(1));
console.log(carro.adicionarPessoa(10));

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas);
//1
