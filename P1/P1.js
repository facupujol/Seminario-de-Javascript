// EJ5

let text = "Lorem ipsum dolor sit amet."

function ejercicio5(palabra){
    console.log("Longitud palabra: " + palabra.length);
    if (palabra.includes("ipsum")){
        console.log("Posicion 'ipsum': " + palabra.indexOf("ipsum"));
    }
    console.log("Mayusculas: " + palabra.substring(1,4).toUpperCase());
}

console.log("------------Ejercicio 5------------");
ejercicio5(text);


// EJ6
let a = 1;
let b = 2;
let c = 3;

function ejercicio6(a, b, c){
    a = Math.floor(Math.random()*10);
    b = Math.floor(Math.random()*10); 
    c = Math.floor(Math.random()*10); 
    console.log("(A+B)^C: " + Math.pow(a+b, c));
    console.log("Maximo: " + Math.max(a,b,c));
}

console.log("------------Ejercicio 6------------");
ejercicio6(a,b,c);


let dia1 = new Date();
let dia2 = new Date(1575978300000);

function imprimirFecha(d){
    console.log(d);
}

function swapDates(d1, d2){
    d2.setFullYear(d1.getFullYear());
    d1.setMonth(d2.getMonth());
}

function restar (d1, d2){
    return (d1-d2);
}

console.log("------------Ejercicio 7------------");
imprimirFecha(dia2); imprimirFecha(dia1);
console.log("Swappeo fechas");
swapDates(dia1,dia2);
imprimirFecha(dia2); imprimirFecha(dia1);
console.log("Diferencia en dias: " + restar(dia1,dia2)/(1000*3600*24) );
