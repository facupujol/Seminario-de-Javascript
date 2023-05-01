const url = "https://restcountries.com/v3.1/all";

const boton = document.getElementById("boton");
const inpu = document.getElementById("inpu");

boton.addEventListener("click", () => {
    traerPaises(inpu.value);
})

function traerPaises(p) {
fetch(url)
.then(rpta => rpta.json())
.then(data => {
    const list = document.getElementById("lista");
    let encontre = false;
    data.forEach(pais => {
    if (pais.name.common.includes(p)){
        const elemento = document.createElement("li");
        elemento.textContent = "Nombre: " + pais.name.common + ", Capital: " + pais.capital + ", Poblacion: " + pais.population + ", Region: " + pais.region + ", Subregion: " + pais.subregion;
        elemento.style.fontSize = "20px";
        list.appendChild(elemento);   
        encontre = true;
    } 
    });
    if (!encontre){
        const elemento = document.createElement("li");
        elemento.textContent = "No se encontro el pais.";
        elemento.style.fontSize = "20px";
        list.appendChild(elemento);   
    }
});
}



//traerPaises();