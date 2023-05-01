// ---- EJERCICIO 6 ----

function isInteger(x){
    return Number.isInteger(x);
}

/* 
console.log(isInteger(2)); // retorna true
console.log(isInteger(2.0)); // retorna true
console.log(isInteger(2.1)); // retorna false
console.log(isInteger(-10)); // retorna true
console.log(isInteger([1])); // retorna false
console.log(isInteger("2")); // retorna false
console.log(isInteger(true)); // retorna false
console.log(isInteger(null)); // retorna false
var num;
console.log(isInteger(num)); // retorna false 
*/

// ---- EJERCICIO 7 ----

function isNumeric(a){
    if (typeof a === 'string'){
        return !isNaN(a);
    }
    else
        return false;
}

/*
console.log(isNumeric("2")) // retorna true
console.log(isNumeric("2a")) // retorna false
console.log(isNumeric(2)) // retorna false
*/

// ---- EJERCICIO 8 ----

var prices = {
    MILK: 48.90,
    BREAD: 90.50,
    BUTTER: 130.12
};
var amounts = {
    MILK: 1,
    BREAD: 0.5,
    BUTTER: 0.2
};

function total(prices, amounts){
    var total = 0;
    var productos = Object.entries(amounts); 

    for (var i = 0; i < productos.length; i++){
        var productoActual = productos[i][0];
        var cantidad = productos[i][1];
        var precioUnitario = prices[productoActual];
        total += cantidad * precioUnitario;
    }
    return total;
}

/*
console.log(typeof prices);
console.log(prices.BREAD);
console.log(amounts["MILK"]);


console.log(total(prices, amounts)); // imprime 120.174
*/

var amounts2 = {
    BREAD: 1.5
};

// console.log(total(prices, amounts2));        


// ---- EJERCICIO 9 ----

var words = ['perro', 'gato', 'casa','árbol', 'nube', 'día', 'noche','zanahoria', 'babuino'];

let ztoa = [...words].sort((a, b) => b.localeCompare(a));
let atoz = [...words].sort((a, b) => a.localeCompare(b));

/*
console.log("WORDS: ", words);
console.log("ZTOA: ", ztoa);
console.log("ATOZ: ", atoz);
*/

// ---- EJERCICIO 10 ----

let length = [...words].sort((a, b) => a.length - b.length);

// console.log("LENGTH: ", length);
