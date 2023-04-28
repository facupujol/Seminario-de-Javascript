// ---- EJERCICIO 1 ----

function ejercicio1(){
let a = 1;
let b = true;
let c = "Hola";
let d = null;
let e;
let f = 2n ** 60n;
let g = new Date();
let h = [1,2,3,4];
let i = 'Hola';
let j = { x: 2.0, y: -3.6 };
let k = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

console.log("A: " + typeof a);
console.log("B: " + typeof b);
console.log("C: " + typeof c);
console.log("D: " + typeof d);
console.log("E: " + typeof e);
console.log("F: " + typeof f);
console.log("G: " + typeof g);
console.log("H: " + typeof h);
console.log("I: " + typeof i);
console.log("J: " + typeof j);
console.log("K: " + typeof k);
}

// ejercicio1();

// ---- EJERCICIO 2 ----

function ejercicio2(){
let a = 25;
console.log(++a);   // Suma antes de imprimir, asique imprime el numero ya sumado
console.log(a++);   // Suma despues de imprimir, asique imprime el numero sin ser sumado
console.log(a == '27'); // Ambos son 27 asique es true, aunque no sean del mismo tipo
console.log(a === '27');    // Como "a" no es un string imprime false.
}

// ejercicio2();

// ---- EJERCICIO 3 ----

var prices = [1.2, 2, 22, -33, 12, 0.0, "13", Math.PI];
var names = ["John", "Paul", "George", "Ringo"];

function max(values){
    let max = Math.max(...values);
    return max;
}

function min(values){
    let min = Math.min(...values);
    return min;
}

function sum(values){
    let suma = 0;
    for (let i =0; i<values.length; i++){
        if (typeof values[i] === 'number'){
            suma+= values[i];
        }
    }
    return suma;
}

function avg(values){
    return (sum(values)/values.length);
}

/*
console.log(max(prices));
console.log(min(prices));
console.log(avg(prices));
console.log(sum(prices));


console.log(max(names));
console.log(min(names));
console.log(avg(names));
console.log(sum(names));

console.log(max([]));
console.log(min([]));
console.log(avg([]));
console.log(sum([])); 
*/

// ---- EJERCICIO 4 ----

function concat(left, right) {
    return left.concat(right);
}

var names = ["John", "Paul", "George", "Ringo"];

// console.log(names.reduce(concat));

// ---- EJERCICIO 5 ----

function arrayEquals(a, b){
    let cant = 0;
    if (a != null && b != null){
        if (a.length == b.length){
            for (let i = 0; i < a.length; i++){
                if (a[i] === b[i]){
                    cant++;
                }
            }
        }
        return (cant == a.length);
    }
    return false;
}

var a = [1,2,3,4];
var b = [1,2,3,4];
var c = [1,2,3,4,5];
var d = "Hola";
var e = null;

/* console.log(arrayEquals(a, a));
console.log(arrayEquals(a, b));
console.log(arrayEquals(b, c));
console.log(arrayEquals(e, c));
console.log(arrayEquals(c, d));
console.log(arrayEquals(e, e)); */
