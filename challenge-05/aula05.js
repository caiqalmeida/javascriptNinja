const myFunction = () => {
    return {
        nome: 'caique',
        sobrenome: 'almeida',
        profissao: 'frontEnd',
        idade: 23
    }
}

const recebeFunction = () => {
    let resultado = myFunction();
    return resultado;
}

console.log(recebeFunction(myFunction()));


// ----------------------------------------------------------------

function otherFunction () {
    return {
        prop1: 1,
        prop2: 'fernando',
        prop3: function() {
            return 'prop3';
        }
    }
}

console.log(otherFunction());

// ----------------------------------------------------------------

var arr = [1, 2, 3];

const Function = (arg) => {
    return arg;
}

console.log(Function());









