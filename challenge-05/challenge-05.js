/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

let qlqrValor = [25, 23, 'rinata', 112, 'xupisco'];


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

const recebeArray = (arrayRecebido) => {
    return arrayRecebido;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(recebeArray(qlqrValor)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

const arrayComIndice = (array, num) => {
    return array[num];    
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

let arrayVariado = [1, 'xupimpa', undefined, true, 15];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
arrayComIndice(arrayVariado, 0);
arrayComIndice(arrayVariado, 1);
arrayComIndice(arrayVariado, 2);
arrayComIndice(arrayVariado, 3);
arrayComIndice(arrayVariado, 4);

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

const book = (nomeDoLivro) => {
    let obj = {
        'harryPotter': {
            quantidadePaginas: 350,
            autor: 'JK Rowling',
            editora: 'fodase livros'
        },
        'scrum' : {
            quantidadePaginas: 250,
            autor: 'o bosta',
            editora: 'bosta livros'
        },
        'sapiens' : {
            quantidadePaginas: 999,
            autor: 'iraquiano fodido',
            editora: 'bomba livros'
        }
    }
    if (nomeDoLivro)
        return obj[nomeDoLivro];
    else 
        return obj;
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
console.log(`O livro Harry Potter tem ${book('harryPotter').quantidadePaginas} páginas`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro Harry Potter é ${book('harryPotter').autor}`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro Harry Potter foi publicado pela editora ${book('harryPotter').editora} `);

