var url = "https://swapi.dev/api/people/";
const listaPersonajes = document.getElementById("personajes");
const listaData = document.getElementById("data");
const botonSiguiente = document.getElementById("botonSiguiente");
const botonAnterior = document.getElementById("botonAnterior");
const displayAltura = document.getElementById("altura");
const displayPelo = document.getElementById("pelo");
const displayPlaneta = document.getElementById("planeta");
const displayNacimiento = document.getElementById("nac");
const displayGenero = document.getElementById("genero");
const listaPeliculas = document.getElementById("pelis");



var linkSiguiente;
var linkAnterior;

botonSiguiente.addEventListener("click", function llamarSiguientes(){
    const elementos = [...document.getElementsByClassName("perso")];
    elementos.forEach(personaje => listaPersonajes.removeChild(personaje));
    url = linkSiguiente;
    traerPersonajes();
});

botonAnterior.addEventListener("click", function traerAnteriores(){
    const elementos = [...document.getElementsByClassName("perso")];
    elementos.forEach(personaje => listaPersonajes.removeChild(personaje));
    url = linkAnterior;
    traerPersonajes();
})

function mapearPersonajes(pjs){
    return pjs.map((p) => ({
        name: p.name,
        height: p.height,
        DOB: p.birth_year,
        gender: p.gender,
        hair: p.hair_color,
        homeworld: p.homeworld,
        films: p.films,
    }));
}

function mostrarData(personaje){
    const elementos = [...document.getElementsByClassName("peli")];
    elementos.forEach(personaje => listaPeliculas.removeChild(personaje));
    displayAltura.textContent = "Altura: " + personaje.height;
    displayNacimiento.textContent = "Fecha de nacimiento: " +personaje.DOB;
    displayGenero.textContent = "Genero: " +personaje.gender;
    displayPelo.textContent = "Color de pelo: " +personaje.hair;
    fetch(personaje.homeworld)
    .then(rpta => rpta.json())
    .then(data => {
        displayPlaneta.textContent = "Planeta: " + data.name;
    })
    .catch(error => {
        console.log(error);
    })
    personaje.films.forEach((peli) => {
        fetch(peli)
        .then(rpta => rpta.json())
        .then(data => {
            const elementoPelis = document.createElement("li");
            elementoPelis.textContent = data.title;
            elementoPelis.className = "peli";
            listaPeliculas.appendChild(elementoPelis);
        })
        .catch(error => {
            console.log(error);
        })
    });
}

function traerPersonajes(){
    fetch(url)
    .then(rpta => rpta.json())
    .then(data => {
        const pjs = mapearPersonajes(data.results);
        linkSiguiente = data.next;
        linkAnterior = data.previous;
        pjs.forEach(personaje => {
            const elementoNombre = document.createElement("li");
            elementoNombre.textContent = personaje.name;
            elementoNombre.className = "perso";
            elementoNombre.addEventListener("click", function(){mostrarData(personaje)});
            listaPersonajes.appendChild(elementoNombre);
        });
    })
    .catch(error => {
        console.log(error);
    })
}

traerPersonajes();