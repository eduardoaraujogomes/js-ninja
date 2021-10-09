/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let randomArray = [1, null, { a: 2 }, [], function () { }];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function arrayAsAParam(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(arrayAsAParam(randomArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function twoParams(arr, index) {
    return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let newArray = [[1.2, 3, function () { }], { a: 1 }, 'Edu', undefined, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(twoParams(newArray, 0));
console.log(twoParams(newArray, 1));
console.log(twoParams(newArray, 2));
console.log(twoParams(newArray, 3));
console.log(twoParams(newArray, 4));

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
function book(bookName) {
    let books = {
        'Harry Potter': {
            quantidadePaginas: 250,
            autor: 'J. K. Rowling',
            editora: 'Rocco',

        },
        'The Testaments': {
            quantidadePaginas: 500,
            autor: 'Margaret Atwood',
            editora: 'Barroco'
        },
        'Bridgital Nation': {
            quantidadePaginas: 334,
            autor: 'Shri N Chandrasekaran',
            editora: 'Atlas'
        },
        quantidadePaginasDoLivro: function (bookName) {
            return `O livro ${bookName} tem ${book('Harry Potter').quantidadePaginas} páginas!`;
        },
        autorDoLivro: function (bookName) {
            return `O autor do livro ${bookName} é ${book('Harry Potter').autor}.`;
        },
        editoraDoLivro: function (bookName) {
            return `O livro ${bookName} foi publicado pela editora ${book('Harry Potter').editora}.`;
        }
    };

    /*     if (bookName) {
            return books[bookName];
        }
    
        return books; */

    return !bookName ? books : books[bookName];
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
console.log(book().quantidadePaginasDoLivro("Harry Potter"));

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(book().autorDoLivro("Harry Potter"));

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log(book().editoraDoLivro("Harry Potter"));
