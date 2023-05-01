// ---- EJERCICIO 11 ---- 

function identity(x){
    return x;
}

var id = function(x){
    return x;
}

var iden = x => x;

var identidad = identity;

/*
console.log(typeof identity);
console.log(typeof id);
console.log(typeof iden);
console.log(typeof identidad);


console.log(identity('Hola'));
console.log(id('Hello'));
console.log(iden('Buen día'));
console.log(identidad('Buen día'));
*/

// ---- EJERCICIO 12 ----

var numbers = [ 1, 3, 4, 6, 23, 56, 56, 67, 3,
    567, 98, 45, 480, 324, 546, 56 ];

var sum = (x, y) => x + y;

function reduce(array, binaryOperation, initialValue){
    let total = initialValue;
    for (let i = 0; i<array.length; i++){
        total = binaryOperation(array[i],total); 
    }
    return total;
}

/*
console.log(numbers.reduce(sum, 0));
console.log(reduce(numbers, sum, 0));
*/

// ---- EJERCICIO 13 ----

var alice = {
    name : "Alice",
    dob : new Date(2001, 3, 4),
    height : 165,
    weight : 68
};

var bob = {
    name : "Robert",
    dob : new Date(1997, 0, 31),
    height : 170,
    weight : 88
};

var charly = {
    name : "Charles",
    dob : new Date(1978, 9, 15),
    height : 188,
    weight : 102
};

var lucy = {
    name : "Lucía",
    dob : new Date(1955, 7, 7),
    height : 155,
    weight : 61
};

var peter = {
    name : "Peter",
    dob : new Date(1988, 2, 9),
    height : 165,
    weight : 99
};

var luke = {
    name : "Lucas",
    dob : new Date(1910, 11, 4),
    height : 172,
    weight : 75
};

// Inciso 1
function nombresIMCMayorA25(...personas){ 
    let res = personas.filter(persona => persona.weight/((persona.height/100)*(persona.height/100))>25).map(persona => persona.name);
    return res;
}

// Inciso 2
function indexarPorNombre(...personas){ 
    let fechaActual = new Date(Date.now());
    let res = personas.sort((a, b) => a.name.localeCompare(b.name))
        .map(persona => ({[persona.name]: (fechaActual.getUTCFullYear() - persona.dob.getUTCFullYear())}));
    return res;
}

// Inciso 3
function IMCMayoresDe40(...personas){
    let fechaActual = new Date(Date.now());
    let res = personas.filter(persona => (fechaActual.getUTCFullYear() - persona.dob.getUTCFullYear())>40).map(persona => persona.weight/((persona.height/100)*(persona.height/100)));
    return res;
}

// Inciso 4
function imcPromedio(...personas){
    let res = personas.reduce((num, b) => {
        return num += b.weight/((b.height/100)*(b.height/100))
    }, 0);
    return res/personas.length;
}


// Inciso 5
function personaMasJoven(...personas){
    return personas.reduce((a, b) => {
        if (!a){
            return a = b;
        }
        if (b.dob.valueOf() > a.dob.valueOf()){
            a = b;
        }
        return a;
    }, null);
}

// Inciso 6
function ordenarPorEstatura(...personas){
    return personas.sort((a, b) => a.height.toString().localeCompare(b.height));
}


//  console.log(nombresIMCMayorA25(alice, luke, lucy, peter, bob, charly));
//  console.log(indexarPorNombre(alice, luke, lucy, peter, bob, charly));
//  console.log(IMCMayoresDe40(alice, luke, lucy, peter, bob, charly));
//  console.log(ordenarPorEstatura(alice, luke, lucy, peter, bob, charly));
//  console.log(personaMasJoven(alice, luke, lucy, peter, bob, charly));
//  console.log(imcPromedio(alice, luke, lucy, peter, bob, charly));

